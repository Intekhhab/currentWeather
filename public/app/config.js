(function(window) {
	"use strict";
	var app = window.angular.module('weatherApp');
	app.config(function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/currentWeather', {
				templateUrl : 'app/weatherReport.html',
				controller  : 'appCtrl',
				controllerAs: 'ctrl'
			})
			.otherwise('/currentWeather');
			
			$locationProvider.html5Mode(true);
	});

})(window);