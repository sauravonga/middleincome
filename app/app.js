'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.route',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!'); 
  // $locationProvider.html5Mode(true);

  $routeProvider
  .when('/trade-and-technology', {
    templateUrl: 'pages/indicators/trade-and-technology.html',
    controller: 'View1Ctrl'
  })
  .when('/ideas-and-innovation', {
    templateUrl: 'pages/indicators/ideas-and-innovation.html',
    controller: 'View1Ctrl'
  })
  .when('/finance-and-risk', {
    templateUrl: 'pages/indicators/finance-and-risk.html',
    controller: 'View1Ctrl'
  })
  .when('/cities-and-livability', {
    templateUrl: 'pages/indicators/cities-and-livability.html',
    controller: 'View1Ctrl'
  })
  .when('/cohesion-and-inequality', {
    templateUrl: 'pages/indicators/cohesion-and-inequality.html',
    controller: 'View1Ctrl'
  })
  .when('/demography-and-aging', {
    templateUrl: 'pages/indicators/demography-and-aging.html',
    controller: 'View1Ctrl'
  })
  .when('/entreprenuership-and-startups', {
    templateUrl: 'pages/indicators/entreprenuership-and-startups.html',
    controller: 'View1Ctrl'
  })
  .when('/external-commitment-and-regionalism', {
    templateUrl: 'pages/indicators/external-commitment-and-regionalism.html',
    controller: 'View1Ctrl'
  })
  .when('/environment-and-natural-resources', {
    templateUrl: 'pages/indicators/environment-and-natural-resources.html',
    controller: 'View1Ctrl'
  })
  .when('/research', {
    templateUrl: 'pages/research/index.html',
    controller: 'View1Ctrl'
  })
  .when('/graph', {
    templateUrl: 'graph.html',
    controller: 'View6Ctrl'
  })
  .when('/links', {
    templateUrl: 'links.html',
    controller: 'View1Ctrl'
  })
  .otherwise({redirectTo: '/'});
  
//   if(window.history && window.history.pushState){
//     //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

//  // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

//  // if you don't wish to set base URL then use this
//  $locationProvider.html5Mode({
//          enabled: true,
//          requireBase: true
//   });
// }

  // $routeProvider.otherwise({redirectTo: '/'});
}]);
