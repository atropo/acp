'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'countTo',
  'duScroll',
  'myApp.home',
  'myApp.trophy',
  'myApp.classifica',
  'myApp.regolamento',
  'myApp.premi',
  'myApp.contatti',
  'myApp.storia',
  'myApp.statuto',
  'myApp.clubs',
  'myApp.convenzioni',
  'myApp.tappa1',
  'myApp.tappa2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
