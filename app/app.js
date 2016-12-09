'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'countTo',
  'duScroll',
  'myApp.home',
  'myApp.trophy',
  'myApp.contatti',
  'myApp.storia',
  'myApp.statuto',
  'myApp.clubs',
  'myApp.convenzioni',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
