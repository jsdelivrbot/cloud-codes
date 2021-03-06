////////////////////////////
// allProjects controller //
////////////////////////////
// controller to manage the all projects' table.

angular.module('oofme')

.controller('allProjectsCtrl', ['$scope', '$http', '$state', 'initialData', '$mdDialog', '$mdMedia', 'Store', function($scope, $http, $state, initialData, $mdDialog, $mdMedia, Store) {
	Store.allProjects = initialData;
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

	// go to a specific project
	$scope.goToProject = function(project) {
		console.log('project ', project);
		Store.currentLoadedProject = project;
		$state.go('projectDash');
	}

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
				// make it so on server > mongo
				$http.get('/apis/deleteProject/' + answer.id)
					.then(
						// success
						function(response) {
							console.log('in success :response ', response);

							if (response.data == false) {
								// $state.go("error");
								alert("something went wrong");
							} else {
								Store.allProjects.splice(Store.allProjects.indexOf(answer), 1);
								Store.checkedList.splice(Store.checkedList.indexOf(answer.id), 1);
								Store.showSimpleToast(answer.name + " deleted.");
							}
						},
						// failure
						function(response) {
							console.log('response ', response);
							console.log("error in deleting post");
							$state.go('error');
						}
					);
				// Store.showSimpleToast(answer.name + " deleted.");
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
				if (answer) {
					Store.showSimpleToast("Initializing " + answer);
					$http.get('/apis/getShortID')
						.then(
							// success
							function(response) {
								if (response.data) {
									$http.post('apis/addNewProject', {
										name: answer,
										id: response.data,
										published: false
									}).then(
										// success callback
										function(resp) {
											if (resp.data == true) {
												Store.allProjects.push({
													name: answer,
													id: response.data,
													published: false
												});
												Store.currentLoadedProject = {
													name: answer,
													id: response.data
												};
											} else {
												// $state.go('error');
												alert("the opetation wasn't success");
												console.log('post response.data ', response.data);
											}
										},
										// failure callback
										function(response) {
											console.log('response ', response);
											$state.go('error');

										}
									);

								}

								// post the data to server to save it remotely

							});
					$state.go('projectDash');
					// console.log(JSON.stringify(Store.allProjects));
					// console.log(JSON.stringify(Store));
					// console.log(JSON.stringify(id));

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
};
