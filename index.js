let API_KEY= "ab1f82573e4aeaa664a1c2118a4f0b24";
let city = "Kyiv";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${API_KEY}`;
fetch(url).then(function (resp) {return resp.json() }).then(function (data) {
   document.querySelector('.temp').innerHTML = data.main.temp
    })
    .catch(function (error) {
       console.log(error);
    });