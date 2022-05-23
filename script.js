let weather = {
    apiKey: "1bf21a0583f728dbbb696c491436c264"
        fetch.weather: (city) => {
        fetch(
            "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={1bf21a0583f728dbbb696c491436c264}"        
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    }
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main; 
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".icon").src = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={1bf21a0583f728dbbb696c491436c264}";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "humidity:" + humidity + "%";
        document.querySelector(".wind").innerTExt = "Wind Speed" + speed + "mph";
        document.querySelector(".weather").classList.remove("loading");
    }
    search: function () {
        this.fetchWeather(document.querySelector(".search bar").value);
    }};

document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") 
    weather.search();
    })

weather.fetchWeather("Denver");