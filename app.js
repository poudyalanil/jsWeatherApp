window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temp-desc")
    let temperature = document.querySelector(".temp-degree")
    let timezone = document.querySelector(".location-timezone")
    let weatherIcon = document.querySelector(".icon")
    let country = document.querySelector(".country")
    let temperatureSection = document.querySelector(".degree-section")
    let tempSpan = document.querySelector(".degree-section span");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=31ee2440d9644c8e2dd4895e483a389d`;


            fetch(apiEndpoint).then(response => {
                return response.json();
            }).then(data => {
                console.log(data)
                const desc = data.weather[0].description;
                const icon = data.weather[0].icon;
                const temp = Math.floor(data.main.temp);
                const iconurl = "http://openweathermap.org/img/w/" + icon + ".png";


                //setting DOM elements from api reponse
                temperature.textContent = temp;
                temperatureDescription.textContent = desc;
                timezone.textContent = data.name;
                country.textContent = data.sys.country;
                weatherIcon.src = iconurl;
                //Converision
                let cel = (temp - 32) * (5 / 9)
                // change temperature units
                temperatureSection.addEventListener('click', () => {
                    if (tempSpan.textContent === 'F') {
                        temperature.textContent = Math.floor(cel);
                        tempSpan.textContent = "C"

                    } else {
                        temperature.textContent = temp;
                        tempSpan.textContent = "F"
                    }
                });


            })
                ;
        });
    }

});