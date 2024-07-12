
const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const baseURL2 = "https://api.openweathermap.org/data/2.5/forecast";
const city = document.querySelector("#city")
const apiKey = "d6cc2b35217695f90560abd302ae69ba";


const current = document.getElementById('current');
const forcast = document.getElementById('forcast');
const submit = document.getElementById('submitBtn');

function getApi() {
  const li = document.createElement("li")
  li.textContent = city.value
  document.getElementById("hisList").appendChild(li)
  const url = `${baseURL}?q=${city.value}&appid=${apiKey}&units=imperial`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector("#title").textContent = city.value;
      document.querySelector("#temp").textContent = "Temp: "+data.main.temp;
      document.querySelector("#wind").textContent = "Wind: "+data.wind.speed;
      document.querySelector("#humidity").textContent = "Humidity: "+data.main.humidity;
    });
    const url2 = `${baseURL2}?q=${city.value}&appid=${apiKey}&units=imperial`; 
    fetch(url2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector("#date").textContent = "Date: "+data.list[2].dt_txt;
      document.querySelector("#temp1").textContent = "Temp: "+data.list[2].main.temp;
      document.querySelector("#wind1").textContent = "Wind: "+data.list[2].wind.speed;
      document.querySelector("#humidity1").textContent = "Humidity: "+data.list[2].main.humidity;

      document.querySelector("#date2").textContent = "Date: "+data.list[10].dt_txt;
      document.querySelector("#temp2").textContent = "Temp: "+data.list[10].main.temp;
      document.querySelector("#wind2").textContent = "Wind: "+data.list[10].wind.speed;
      document.querySelector("#humidity2").textContent = "Humidity: "+data.list[10].main.humidity;

      document.querySelector("#date3").textContent = "Date: "+data.list[18].dt_txt;
      document.querySelector("#temp3").textContent = "Temp: "+data.list[18].main.temp;
      document.querySelector("#wind3").textContent = "Wind: "+data.list[18].wind.speed;
      document.querySelector("#humidity3").textContent = "Humidity: "+data.list[18].main.humidity;

      document.querySelector("#date4").textContent = "Date: "+data.list[26].dt_txt;
      document.querySelector("#temp4").textContent = "Temp: "+data.list[26].main.temp;
      document.querySelector("#wind4").textContent = "Wind: "+data.list[26].wind.speed;
      document.querySelector("#humidity4").textContent = "Humidity: "+data.list[26].main.humidity;

      document.querySelector("#date5").textContent = "Date: "+data.list[34].dt_txt;
      document.querySelector("#temp5").textContent = "Temp: "+data.list[34].main.temp;
      document.querySelector("#wind5").textContent = "Wind: "+data.list[34].wind.speed;
      document.querySelector("#humidity5").textContent = "Humidity: "+data.list[34].main.humidity;
    });
}

submit.addEventListener('click', getApi);


