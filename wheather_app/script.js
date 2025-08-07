const input=document.querySelector("input");
const btn=document.getElementById("btn");
const icon=document.querySelector(".icon");
const wheather=document.querySelector(".wheather");
const temperature=document.querySelector(".temperature");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".speed");

document.querySelector(".wheather-box").style.display = "none";


btn.addEventListener('click',()=>{
   
    let city=input.value;
    getWeather(city);
    document.querySelector(".wheather-box").style.display = "block";
})

function getWeather(city){

    const apikey="15830076beeea59d0d67bdadd554ef61";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'15830076beeea59d0d67bdadd554ef61'}`)
    .then(response=>response.json())
    .then(data => {
        console.log(data)
        console.log(data.weather[0].icon);
        const iconCode=data.weather[0].icon;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png"/>`

        const weathertemp=data.main.temp;
        const incel=weathertemp-273;
        const temp=incel.toFixed(2);
        temperature.innerHTML=`${temp}℃`;
        const weathercity=data.name;
        const weathercountry=data.sys.country;
        wheather.innerHTML=`${weathercity}, ${weathercountry}`;

        const humid=data.main.humidity;
        humidity.innerHTML = `<span class="humidity-value">${humid}%</span> <br> 
        <span class="humidity-text">Humidity</span>`;

        const speed=data.wind.speed;
        wind.innerHTML = `<span class="speed-value">${speed} <span class="unit">m/s</span></span> <br> 
                  <span class="wind-text">Speed</span>`;



    }
    )
}











