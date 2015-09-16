var scotchApp = angular.module('scotchApp', ['ngRoute']);
scotchApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'pages/home.html',
      controller : 'mainController'
    })
    .when('/addStocks', {
      templateUrl : 'pages/addStocks.html',
      controller : 'addStocksController'
    })
    .when('/trackedStocks', {
      templateUrl : 'pages/trackedStocks.html',
      controller : 'trackedStocksController'
    });
});

scotchApp.controller('mainController', function($scope) {
    $scope.message = '';
});
scotchApp.controller('addStocksController', function($scope){
  $scope.message = "enter your stock symbol and click add to start tracking";
  var stockPortfolio = [];
  $scope.addStock = function() {
    stockPortfolio.push($scope.userInput)
    console.log($scope.userInput);
  }
});
scotchApp.controller('trackedStocksController', function($scope){
  $scope.message = "Stocks you are currently tracking";
});