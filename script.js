let selectBox = document.querySelector('.select_box');

for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    let option = document.createElement('option');
    option.innerText = city.name;
    option.value = city.id;
    selectBox.appendChild(option);
}

function getData() {
    let id = selectBox.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=d50fd56618d89e4e576df8326b0d3fbd`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            document.querySelector('.city_name').textContent = data.name;
            document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.weather_icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            document.querySelector('.current_condition').textContent = data.weather[0]['description'];
        })
        .catch(function () {
            // catch any errors
        });
};

window.onload  = getData;
selectBox.onchange = getData;
