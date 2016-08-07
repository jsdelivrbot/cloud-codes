////////////////////
// angular config //
////////////////////
// Here starts the clint-side angular app flow.
angular.module('oofme', ['ngMaterial', 'ui.router']);

angular.module('oofme')

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
		.state('allProjects', {
			url: "/",
			templateUrl: "/templated/all-projects.html",
			controller: "allProjectsCtrl",
			resolve: {
				// get project list
				initialData: function($http) {
					return $http.get('/apis/initializeMe')
						.then(function(response) {
							console.log(response.data);
							return response.data;
						});
				}
			}
		})
		.state('projectDash', {
			url: "/dash",
			templateUrl: "/templated/project-dash.html",
			controller: 'projectDashCtrl'
		})
		.state('projectDash_settings', {
			parent: "projectDash",
			views: {
				'menuContents@projectDash': {
					templateUrl: '/templated/project-settings.html',
					// template: "<h1>settings</h1>",
					controller: 'projectDash_settingsCtrl'
				}
			}
		})
		.state('projectDash_browse', {
			parent: "projectDash",
			views: {
				'menuContents@projectDash': {
					// templateUrl: '/templated/project-settings.html',
					template: "<h1>Browse</h1>",
					// controller: 'projectDash_settingsCtrl'
				}
			}
		})
		.state('projectDash_overview', {
			parent: "projectDash",
			views: {
				'menuContents@projectDash': {
					// templateUrl: '/templated/project-settings.html',
					template: "<h1>overview</h1>",
					// controller: 'projectDash_settingsCtrl'
				}
			}
		});
});