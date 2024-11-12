    const apiKey = 'c5ed8a1664fd332420a41a06710e11bb';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
    // const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=`;

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");


    async function checkWether(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none"
        } else {
            let data = await response.json();
            document.querySelector(".city").innerHTML = `${data.name}, ${data.sys.country}`;
            document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}&deg;C`;
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            let todayDate = new Date();
            document.querySelector(".date").innerHTML = dateMange(todayDate);
            document.querySelector(".weatherType").innerHTML = `${data.weather[0].main}`

            // const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            // weatherIcon.src = iconUrl


            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png"
            } else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png"
            } else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png"
            } else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png"
            } else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "images/Snow.png"
            } else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png"
            } else if (data.weather[0].main == "Humidity") {
                weatherIcon.src = "images/humidity.png"
            } else if (data.weather[0].main == "Haze") {
                weatherIcon.src = "images/haze.png"
            }

            document.querySelector(".error").style.display = "none";
            document.querySelector(".weather").style.display = "block";

            // Date manage
            function dateMange(todayDate) {
                // let todayDate = new Date();
                const daysName = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thurday", "Friday", 'Saturday'];

                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                // const year = todayDate.getFullYear() //dateArgu.getfullYear();
                // const month = monthNames[todayDate.getMonth()]; //dateArgu.getMonth()
                // const date = todayDate.getDate() //dateArgu.getDay();
                // const day = daysName[todayDate.getDay()]; //dateArgu.getDay()
                // let hours = todayDate.getHours();
                // let minutes = todayDate.getMinutes();

                //* <!-- * Convert the hours to 12-hours formate -->
                // let amPm = hours >= 12 ? "PM" : "AM";
                // hours = hours % 12;
                // hours = hours ? hours : 12; // the hour '0' be '12'

                //* <!-- * Add leading zeros to the minutes and seconds-->
                // minutes = minutes < 10 ? "0" + minutes : minutes;


                // return `${date} ${month} (${day}) ${year} , ${hours}:${minutes} ${amPm}`
                return `${new Date().toUTCString()}`
            }
        }
    }

    searchBtn.addEventListener("click", () => {
        checkWether(searchBox.value)
    })
    searchBox.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            checkWether(searchBox.value)
        }
    })

    // ? not use for code currentley

    // const city = searchBox.value
    // const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=metric&q=';

    // async function checkforecast(city) {
    //     try {
    //         const response = await fetch(forecastUrl + city + `&appid=${apiKey}`);
    //         data = await response.json();
    //         console.log(data)
    //         const { cod } = data

    //         const iconUrl = `https://openweathermap.org/img/wn/${cod}@4x.png`;
    //         weatherIcon.src = iconUrl
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // checkforecast(searchBox.value)



    // fetch(forecastUrl)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //     }).catch(error => {
    //         console.error("Error fetching current weather data:", error)
    //     })