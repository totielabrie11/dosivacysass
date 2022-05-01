const d = document
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	let valorDiaNoche = d.body.classList.toggle('oscuro');
	 btnSwitch.classList.toggle('active');
	
	//Guardamos en LCS
	if (d.body.classList.contains('oscuro')) {
		localStorage.setItem('dark-mode', 'true')
	}else{
		localStorage.setItem('dark-mode', 'false')
	}

});

//obtenenmos el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
	d.body.classList.add('oscuro');	
	btnSwitch.classList.add('active');
}else{
	d.body.classList.remove('oscuro');
	btnSwitch.classList.remove('active');
}


///////////////CONTROLADOR DEL WHETER/////////////////
const APP_ID = 'eccef6d8332b97d045a395ff1bf3b430';

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${APP_ID}`)
        .then(response => response.json())
        .then(data => setWeatherData(data));
}

const setWeatherData = data => {
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: Math.floor(data.main.temp),
        date: getDate(),
    }

    Object.keys(weatherData).forEach( key => {
        setTextContent(key, weatherData[key]);
    });

    cleanUp();
}

const cleanUp = () => {
    let container = document.getElementById('container');
    let loader = document.getElementById('loader');

    loader.style.display = 'none'; 
    container.style.display = 'flex'; 
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${ ('0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

const setTextContent = (element, text) => {
    document.getElementById(element).textContent = text;
    console.log(text)
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData)
}