function todayDate(date){
    let minutes = now.getMinutes();
     if (minutes < 10) {
    minutes = `0${minutes}`;
     }
    let hours = now.getHours();
     if (hours < 10) {
    hours = `0${hours}`;
     }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[now.getDay()];
    
    return `${day} ${hours}:${minutes}`;
}

let date = document.querySelector("#currentDate");
let now = new Date();
date.innerHTML = todayDate(now);

function searchWeather(response){
    console.log(response);
   document.querySelector("#currentCity").innerHTML= response.data.name;
   
   document.querySelector("#currentTemp").innerHTML = Math.round(response.data.main.temp);

   document.querySelector(".weatherNow").innerHTML= response.data.weather[0].description;
}

function newCity(event){
    event.preventDefault();
    let city = document.querySelector("#search-box").value;
    let apiKey = "59990109c1a723b5b9dd0b82ee870827";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(searchWeather);
}

let form = document.querySelector("#search-city-form");
form.addEventListener ("submit", newCity);

function thisCity(event){
   function searchWeather(response){
   document.querySelector("#currentCity").innerHTML= response.data.name;
   
   let searchTemp = document.querySelector("#currentTemp");
   searchTemp.innerHTML = Math.round(response.data.main.temp);

   document.querySelector(".weatherNow").innerHTML= response.data.weather[0].description;
}
   
    function currentPosition(position){
    event.preventDefault();
    let lat = position.coords.latitude;
    let long = position.coords.longitude
    let apiKey = "59990109c1a723b5b9dd0b82ee870827";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(searchWeather);}

    navigator.geolocation.getCurrentPosition(currentPosition);
}

let myCity = document.querySelector("#search-current-location");
myCity.addEventListener("click", thisCity);