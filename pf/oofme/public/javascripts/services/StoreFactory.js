///////////////////
// Store factory //
///////////////////
// Where all local data is stored.

angular.module('oofme')

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
		checkedList: [1, 2],
	}
}]);
