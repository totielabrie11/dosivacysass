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
function settingsModals(){

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

function declinarSetter(){
  
  localStorage.setItem('setter', 'false');
  btnSetter.classList.remove('active1');
}

if (setter) {

    Swal.fire({
      title: "Bienvenido",
      text: "Ahora puedes obtener informacion facilmente accesible desde las tarjetas de productos, haga click en avanzar para continuar",
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

          declinarSetter();
         }
    });
}
function modalProductoStock(){

  Swal.fire({
    title: "Stock disponible",
    text: "Este dato visual puede ser ultil para tener una idea aproximada del plazo de entrega de un producto.",
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
        
        declinarSetter();
        
       }
  });
}

function modalProductoDetail() {
  Swal.fire({
    title: "Ver detalles de productos",
    text: "Puedes realizar una comparativa rapida de los productos y sus distintos modelos. También puedes descargar el folleto para obtener más información",
    // html:
    // icon:
    confirmButtonText: 'Finalizar',
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
    //confirmButtonAriaLabel: 'Finalizar',
  
    //showCancelButton: true,
    //cancelButtonText: 'Declinar',
    //cancelButtonColor: '#FF0000',
    // cancelButtonAriaLabel:
    
    // buttonsStyling:
    // showCloseButton:
    // closeButtonAriaLabel:
  
  
    imageUrl: "../img/alerts/caracteristicas.jpg",
    imageWidth: "80%",
    // imageHeight:
    // imageAlt:

  }).then((res)=>{
    if (res.isConfirmed) {
   
      declinarSetter();
    }else{

      location.reload();
    }
  })

}
}


///////////////////////////SETTINGS TOOLS////////////////////////
function closeModalBox(){
  let $boxTools = document.getElementById('toolsBox');
  $boxTools.classList.toggle('d-none')
}

function settingsTools(){
  const $btnTools = document.querySelector('#btnToolsContainer');
  const $btnModalBox = document.getElementById('btnModalBox')
  $btnTools.addEventListener('click', () =>{
    
    btnTools.classList.toggle('active1');
    toolsBox.classList.toggle('d-none');

  })
  $btnModalBox.addEventListener('click', ()=>{
    btnTools.classList.remove('active1')
  })

  $.ajax({
    method: "GET",
    url: "../JSON/manual.json",
  }).done(function(manual) {
    
      console.log(manual)
      renderManuals(manual);
    
    }).always(function() {
      console.log('termino de cargar los manuales')
    }).fail(function() {
      console.log('no pude leer la lista de manuals')
    })

    $.ajax({
      method: "GET",
      url: "../JSON/repuestos.json",
    }).done(function(repuestos) {
      
        console.log(repuestos)
        renderRepuestos(repuestos);
      
      }).always(function() {
        console.log('termino de cargar los repuestos')
      }).fail(function() {
        console.log('no pude leer la lista de repuestos')
      })
  

    function renderManuals(manual){

      manual.forEach((elemento)=> {
        const {  linea, id, img, tipo, manualRoot } =
        elemento;
        $("#manualsList").append(
          `        
        <tr>
            <td><p>${linea}</p></td>
            <td><img src='${img}' width='50%'></img></td>
            <td><p>${tipo}</p></td>
            <td><p><a href="${manualRoot}" download> Descargar</a></p></td>
        </tr>
        
        `
        );
      });
    }
    
    function renderRepuestos(repuestos){

      repuestos.forEach((elemento)=> {
        const {  linea, id, img, tipo,  repuestosRoot } =
        elemento;

        $("#repuestoList").append(
          `        
        <tr>
          <td><p>${linea}</p></td>
          <td><img src='${img}' width='50%'></img></td>
          <td><p>${tipo}</p></td>
          <td><p><a href="${repuestosRoot}" download> Descargar</a></p></td>
        </tr>
        
        `
        )
      });
    }

    $('.btnNextTools').click('click', function(){
      
      $('#manualsList').toggle('d-none');
      $('#repuestoList').toggle().removeClass('d-none');

      $('.manuales-text').toggle('d-none');
      $('.repuestos-text').toggle().removeClass('d-none');
      
    })
}
/* 
function settingSlider(){
  
  const slider = document.querySelector("#slider");
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];

  const btnLeft = document.querySelector("#btnLeft");
  const btnRight = document.querySelector("#btnRight");

  slider.insertAdjacentElement('afterbegin', sliderSectionLast)

  function next(){
      let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 1s";
      setTimeout(function(){
          slider.style.transition = "none";
          slider.insertAdjacentElement('beforeend', sliderSectionFirst);
          slider.style.marginLeft = "-100%";
      }, 1000);
  }

  function prev(){
      let sliderSection = document.querySelectorAll(".slider__section");
      let sliderSectionLast = sliderSection[sliderSection.length -1];
      slider.style.marginLeft = "0";
      slider.style.transition = "all 1s";
      setTimeout(function(){
          slider.style.transition = "none";
          slider.insertAdjacentElement('afterbegin', sliderSectionLast)
          slider.style.marginLeft = "-100%";
      }, 1000);
  }

  btnRight.addEventListener('click', function(){
      next();
  });

  btnLeft.addEventListener('click', function(){
      prev();
  });

  setInterval(function(){
      next();
  }, 5000)
}
 */

function arrancoEmpresa(){
  $(document).ready(function(){
    $('#equipo__solar-img').fadeOut(5000, function(){
      $('#equipo__solar-img').attr('src', '../img/multimedia/EQUIPO.3b.jpg');

      $('#equipo__solar-img').fadeIn(5000, function(){
        $('#equipo__solar-img').attr('src', '../img/multimedia/EQUIPO.3b.jpg');
        
      })
    });
    
      

  })
};