app.factory("YahooAPI", function ($http) {
  
  var _findWeather = function (options) {
    var url= "https://query.yahooapis.com/v1/public/yql";
    var parameters = "?q=select item.condition, yweather:condition, yweather:units, title from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+options.city+"')and u='"+options.unit+"'&format=json";

    return $http.post(url+parameters);
  }

  return{
    findWeather: _findWeather
  };

});