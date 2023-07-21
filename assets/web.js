// variables
// Api set up
var button = document.querySelector('.enter')
var value = document.querySelector('.value')

var name = document.querySelector('.name')
var description = document.querySelector('.description')
var tempriture = document.querySelector('.tempriture')

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + 6247ab9cfce973852042385f8920ad4d;
// call api
fetch(queryURL)
