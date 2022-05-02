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
window.addEventListener('load', ()=> {
    let lon
    let lat
    let apiKey = 'eccef6d8332b97d045a395ff1bf3b430'
    let temperaturaValor = document.getElementById('temperatura-valor')  
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
    
    let ubicacion = document.getElementById('ubicacion')  
    let iconoAnimado = document.getElementById('icono-animado') 

    let vientoVelocidad = document.getElementById('viento-velocidad') 

    const cleanUp = () => {
      let container = document.getElementById('contenedorClima');
      let loader = document.getElementById('loader');
      console.log('entre al loader')
      loader.style.display = 'none'; 
      container.style.display = 'flex'; 
  }

    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
           //console.log(posicion.coords.latitude)
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude
            //ubicación actual    
           const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${apiKey}`

           //ubicación por ciudad
           //const url = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&lang=es&units=metric&appid=${apiKey}`

           //console.log(url)

           fetch(url)
            .then( response => { return response.json()})
            .then( data => {
                //console.log(data)
                
                let temp = Math.round(data.main.temp)
                //console.log(temp)
                temperaturaValor.textContent = `${temp} ° C`

                //console.log(data.weather[0].description)
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                ubicacion.textContent = data.name
                
                vientoVelocidad.textContent = `${data.wind.speed} m/s`
                
                //para iconos estáticos
                //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
                //icono.src = urlIcon
                //console.log(data.weather[0].icon)

                //para iconos dinámicos
                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      iconoAnimado.src='animated/thunder.svg'
                      console.log('TORMENTA');
                      cleanUp();
                      break;
                    case 'Drizzle':
                      iconoAnimado.src='animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      cleanUp();
                      break;
                    case 'Rain':
                      iconoAnimado.src='animated/rainy-7.svg'
                      console.log('LLUVIA');
                      cleanUp();
                      break;
                    case 'Snow':
                      iconoAnimado.src='animated/snowy-6.svg'
                        console.log('NIEVE');
                        cleanUp();
                      break;                        
                    case 'Clear':
                        iconoAnimado.src='animated/day.svg'
                        console.log('LIMPIO');
                        cleanUp();
                      break;
                    case 'Atmosphere':
                      iconoAnimado.src='animated/weather.svg'
                        console.log('ATMOSFERA');
                        cleanUp();
                        break;  
                    case 'Clouds':
                        iconoAnimado.src='animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        cleanUp();
                        break;  
                    default:
                      iconoAnimado.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                      cleanUp();
                  }

            })
            .catch( error => {
                console.log(error)
            })
       })
          
    }
})

$("#btnMostrarContactos").click( "click", function() {
    
  $('#contactoContainer').toggle().removeClass('d-none');

});

$("#BtnModalDeContacto").click( "click", function() {
   
  $('#contactoContainer').toggle().removeClass('d-none');

});