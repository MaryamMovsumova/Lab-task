const weatherInput = document.querySelector(".weather_card_content");

const weatherCity = document.querySelector(".weather_card_city");

const weatherDegree = document.querySelector(".weather_card_degree");

const weatherStyle = document.querySelector(".weather_card_style");

const weatherItem = document.querySelector(".weather_card_item");

const url="https://api.openweathermap.org/data/2.5/";

const key="3d356f1add900eeef06b4263f03f695f"



weatherInput.addEventListener("keypress", getWeathervalue);
function getWeathervalue(event) {
   if (event.keyCode == "13") {
      getWeatherProg(weatherInput.value);
   }
};

function getWeatherProg(cityName){
const urlInfo=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=az`
   fetch(urlInfo)
      .then(response => response.json())
      .then((data) => dataInfo(data));            
};

function dataInfo(weather){
   weatherCity.innerText=`${weather.name} ${weather.sys.country}`
   weatherDegree.innerText=`${Math.round(weather.main.temp)}℃`
   weatherItem.innerText=`${weather.weather[0].description}`
}

