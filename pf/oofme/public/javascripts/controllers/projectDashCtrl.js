////////////////////////////
// projectDash controller //
////////////////////////////
// controlls the page when you specifically opens a project.

angular.module('oofme')

.controller('projectDashCtrl', ['$scope', '$rootScope', '$state', '$mdDialog', '$mdMedia', 'Store', function($scope, $rootScope, $state, $mdDialog, $mdMedia, Store) {
	
	// change in Store shold reflect here. So $watch-ing.
	$scope.$watch(function(){
		return Store.currentLoadedProject;
	}, function(newVal, oldVal){
		if(!(newVal===undefined)){
			$scope.project = Store.currentLoadedProject;
		}
	});

	if (Store.initializingProject) {
		console.log("success");
		$scope.currentNavItem = "settings";
		$state.go('projectDash_settings');
	} else {
		$scope.currentNavItem = "overview";
		$state.go('projectDash_overview');
	}

	// for handling nav bar
	$rootScope.$on('$routeChangeSuccess', function(event, current) {
		$scope.currentLink = getCurrentLinkFromRoute(current);
	});
}]);
