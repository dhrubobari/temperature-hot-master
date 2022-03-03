const API_KEY = `e37d76cfcf1c2bf6f08e43068525da5f`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
} // id, text = parameters

const displayTemperature = temperature => {
    // set parameter value
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp) // datar moddhe main er vitor temp, celcious take update korbe.
    setInnerText('condition', temperature.weather[0].main)
    // set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
    console.log(temperature)
}
// video 1: kono ekta city r nam leikhe data take dekhaite parsi

