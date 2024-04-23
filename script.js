const searchbtn = document.getElementById("searchbtn");
const place = document.getElementById("city-name");

const apikey = "c081d07995e344fa89ad0b66ecd79676";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&";

async function getWeather(city) {
  const response = await fetch(apiurl + "q=" + city + `&appid=${apikey}`);
  const data = await response.json();
  console.log(data);

  document.getElementById("location").innerHTML = "Location: " + data.name;
  document.getElementById("temp-actual").innerHTML =
    "Temperature: " + data.main.temp + "°C";

  document.getElementById("humidity").innerHTML =
    "Humidity: " + data.main.humidity + "%";
  document.getElementById("wind").innerHTML =
    "Wind Speed: " + data.wind.speed + " km/hr";

  let icon = data.weather[0].icon;
  console.log(icon);

  document.getElementById(
    "icon"
  ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="">`;
}

searchbtn.addEventListener("click", () => {
  getWeather(place.value);
});
