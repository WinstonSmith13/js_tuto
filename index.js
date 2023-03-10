const container = document.querySelector('.container');
const search = document.querySelector('.search_box button');
const weatherBox = document.querySelector('.weather_box');
const detailBox = document.querySelector('.detail_box');
const error404 = document.querySelector('.not-found');


search.addEventListener('click', () => {
    const key = 'abb89f2cb1c8aecb9127d7dddcd2e571';

    const city = document.querySelector('.search_box input').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + key)
        .then((response) => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = 'auto';
                weatherBox.style.display = 'none';
                detailBox.style.display = 'none';
                error404.style.display = 'block';
                error404.classList.add('fadeIn');
                return;
            }

            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather_box img');
            const temp = document.querySelector('.temp');
            const description = document.querySelector('.description');
            const humidity = document.querySelector('.humidity span');
            const wind = document.querySelector('.wind span')


            console.log(json.weather[0].main)

            switch(json.weather[0].main) {
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
            }

            

            temp.innerHTML = `${json.main.temp} <span> °C </span>`;

            humidity.innerHTML = `${json.main.humidity}<span> % </span> `;
            wind.innerHTML = `${json.wind.speed}<span> km/h </span>`;

            console.log(json.main.temp);
            console.log(json.main.humidity);
            console.log(json.wind.speed);

            container.style.height = 'auto';
            weatherBox.style.display = '';
            weatherBox.classList.add('fadeIn');
            detailBox.style.display = '';
            detailBox.classList.add('fadeIn');


        })



});
