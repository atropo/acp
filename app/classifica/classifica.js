'use strict';

angular.module('myApp.classifica', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/classifica', {
    templateUrl: 'classifica/classifica.html',
    controller: 'classificaCtrl'
  });
}])

.controller('classificaCtrl', ['$rootScope', function($rootScope) {
	$rootScope.section="classifica";

}]);
