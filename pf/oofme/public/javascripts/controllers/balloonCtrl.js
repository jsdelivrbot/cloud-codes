////////////////////////
// balloon controller //
////////////////////////
// controller for beginners of oofme.

angular.module('oofme')

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
}]);