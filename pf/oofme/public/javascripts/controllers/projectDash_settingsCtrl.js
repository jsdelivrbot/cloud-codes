/////////////////////////////////////
// projectDash_settings controller //
/////////////////////////////////////
// projectDash > settings page controller

angular.module('oofme')

.controller('projectDash_settingsCtrl', ['$scope', '$rootScope', '$state', '$mdDialog', '$mdMedia', 'Store', function($scope, $rootScope, $state, $mdDialog, $mdMedia, Store) {
	$scope.project = angular.copy(Store.currentLoadedProject);

	$scope.applyChanges = function() {
		Store.currentLoadedProject = angular.copy($scope.project);
		console.log(Store.currentLoadedProject);
	}
}]);