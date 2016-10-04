(function(window){
	'use strict';
	window.angular.module('weatherApp')
	.service('weatherService', ['$http', function($http){
		var self = this;
		
		self.get = function(url) {
			return $http.get(url);
		}
	}])
	
})(window);