angular.module('oofme', ['ngMaterial'])
	.controller('appCtrl', function($scope, $mdDialog, $mdMedia, $mdToast) {

		// Start projec - dialog
		$scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
		$scope.projectNamePrompt = function(ev) {
			var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
			$mdDialog.show({
					controller: DialogController,
					templateUrl: '/templates/createNewProj',
					parent: angular.element(document.body),
					targetEvent: ev,
					clickOutsideToClose: true,
					fullscreen: useFullScreen
				})
				.then(function(answer) {
					// $scope.status = 'You said the information was "' + answer + '".';
					// showSimpleToast('Creating');
				}, function() {
					// $scope.status = 'You cancelled the dialog.';
					showSimpleToast('Cancelled');
				});
			$scope.$watch(function() {
				return $mdMedia('xs') || $mdMedia('sm');
			}, function(wantsFullScreen) {
				$scope.customFullscreen = (wantsFullScreen === true);
			});

			// Toast function
			var showSimpleToast = function(message) {
				$mdToast.show(
					$mdToast.simple()
					.textContent(message)
					.position('bottom left')
					.hideDelay(2000)
				);
			};


		};
	});

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
