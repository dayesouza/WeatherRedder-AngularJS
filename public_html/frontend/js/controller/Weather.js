app.controller("WeatherCtrl", ["$scope", "YahooAPI", "$compile", function ($scope, YahooAPI, $compile) {
    var weatherOp = this;

    weatherOp.unit = 'c';

    $scope.findWeather = function (parameters) {
      YahooAPI.findWeather(parameters).success(function (data) {
        var data_result = data.query.results;
        //if the result is null the typed city is not valid
        if (data_result == null) {
          weatherOp.invalid = "This location is not a valid one. Review your typo, or try a different location.";
        }
        else {
          weatherOp.invalid = false;
          resultPrepare(data_result.channel,weatherOp);
        }
      }).error(function (data, status) {
        weatherOp.error = "Wow! Something bad happened." + data;
      });
    }

    var resultPrepare = function (data_result,weatherOp) {
      weatherOp.title = data_result.title;
      weatherOp.date = data_result.item.condition.date;
      weatherOp.temperature = data_result.item.condition.temp;
      weatherOp.situation = data_result.item.condition.text;
      weatherOp.code = data_result.item.condition.code;
      
      if((weatherOp.temperature <= 25) && (weatherOp.unit == "C")){
        weatherOp.type = "cold";
        console.log("ue");
      }
      else if((weatherOp.temperature <= 80) && (weatherOp.unit == "F")){
        weatherOp.type = "cold";
                console.log("ueaaa");

      }
      else{
        weatherOp.type = "hot";
      }
    }

  }]);