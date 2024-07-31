const city = document.querySelector('.input-box');
const selectBtn = document.getElementById("submit");

const weather_image = document.querySelector(`.weather-image`);
const temp = document.querySelector(`.temperature`)
const description = document.querySelector(`.description`)

const windspeed = document.querySelector(`.windspeed`)
const humidity= document.querySelector(`.humidity`)


async function checkweather(city){
	const apikey = "2989001f32f1c586b1da9cb650757a72";

	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

	const weather_data = await fetch(`${url}`).then(response =>response.json());

	temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
	description.innerHTML = `${weather_data.weather[0].description}`;
	humidity.innerHTML = `Humidity: ${weather_data.main.humidity}% `;
	windspeed.innerHTML = `Wind-Speed: ${weather_data.wind.speed}KM/h`;

	switch(weather_data.weather[0].main)
	{
		case `Clouds`:
			weather_image.scr="./images/clouds.png";
			break;
		case `Rain`:
			weather_image.scr="./images/rain.png";
			break;
		case `Clear`:
			weather_image.scr="./images/clear.png";
			break;
		case `Mist`:
			weather_image.scr="./images/mist.png";
			break;
		case `Snow`:
			weather_image.scr="./images/snow.png";
			break;

	}
}
selectBtn.addEventListener(`click` , ()=>{
	checkweather(city.value);
});