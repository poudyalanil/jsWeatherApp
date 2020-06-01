window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=31ee2440d9644c8e2dd4895e483a389d`;

        });
    }
    fetch(apiEndpoint).then(data => {
        return Response.json();
    });
});