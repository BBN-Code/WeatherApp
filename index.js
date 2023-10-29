const APIkey = "0747b817a54a80cb25b49a9207f489d0";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const findCity = document.querySelector(".find input");
const findBtn = document.querySelector(".find button");
const wIcon = document.querySelector(".w-icon");

async function checkWeather(city){
    const response = await fetch(APIurl + city + `&appid=${APIkey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    
    
        if(data.weather[0].main == "Clouds"){
            wIcon.src = "images/cloudy.png";
        }
        else if(data.weather[0].main == "Clear"){
            wIcon.src = "images/sun.png";
        }
        else if(data.weather[0].main == "Rain"){
            wIcon.src = "images/rainy.png";
        }   
        else if(data.weather[0].main == "Storm"){
            wIcon.src = "images/storm.png";
        }
        else if(data.weather[0].main == "Mist"){
            wIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            wIcon.src = "images/drizzle.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    } 

}

findBtn.addEventListener("click", ()=>{
    checkWeather(findCity.value);
});

