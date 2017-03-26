'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

	$rootScope.section="home";
	var campiPratica=[
		{img:"faula.jpg", nome:"La Faula Golf Club"},
		{img:"bosco.jpg", nome:"Golf Club Il Bosco"},
		{img:"abano.jpg", nome:"Golf Club Abano"},
		{img:"ancora.jpg", nome:"Golf Club Ancora"},
		{img:"brolo.jpg", nome:"Golf Club Brolo Bassano"},
		{img:"musella.jpg", nome:"Golf Club Musella"},
		{img:"noghere.jpg", nome:"Golf Club Le Noghere"},
		{img:"polo.jpg", nome:"Golf Club Marco Polo"},
		{img:"conegliano.jpg", nome:"Golf Club Ville di Conegliano "},
		{img:"corradina.jpg", nome:"Golf Club la Corradina "},
		{img:"5laghi.jpg", nome:"Golf Club 5 Laghi "}
	];

	$scope.campiPratica = _.shuffle(campiPratica)
}]);
