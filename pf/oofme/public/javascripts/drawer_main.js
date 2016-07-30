angular.module('oofme', ['ngMaterial', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
	// for any unmatched url, redirect to the default.
	$urlRouterProvider.otherwise("/");

	// srtup states
	$stateProvider
		.state('balloon', {
			url: "/balloon",
			templateUrl: "/templated/balloon-card.html",
			controller: 'balloonCtrl',
		})
		.state('dash', {
			url: "/",
			templateUrl: "/templated/all-projects.html",
			controller: "allProjectsCtrl",
			resolve: {
				// get project list
				initialData: function($http) {
					return $http.get('/apis/initializeMe')
						.then(function(response) {
							// console.log(JSON.stringify(response.data));
							return response.data;
						});
				}
			}
		})
		.state('initializeProject', {
			url: "/initialize",
			templateUrl: "/templated/initialize-project.html",
			controller: 'initializeCtrl'
		});
})

.controller('initializeCtrl', ['$scope', '$state', '$mdDialog', '$mdMedia', 'Store', function($scope, $state, $mdDialog, $mdMedia, Store) {
	$scope.projectName = "hello";
	$scope.tagline = "tag";
}])

.controller('allProjectsCtrl', ['$scope', '$state', 'initialData', '$mdDialog', '$mdMedia', 'Store', function($scope, $state, initialData, $mdDialog, $mdMedia, Store) {
	Store.allProjects = initialData.projects;
	$scope.projects = Store.allProjects;
	// console.log(Store);
	$scope.isChecked = function(projectID) {
		return Store.checkedList.indexOf(projectID) > -1;
	};
	$scope.toggleCheck = function(projectID) {
		var idx = Store.checkedList.indexOf(projectID);
		if (idx > -1) {
			Store.checkedList.splice(idx, 1);
		} else {
			Store.checkedList.push(projectID);
		}
	};

	$scope.isAllChecked = function() {
		return Store.checkedList.length === Store.allProjects.length;
	};

	$scope.isIndeterminate = function() {
		// console.log(Store.checkedList.length !== 0 && Store.checkedList.length !== Store.allProjects.length);
		return Store.checkedList.length !== 0 && Store.checkedList.length !== Store.allProjects.length;
	};
	$scope.toggleAllCheck = function() {
		// if all checked > unchek them all.
		if (Store.checkedList.length === Store.allProjects.length) {
			Store.checkedList = [];
		} else if (Store.checkedList.length === 0 || Store.checkedList.length > 0) {
			for (var i in Store.allProjects) {
				var idx = Store.checkedList.indexOf(Store.allProjects[i].id);
				if (idx < 0) {
					Store.checkedList.push(Store.allProjects[i].id);
				}
			}
		}
	};

	// handle delete dialog
	$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
	$scope.deleteProj = function(ev, project) {
		Store.deletingProject = project;
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
		$mdDialog.show({
				controller: delProjCtrl,
				templateUrl: '/templated/confirm-delete.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: useFullScreen
			})
			.then(function(answer) {
				// $scope.status = 'You said the information was "' + answer + '".';
				// console.log(answer);
				Store.allProjects.splice(Store.allProjects.indexOf(answer), 1);
				Store.checkedList.splice(Store.checkedList.indexOf(answer.id), 1);
				// console.log(Store);

				Store.showSimpleToast(answer.name + " deleted.");
			}, function() {
				// $scope.status = 'You cancelled the dialog.';
				// $scope.toastMessage = 'Cancelled';
				// Store.showSimpleToast('Cancelled');
			});
		$scope.$watch(function() {
			return $mdMedia('xs') || $mdMedia('sm');
		}, function(wantsFullScreen) {
			$scope.customFullscreen = (wantsFullScreen === true);
		});
	};

	// handle new project dialog
	$scope.projectNamePrompt = function(ev) {
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
		$mdDialog.show({
				controller: startProjCtrl,
				templateUrl: '/templated/create-new-project.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: useFullScreen
			})
			.then(function(answer) {
				// $scope.status = 'You said the information was "' + answer + '".';
				// $scope.toastMessage = answer;
				Store.initializeProject = null;
				if (answer) {
					Store.showSimpleToast("Initializing " + answer);
					Store.initializeProject = {
						name: answer
					};
					$state.go('initializeProject');
				}
				// console.log(Store);

			}, function() {
				// cancelled;
				// $scope.status = 'You cancelled the dialog.';
				// $scope.toastMessage = 'Cancelled';
				// Store.showSimpleToast('Cancelled');
			});
		$scope.$watch(function() {
			return $mdMedia('xs') || $mdMedia('sm');
		}, function(wantsFullScreen) {
			$scope.customFullscreen = (wantsFullScreen === true);
		});

	};

}])

// balloon controller
.controller('balloonCtrl', ['$scope', '$mdDialog', '$mdMedia', 'Store', function($scope, $mdDialog, $mdMedia, Store) {

	// Start projec - dialog
	$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
	$scope.projectNamePrompt = function(ev) {
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
		$mdDialog.show({
				controller: startProjCtrl,
				templateUrl: '/templated/create-new-project.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose: true,
				fullscreen: useFullScreen
			})
			.then(function(answer) {
				// $scope.status = 'You said the information was "' + answer + '".';
				// $scope.toastMessage = answer;
				Store.showSimpleToast(answer);
			}, function() {
				// $scope.status = 'You cancelled the dialog.';
				// $scope.toastMessage = 'Cancelled';
				Store.showSimpleToast('Cancelled');
			});
		$scope.$watch(function() {
			return $mdMedia('xs') || $mdMedia('sm');
		}, function(wantsFullScreen) {
			$scope.customFullscreen = (wantsFullScreen === true);
		});

	};
}])

// // Store factory
.factory('Store', ['$mdToast', '$http', function($mdToast, $http) {
	return {
		// For Toasting a message
		showSimpleToast: function(toastMessage) {
			if (toastMessage)
				$mdToast.show(
					$mdToast.simple()
					.textContent(toastMessage)
					.position('bottom left')
					.hideDelay(4000)
				);
		},
		checkedList: [1, 2]
	}
}]);

function delProjCtrl($scope, $mdDialog, Store) {
	$scope.delProject = Store.deletingProject;
	$scope.isDisabled = function() {
		if (($scope.projectName === Store.deletingProject.name) && $scope.agreeDel) {
			return false;
		} else return true;
	}

	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};
}

function startProjCtrl($scope, $mdDialog, Store) {
	$scope.hide = function() {
		$mdDialog.hide();
	};
	$scope.cancel = function() {
		$mdDialog.cancel();
	};
	$scope.answer = function(answer) {
		$mdDialog.hide(answer);
	};
}
