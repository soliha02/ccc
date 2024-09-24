const btn = document.getElementById('send')
const input = document.getElementById('input')
const weatherImg = document.getElementById('weatherImg')
const err = document.getElementById('err')
const apiKey = '8555218b286904fc67d31906dd9fb0be'








btn.addEventListener("click", () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    const units = 'metric'
    const city = input.value
    fetch(url)
        .then(res => res.json())
        .then(json => weatherView(json))

})


function weatherView(data) {
    if (data.code == '404') {
        err.style = "diplay:block"
    } else {
if(data.weather.main=="Clear"){
    weatherImg.src="./sun.png"
}
    }
}




