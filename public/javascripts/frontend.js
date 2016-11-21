var app = angular.module('game', ['ngRoute']);
var engine;

app.config(function($routeProvider){
  $routeProvider.when('/', {
    controller: 'GameController',
    templateUrl: 'templates/home.html'
  });
});

app.controller('GameController', ['$scope', '$timeout', function($scope, $timeout){
  $timeout(function(){
    engine = new Engine('game_screen');
    var crates = new Crates(engine.renderer);
    crates.y = 0;
    crates.x = 0;
    crates.rotation = 0.01;
    engine.addItem(crates);


    var light = new Light();
    light.x = 5;
    light.y = 0;
    light.z = 5;
    light.colour = [0.8, 0.8, 0.8];
    engine.addLight(light);
  }, 0);

}]);

app.directive('menubar', function(){
  return {
    templateUrl: 'templates/menubar.html',
    controller: 'MenuController'
  }
});

app.controller('MenuController', ['$scope', function($scope){
  $scope.loggedIn = true;
}]);