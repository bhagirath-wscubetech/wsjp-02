const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

//`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`


const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

search.addEventListener(
    "keyup",
    function (e) {
        if (e.key == "Enter") {
            getWeather(e.target.value);
        }
    }
)


function getWeather(place) {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}&units=metric`;
    weather.innerHTML = `<h1> Loading... </h1>`;
    search.disabled = true;
    fetch(API)
        .then(
            (response) => {
                return response.json()
            }
        ).then(
            (data) => {
                console.log(data);
                search.disabled = false;
                if (data.cod == "404") {
                    weather.innerHTML = `<h1>City not found </h1>`;
                } else {
                    weather.innerHTML = `
                    <div style="width:100%">
                        <h2 style="text-align:center">${place}</h2>
                    </div>
                    <div>
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""> 
                    </div>
                    <div>
                       
                        <h2>${data.main.temp} ℃</h2>
                         <h4> ${data.weather[0].main} </h4> 
                         <h6> Max: ${data.main.temp_max} ℃ </h6>
                         <h6> Min: ${data.main.temp_min} ℃ </h6>
                    </div> 
                    `
                }

            }
        )

}