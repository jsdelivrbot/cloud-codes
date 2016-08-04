/////////////////////////////////////
// projectDash_settings controller //
/////////////////////////////////////
// projectDash > settings page controller

angular.module('oofme')

.controller('projectDash_settingsCtrl', ['$scope', '$rootScope', '$state', '$mdDialog', '$mdMedia', 'Store', function($scope, $rootScope, $state, $mdDialog, $mdMedia, Store) {
	// $scope.project = Store.currentLoadedProject;
	$scope.project = {
		name: "test",
		id: 45,
		tagline: ''
	};

	$scope.applyChanges = function() {
		Store.currentLoadedProject = $scope.project;
		console.log(Store.currentLoadedProject);
	}
}]);
