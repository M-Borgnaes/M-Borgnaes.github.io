//Determine town name and assign variable

var townName = document.getElementById("townName").innerHTML;

if (townName == "Preston") {
    var townCode = "id=5604473";
}
    else if (townName == "Soda Springs") {
        var townCode = "id=5607916";
    }
    else if (townName == "Fish Haven") {
        var townCode = "lat=42.038024&lon=-111.3984308";
    }

//API Call

var request = new XMLHttpRequest();
var url = "http://api.openweathermap.org/data/2.5/weather?" + townCode + "&units=imperial&APPID=6a3afc25011277ec9dffd6ee97fceb7c";
request.open("GET", url);
request.responseType = "json";
request.send();
request.onload = function () {

//process the information

var wxdata = request.response;
var wxnow = wxdata.weather.main;
var highTemp = wxdata.main.temp_max;
var humidly = wxdata.main.humidity ;
var windy = wxdata.wind.speed;


//put the information into the document

document.getElementById("current").innerHTML = wxnow;
document.getElementById("temperature").innerHTML = highTemp.toFixed();
document.getElementById("humid").innerHTML = humidly;
document.getElementById("windspeed").innerHTML = windy.toFixed();

//calculate windchill

//input

var heat = document.getElementById("temperature").innerHTML;
temp = parseFloat(heat);
var fast = document.getElementById("windspeed").innerHTML;
speed = parseFloat(fast);
var chill;

//process

if (temp > 50) {
    chill = temp;
}
else {
chill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
}

//output

document.getElementById("windchill").innerHTML = chill.toFixed();

}