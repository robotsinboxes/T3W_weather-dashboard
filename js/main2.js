// API key e16929192aae7f9bbee02ed77eae9dd6
// set elements to variables for later use
var inputBox = document.querySelector('#inputBox');
var submitBtn = document.querySelector('#searchBar_btn');
var cityName = document.querySelector('#currentWeather__location');
var currentWeather = document.querySelector('#currentWeather');
var dailyForecast = document.querySelector('#dailyForecast');


submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var city = inputBox.value;
    console.log(city);
    getCoords(city);
})

function getCoords(city) {
    var currentAPI = 
        `https://api.openweathermap.org/data/2.5/weather?q=`+city+`&appid=e16929192aae7f9bbee02ed77eae9dd6&units=imperial`
    fetch(currentAPI)
        .then(response => {
            var cityCoords = response.json();
            return cityCoords;
        })
        .then(cityCoords => {
            cityName.textContent = cityCoords.name;
            var lat = cityCoords.coord.lat;
            var lon = cityCoords.coord.lon;
            getWeather(lat, lon);
        })
}

function getWeather (lat, lon) {
    var weatherAPI = 
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=e16929192aae7f9bbee02ed77eae9dd6&units=imperial`;
    fetch(weatherAPI)
        .then(response => {
            var weather = response.json();
            console.log(weather);
            return weather; 
        })
        .then(weather => {
            
        })