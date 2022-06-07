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
function settingsTools(){
  const $btnTools = document.querySelector('#btnToolsContainer');
  
  $btnTools.addEventListener('click', () =>{
    
    btnTools.classList.toggle('active1');
    toolsBox.classList.toggle('d-none');

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
            <td>${linea}</td>
            <td><img src='${img}' width='100%'></img></td>
            <td>${tipo}</td>
            <td><a href="${manualRoot}" download> Descargar</a></td>
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
            <td>${linea}</td>
            <td><img src='${img}' width='100%'></img></td>
            <td>${tipo}</td>
            <td><a href="${repuestosRoot}" download> Descargar</a></td>
        </tr>
        
        `
        );
      });
    }

    $('.btnNextTools').click('click', function(){
      
      $('#manualsList').toggle('d-none');
      $('#repuestoList').toggle().removeClass('d-none');

      $('.manuales-text').toggle('d-none');
      $('.repuestos-text').toggle().removeClass('d-none');
      
    })
}




  






  