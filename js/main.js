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
      loader.style.visibility = 'hidden' 
      container.style.display = 'flex'; 
      container.style.visibility = 'visible';
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
                console.log(data.main)
                let temp = Math.round(data.main.temp)
                console.log(temp)
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
                      let hoy = new Date() 
                      hora = hoy.getHours()

                      if ((hora <= 18) && (hora >= 6)) {
                        iconoAnimado.src='animated/day.svg'
                        console.log('LIMPIO');
                      }else{
                        iconoAnimado.src='animated/night.svg'
                        console.log('LIMPIO, DE NOCHE')
                      }
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
                    case 'Mist':
                        iconoAnimado.src='animated/icons8-mist-64.png'
                        console.log('NEBLINA');
                        cleanUp();
                        break;
                        
                    case 'Fog':
                        iconoAnimado.src='animated/icons8-mist-64.png'
                        console.log('NEBLINA DENSA');
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
//////////////////////BTN DE CONTACTO//////////////////////
$("#btnMostrarContactos").click( "click", function() {
    
  $('#contactoContainer').toggle().removeClass('d-none');

});

$("#BtnModalDeContacto").click( "click", function() {
   
  $('#contactoContainer').toggle().removeClass('d-none');

});

//////////////////////////// GALERIA 3D ///////////////////////
var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

$('.carousel').on("click", {d: "n"}, rotate)

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

///////////////////////////SWEET ALERTS/////////////////////
const $btnSelectorSetting = document.querySelector('#btnSelectorSetting');

if(localStorage.getItem('setter') == null ) {localStorage.setItem('setter', 'true')}

$btnSelectorSetting.addEventListener('click', () => {
  
  console.log('estoy entrando al evento click on setter')
	btnSetter.classList.toggle('active1');
	//verificar LCS
	//Guardamos en LCS
	if (btnSetter.classList.contains('active1')) {
		localStorage.setItem('setter', 'true')
	}else{
		localStorage.setItem('setter', 'false')
	}

});

//obtenenmos el modo actual
if (localStorage.getItem('setter') === 'true') {
	btnSetter.classList.add('active1');
  setter = true	
}else{
	btnSetter.classList.remove('active1');
  setter = false
} 

if (setter) {

    Swal.fire({
      title: "Bienvenido",
      text: "Puedes obtener informacion de las opciones que te da la tarjeta de productos, haga click en avanzar para continuar",
      // html:
      icon: "info",
      confirmButtonText: 'Avanzar',
      // footer:
      // width:
      // padding:
      // background:
      // grow:
      // backdrop:
      // timer:
      // timerProgressBar:
      // toast:
      // position:
      // allowOutsideClick:
      // allowEscapeKey:
      // allowEnterKey:
      // stopKeydownPropagation:
    
      // input:
      // inputPlaceholder:
      // inputValue:
      // inputOptions:
      
      //  customClass:
      // 	container:
      // 	popup:
      // 	header:
      // 	title:
      // 	closeButton:
      // 	icon:
      // 	image:
      // 	content:
      // 	input:
      // 	actions:
      //confirmButton:
      //cancelButton:
      // 	footer:	
    
      showConfirmButton: true,
      confirmButtonColor: '#11E95B',
      confirmButtonAriaLabel: 'confirmar',
    
      showCancelButton: true,
      cancelButtonText: 'Declinar',
      cancelButtonColor: '#FF0000',
      // cancelButtonAriaLabel:
      
      // buttonsStyling:
      // showCloseButton:
      // closeButtonAriaLabel:
    
    
      // imageUrl:
      // imageWidth:
      // imageHeight:
      // imageAlt:

    }).then((res) => {
      /* Read more about isConfirmed, isDenied below */
     
         if (res.isConfirmed) {
     
          modalProductoStock();
         
         } else {
          
          localStorage.setItem('setter', 'false')
          btnSetter.classList.remove('active1')
          
         }
    });
}
function modalProductoStock(){

  Swal.fire({
    title: "Stock disponible",
    text: "Este dato puede inferir aproximadamente en el plazo de entrega de un producto",
    // html:
    // icon:
    confirmButtonText: 'Avanzar',
    // footer:
    // width:
    // padding:
    // background:
    // grow:
    // backdrop:
    // timer:
    // timerProgressBar:
    // toast:
    // position:
    // allowOutsideClick:
    // allowEscapeKey:
    // allowEnterKey:
    // stopKeydownPropagation:
  
    // input:
    // inputPlaceholder:
    // inputValue:
    // inputOptions:
    
    //  customClass:
    // 	container:
    // 	popup:
    // 	header:
    // 	title:
    // 	closeButton:
    // 	icon:
    // 	image:
    // 	content:
    // 	input:
    // 	actions:
    //confirmButton:
    //cancelButton:
    // 	footer:	
  
    showConfirmButton: true,
    confirmButtonColor: '#11E95B',
    confirmButtonAriaLabel: 'confirmar',
  
    showCancelButton: true,
    cancelButtonText: 'Declinar',
    cancelButtonColor: '#FF0000',
    // cancelButtonAriaLabel:
    
    // buttonsStyling:
    // showCloseButton:
    // closeButtonAriaLabel:
  
  
    imageUrl: "../img/alerts/stock.jpg",
    imageWidth: "80%",
    // imageHeight:
    // imageAlt:

  }).then((res) => {
    /* Read more about isConfirmed, isDenied below */
   
       if (res.isConfirmed) {
   
        modalProductoDetail();
       
       } else {
        
        localStorage.setItem('setter', 'false')
        btnSetter.classList.remove('active1')
        
       }
  });
}

function modalProductoDetail() {
  Swal.fire({
    title: "Ver detalles de productos",
    text: "Puedes realizar una comparativa rapida de los productos",
    // html:
    // icon:
    confirmButtonText: 'Avanzar',
    // footer:
    // width:
    // padding:
    // background:
    // grow:
    // backdrop:
    // timer:
    // timerProgressBar:
    // toast:
    // position:
    // allowOutsideClick:
    // allowEscapeKey:
    // allowEnterKey:
    // stopKeydownPropagation:
  
    // input:
    // inputPlaceholder:
    // inputValue:
    // inputOptions:
    
    //  customClass:
    // 	container:
    // 	popup:
    // 	header:
    // 	title:
    // 	closeButton:
    // 	icon:
    // 	image:
    // 	content:
    // 	input:
    // 	actions:
    //confirmButton:
    //cancelButton:
    // 	footer:	
  
    showConfirmButton: true,
    confirmButtonColor: '#11E95B',
    confirmButtonAriaLabel: 'confirmar',
  
    showCancelButton: true,
    cancelButtonText: 'Declinar',
    cancelButtonColor: '#FF0000',
    // cancelButtonAriaLabel:
    
    // buttonsStyling:
    // showCloseButton:
    // closeButtonAriaLabel:
  
  
    imageUrl: "../img/alerts/caracteristicas.jpg",
    imageWidth: "80%",
    // imageHeight:
    // imageAlt:

  })

}






