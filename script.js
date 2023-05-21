const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46af694c5bmshe19fc491bfc9797p1f49d9jsn84033e7a778d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
var humidity=document.getElementById('humidity')
var max_temp=document.getElementById('max_temp')
var min_temp=document.getElementById('min_temp')
var sunrise=document.getElementById('sunrise')
var sunset=document.getElementById('sunset')
var temp=document.getElementById('temp')
var wind_degrees=document.getElementById('wind_degrees')
var wind_speed=document.getElementById('wind_speed')

const getWeather=(city)=>{


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		humidity.innerHTML=response.humidity
		max_temp.innerHTML=response.max_temp
		min_temp.innerHTML=response.min_temp
		const unixTimestamp = response.sunrise
const milliseconds = unixTimestamp * 1000 
const dateObject = new Date(milliseconds)
const humanDateFormat = dateObject.toLocaleString() 

		sunrise.innerHTML=humanDateFormat
		const unixTime = response.sunset
const millisecond = unixTime * 1000 
const date = new Date(millisecond)
const humanDate = date.toLocaleString() 

		sunset.innerHTML=humanDate
		temp.innerHTML=response.temp
		wind_degrees.innerHTML=response.wind_degrees
		wind_speed.innerHTML=response.wind_speed
})
	.catch(err => console.error(err));
}
var button=document.getElementById("button")
var input=document.getElementById("input")
var val=document.getElementById("value")

button.addEventListener('click',(e)=>{
var value=input.value;
getWeather(value)
val.innerHTML=value
})
var todate=new Date(1680224629).getDate();
console.log(todate);