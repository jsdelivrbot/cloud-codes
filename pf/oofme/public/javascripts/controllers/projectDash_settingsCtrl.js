/////////////////////////////////////
// projectDash_settings controller //
/////////////////////////////////////
// projectDash > settings page controller

angular.module('oofme')

.controller('projectDash_settingsCtrl', ['$scope', '$http', '$rootScope', '$state', '$mdDialog', '$mdMedia', 'Store', function($scope, $http, $rootScope, $state, $mdDialog, $mdMedia, Store) {
	// initialize $scope.project var.
	$scope.project = angular.copy(Store.currentLoadedProject);

	// apply changes to system wide
	$scope.applyChanges = function() {
		Store.currentLoadedProject = angular.copy($scope.project);
		console.log(Store.currentLoadedProject);
		// post data to server
		$http.post('apis/updateProject', Store.currentLoadedProject)
			.then(
				// success callback
				function(response) {
					if (response.data == true) {
						Store.showSimpleToast("Changes saved.");
					} else {
						$state.go('error');
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
}]);
