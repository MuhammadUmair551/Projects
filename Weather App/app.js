let showWeather = () => {
    let searchInput = document.querySelector('#cityInput').value;
    let weatherBox = document.querySelector('#weatherDetails');

    weatherBox.innerHTML = '';
    if (searchInput.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${searchInput}&appid=1a802b639b1009d59f38009fd28d9a4e&units=metric`)
        .then(data => data.json())
        .then((data) => {

            weatherBox.innerHTML = `<div class="weather-icon mb-3">
                <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Weather Icon">
            </div>
            <div class="temp">${data.main.temp}</div>
            <div class="condition">${data.weather[0].main}</div>
            <div class="location mt-2">${data.name}, ${data.sys.country}</div>

            <div class="row mt-4 g-3">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="forecast-card">
                        <div>Humidity</div>
                        <div class="forecast-icon my-2">
                            <img src="https://cdn-icons-png.flaticon.com/512/4148/4148460.png" alt="">
                        </div>
                        <div>${data.main.humidity} %</div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="forecast-card">
                        <div>Feels Like</div>
                        <div class="forecast-icon my-2">
                            <img src="https://www.svgrepo.com/show/341126/temperature-feels-like.svg" alt="">
                        </div>
                        <div>${data.main.feels_like} C</div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-sm-12">
                    <div class="forecast-card">
                        <div>Pressure</div>
                        <div class="forecast-icon my-2">
                            <img src="https://i.pinimg.com/564x/cf/61/39/cf613971265cef18682734d02c40dd8d.jpg" alt="">
                        </div>
                        <div>${data.main.pressure}</div>
                    </div>
                </div>
            </div>`;
        })
        .catch(error => console.log('Error:', error));
        searchInput = '';
        weatherBox.style.display = 'block';
}