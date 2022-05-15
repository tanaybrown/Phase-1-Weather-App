let weather = {
    apiKey: "1bf21a0583f728dbbb696c491436c264",
    fetchWeather: function (city) {
        fetch(
            http://api.openweathermap.org/data/2.5/weather?q=city,us&APPID=1bf21a0583f728dbbb696c491436c264;
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.name 
        const { speed } = data.wind
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector("city").innerText = "Weather in" + name;
        document.querySelector("icon").src = "http.//openweathermap.org/img/wn/" + "icon" ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector("humidity").innerText = "humidity:" + humidity + "%";
        document.querySelector("wind").innerTExt = "Wind Speed" + speed + "mph";
    }
};