//Skriv all kod här
const btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', function(fetchCallback){
    const input = document.querySelector('input');
    console.log(input.value);

    const url = `https://api.weatherbit.io/v2.0/current/daily?lang=sv&city=${input.value}%C3%B6&key=9cbd170022684f33b78e965d99097f4e`

    clearErrors();

    fetch(url).then(
        function (response) {
            console.log(response);
            if (response.status >= 200 && response.status < 300)  {
                return response.json();
            }
            else{
                throw 'Please type again';
            }
        }
    ).then(
        function (data) {
            let weatherDescription = document.getElementById('current-description');
            weatherDescription.innerText = data.data[0].weather.description;

            let temperature = document.getElementById('current-temp');
            // temperature.innerText = Math.floor(data.data[0].temperature);
            console.log(data.data[0].temp);
            temperature.innerText(data.data[0].temp);


            let windSpeed = document.getElementById('currnet-wind');
            // windSpeed.innerText = Math.floor(data.data[0].wind_spd);
            console.log(data.data[0].wind_spd);

            let humidity = document.getElementById('current-humidity');
            // humidity.innerText = Math.floor(data.data[0].rh)
            console.log(data[0].rh);

            let currentIconImg = document.getElementById('current-weather-icon');
            // currentIconImg.src = `https://www.weatherbit.io/static/img/icon${data.data[0].weather.icon}.png`;
            console.log(data);
        }
    ).catch(
        function (e) {
            console.log(e);
            const section = document.createElement('section');
            section.innerText = 'The search was invalid, please try again';
            document.body.append(section);
        }
    )
})

function displayImg(url) {
    let img = document.createElement('img');
    img.src = url;

    document.body.appendChild(img);
}

function showImgcallback(data){
    const img = document.createElement('img');
    img.src = data.message;
    document.body.append(img);
}

function clearErrors(){
    const error = document.querySelectorAll('p');
    for(const text of error){
        text.remove();
    }
}
