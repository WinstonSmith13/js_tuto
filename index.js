const container = document.querySelector('.container');
const search = document.querySelector('.search_box button');
const weatherBox = document.querySelector('.weather_box');
const detailBox = document.querySelector('.detail_box');
const error404 = document.querySelector('.not-found'); 


search.addEventListener('click', () => {
    const key = 'abb89f2cb1c8aecb9127d7dddcd2e571';
    
    const city = document.querySelector('.search_box input').value;

    if (city === '')
    return;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',CA&appid=' + key)
    .then((response) => response.json())
    .then(json => {
        if (json.cod === '404'){
            console.log('error')
        }

    })
        


});
