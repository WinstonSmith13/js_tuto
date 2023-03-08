function weatherSearch(name){
    const key = 'abb89f2cb1c8aecb9127d7dddcd2e571';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + ',CA&appid=' + key) 
    .then((response)=> response.json())
    .then((data)=> console.log(data));
    
}

weatherSearch('Paris')