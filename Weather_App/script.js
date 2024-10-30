const apiKey = "";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const resp = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await resp.json();

    if(resp.status == 404){
        document.querySelector(".error").styles.display = 'block';
        document.querySelector(".weather").styles.display = 'none';
    }
    else{
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "images/cloudy.png";
    }
    else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "images/sun.png";
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "images/heavy-rain.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "images/cloudy (1).png";
    }    
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "images/mist.png";
    }    
    else if(data.weather[0].main == 'Snow'){
        weatherIcon.src = "images/snow.png";
    }   
    document.querySelector(".weather").styles.display = 'block';
        document.querySelector(".error").styles.display = 'none';
} 
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})