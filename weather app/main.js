let city = document.querySelector('#city');
let search = document.querySelector('#search');
let temperature = document.querySelector('#temperature');
let enteredCity = document.querySelector('#enteredCity');
let weather = document.querySelector('#weather');
search.addEventListener('click', function () {
   let cityName = city.value;
   enteredCity.innerText = `entered city: ${cityName}`;
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c1b8a67a7d9b8821608eaade3387d696`)
      .then((response) => response.json())
      .then((data) => {
         let temp = data.main.temp;
         let tempCelsius = temp - 273.15;
         temperature.innerText = `temperature: ${tempCelsius.toFixed(2)} C`;
         weather.innerText = `weather: ${data.weather[0].description}`;
      }
      )
   if (cityName == '') {
      alert('please enter city');
   }
});   