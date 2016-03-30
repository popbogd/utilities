angular.module('hello', [ 'ngRoute', 'ngTable', 'home', 'water', 'navbar', 'heat'])
		.config(
				function($routeProvider, $httpProvider) {

					$routeProvider
						.when('/', {
							templateUrl : 'js/home/home.html',
							controller : 'home'
						})
						.when('/water', {
							templateUrl : 'js/water/water.html',
							controller : 'water'
						})
						.when('/heat', {
							templateUrl : 'js/heat/heat.html',
							controller : 'heat'
						})
						.otherwise( {redirectTo: '/'} );

					$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
				}
		);
				
	
		