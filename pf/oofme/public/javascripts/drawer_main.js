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
		});
})

.controller('allProjectsCtrl', ['$scope', 'initialData','$mdDialog', '$mdMedia', 'Store', function($scope, initialData,$mdDialog, $mdMedia, Store) {
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

	$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
	$scope.deleteProj = function(ev, project) {
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
		$mdDialog.show({
				controller: DialogController,
				templateUrl: '/templated/confirm-delete.html',
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

// controller
.controller('balloonCtrl', ['$scope', '$mdDialog', '$mdMedia', 'Store', function($scope, $mdDialog, $mdMedia, Store) {

	// Start projec - dialog
	$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
	$scope.projectNamePrompt = function(ev) {
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
		$mdDialog.show({
				controller: DialogController,
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
					.hideDelay(2000)
				);
		},
		checkedList: [1, 2]
	}
}]);

function DialogController($scope, $mdDialog) {
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
