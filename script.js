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


scotchApp.controller('addStocksController', function($scope, $http){
  $scope.message = "enter your stock symbol and click add to start tracking";
  var stockPortfolio = [];
  $scope.addStock = function() {
    stockPortfolio.push($scope.userInput);
    $scope.trackedStocks = stockPortfolio;
    $http.jsonp("http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol="+ $scope.userInput + "&callback=JSON_CALLBACK").
    then(function(data) {
      console.log(data.data.Change);
      console.log("IT ACTUALLY WORKS"); 
      return data
    });
    /*
    $http.post('/addStocks', {stock: $scope.userInput}).
    then(function(response) {
      var dataBuffer = fs.readFileSync('stocks.json');
      var data = JSON.parse(dataBuffer);
      var newStock = $scope.userInput;
      data.titles.push(newStock);
      fs.writeFileSync('stocks.json', JSON.stringify(data));
      res.send();
    });
*/
    $scope.userInput = "";

  }
});

scotchApp.controller('trackedStocksController', function($scope){
  $scope.message = "Stocks you are currently tracking";
});
  //  $http.get("http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol="+ $scope.userInput + "&callback=myFunction").
  //  then(function(data) {
  //   console.log(data);
  //   console.log("IT ACTUALLY WORKS");   
  //   return data
  // });