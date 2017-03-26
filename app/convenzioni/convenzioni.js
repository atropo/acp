'use strict';

angular.module('myApp.convenzioni', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/convenzioni', {
    templateUrl: 'convenzioni/convenzioni.html',
    controller: 'convenzioniCtrl'
  });
}])

.controller('convenzioniCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

	$rootScope.section="acp";

	var convenzionati=[
		{img:"asolo.jpg" , nome:"Golf Club Asolo"},
		{img:"ca_amata.jpg" , nome:"Golf Club Ca Amata"},
		{img:"ca_della_nave.jpg" , nome:"Golf Ca della Nave"},
		{img:"jesolo.jpg" , nome:"Golf Club Jesolo"},
		{img:"pra_delle_torri.jpg" , nome:"Golf Club Pra delle Torri"},
		{img:"spessa.jpg" , nome:"Golf Club Castello di Spessa"},
		{img:"villa_condulmer.jpg" , nome:"Golf Club Villa Condulmer"}
	];

	$scope.convenzionati = _.shuffle(convenzionati);
}]);
