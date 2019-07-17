var fullDate = new Date();
var day = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
document.getElementById("current-date").innerHTML = "&copy; " + day[fullDate.getDay()] + ", " + month[fullDate.getMonth()] + " " + fullDate.getDate()+ ", " + fullDate.getFullYear();

