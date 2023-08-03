const apiKey="ec019812533dfcffc846b0e4fc1c3b0f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox= document.querySelector(" input");
const SearchBtn= document.querySelector(" button");
const WeatherIcon= document.querySelector(".weather-icon");
const backGrnd = document.querySelector("video");

async function ChechWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        document.querySelector("video").src="videos/clear-vdo.mp4";
    }
    var data= await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML= data.name;
    document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML= data.main.humidity + "%";
    document.querySelector('.wind').innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src= "clouds.png";
        backGrnd.src= "videos/coluds-vdo.mp4"
    }
    else if(data.weather[0].main == "Clear"){
        WeatherIcon.src= "clear.png";
        backGrnd.src= "videos/clear-vdo.mp4"
    }
    else if(data.weather[0].main == "Mist"){
        WeatherIcon.src= "mist.png";
        backGrnd.src= "videos/mist-vdo.mp4"
    }
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src= "rain.png";
        backGrnd.src= "videos/rain-vdo.mp4"
    }
    else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src= "drizzle.png";
        backGrnd.src= "videos/drizzle-vdo.mp4"
    }
    else if(data.weather[0].main == "Snow"){
        WeatherIcon.src= "snow.png";
        backGrnd.src= "videos/snow-vdo.mp4"
    }

    document.querySelector(".weather").style.display= "block";
    
      



}
SearchBtn.addEventListener("click", ()=>{
    ChechWeather(SearchBox.value);
})


