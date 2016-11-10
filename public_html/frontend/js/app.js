var app = angular.module("WeatherSearch", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/home");
  $stateProvider
          .state('home', {
            url: "/home",
            views: {
              page: {
                templateUrl: "views/home.html",
                controller: "WeatherCtrl"
              }
            }
          });
});