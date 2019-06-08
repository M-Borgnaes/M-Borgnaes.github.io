/* The formula to calculate the wind chill factor is LaTeX: f=35.74+0.6215\:t-35.75\:s^{0.16}+0.4275\:t\:s^{0.16} f = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16 , where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, and s is the wind speed in miles per hour.*/

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

document.getElementById("windchill").innerHTML = chill.toFixed(1);
