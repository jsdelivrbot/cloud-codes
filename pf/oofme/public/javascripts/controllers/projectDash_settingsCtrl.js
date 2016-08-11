/////////////////////////////////////
// projectDash_settings controller //
/////////////////////////////////////
// projectDash > settings page controller

angular.module('oofme')

.controller('projectDash_settingsCtrl', ['$scope', '$http', '$rootScope', '$state', '$mdDialog', '$mdMedia', 'Store', function($scope, $http, $rootScope, $state, $mdDialog, $mdMedia, Store) {
	if (Store.currentLoadedProject) {
		// initialize $scope.project var.
		$scope.project = angular.copy(Store.currentLoadedProject);

		// apply changes to system wide
		$scope.applyChanges = function() {
			// post data to server
			$http.post('apis/updateProject', $scope.project)
				.then(
					// success callback
					function(response) {
						if (response.data == true) {
							Store.currentLoadedProject = angular.copy($scope.project);
							console.log(Store.currentLoadedProject);
							Store.showSimpleToast("Changes saved.");
						} else {
							// $state.go('error');
							alert("Something went wrong!");
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
	} else {
		$state.go('allProjects');
		console.log("Undefined Store.currentLoadedProject. So redirecting to 'allProjects' state");
	}
}]);
