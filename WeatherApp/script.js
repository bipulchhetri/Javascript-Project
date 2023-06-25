const input = document.querySelector("input");
const btn = document.getElementById("btn");
const weather = document.querySelector(".weather");
const icon = document.querySelector(".icon");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click", () => {
  let city = input.value;
  getweather(city);
});

function getweather(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"d54fd4c977cbc6eaf2350839aea99eb3"}`
  )
    .then((Response) => Response.json())
    .then((data) => {
   
      const iconCode = data.weather[0].icon;
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`;

      const weatherCity = data.name;
      const weatherCountry = data.sys.country;
      weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

      let weatherTemp = data.main.temp;
      weatherTemp=  weatherTemp - 273;
      const temp = weatherTemp.toFixed(2)
      temperature.innerHTML= `${temp}°C`;

      const description = data.weather[0].description;
      description.innerHTML = description;
    });
}

