////////////////////////////CONTROLADOR DE MODAL DESCRIPCTION//////////////////////////
//Cierro todos los .modalDesc//
$('.modalDesc').hide();


////////////////FUNCION QUE ABRE EL MODAL, que recibe un id////////////////////
 $(document).ready(function() {
  $("ul").click(function(event) {
      
    const idModal = event.currentTarget.id;

    if (idModal) {
      abrirModal(idModal)
    }
  });
});


function abrirModal(idModal){
  if(!idModal){
    idModal = ""
  }
  idModal = idModal.slice(1)
  
  console.log(idModal);

    $('#' + `${idModal}`).fadeIn(1000).animate({
      bottom: '60px',
    });
    
}

/* FUNCION QUE CIERRA EL MODAL , todos los .modalDesc*/
$('.btnModalProducts').click(function(){

  $(".modalDesc").animate({
    bottom: '0px',
  
  });

  $('.modalDesc').fadeOut(500);
})

//Remuevo todos los class .active, para que no aparezca ninguno pintado//
$("ul li").removeClass("active")

//FUNCION QUE PINTAL EL SELECTOR DE BOMBA, por class .active//
function pintarSelector(id) {
  
  $("ul li").removeClass("active");

  $( '#' + `${id}`).addClass( "active" );

  $( '#' + `${id}` ).dblclick(function() {
    $("ul li").removeClass("active");

  });

  abrirModal(id);  //mando el id a la funcion abrirModal
};


//Funcion que reconoce el ID y lo manda
$("li").click(function() {
  var id = $(this).attr("id");
  var name = $(this).closest("li").prop("tagName");

  pintarSelector(id);
});

//Manejo del Btn para avanzar de producto descriptions
$("*#btn-next, *#btn-prev").click(function() {
  var id = $(this).attr("id");
  var name = $(this).parent().children('ul').data('id',id)[0]
  var nameId = name.id
  //console.log(id)
  //console.log(name)
  //console.log(nameId)
  //pintarSelector(id);
  cambiarDisplay(id, nameId)
});

function cambiarDisplay(id, nameId){
  console.log(id)
  console.log(nameId)

  if (id === 'btn-next') {
    
    $('#' + `${nameId}`+'secondDisplay').removeClass('d-none');
    $('#' + `${nameId}`+'firstDisplay').addClass('d-none');
    
  }

  if (id === 'btn-prev'){
    $('#' + `${nameId}`+'secondDisplay').addClass('d-none');
    $('#' + `${nameId}`+'firstDisplay').removeClass('d-none');
  }
}

//FUNCION RENDER DE LA CARACTERISTISCA DE LOS PRODUCTOS//
$.ajax({
  method: "GET",
  url: "../../JSON/productos.json",
  }).done(function(producto) {
  
    filterCaracteristicas(producto);
  
  }).always(function() {
    // Por ejemplo removemos la imagen "cargando..."
  }).fail(function() {
    console.log('no se pudo cargar el recurso')
  })

function filterCaracteristicas( producto ){
    
  localStorage.setItem("product", JSON.stringify(producto));

  $("li").click(function() {
    id = $(this).attr("id");
    var name = $(this).closest("li").prop("tagName");
    ejecutar(id);
  });
    
    function ejecutar(id){
      let [...producto] = JSON.parse(localStorage.getItem("product"));
      console.log(id)
      console.log(producto)
      const prodcutoFinded = producto.filter(x => x.id === id);
      renderCaracteristicas(prodcutoFinded)

      
    }
  
  const renderCaracteristicas = (productoFinded)=>{

      console.log(productoFinded)
    
      productoFinded.forEach((producto) => {
        
        const { linea, modelo, caracteristicas, id, idRender, youtube, instagram, link, link2, linki  } = producto;
        htmlClean = ""
        yotubeRedifined = producto.youtube 
        instagramRedifined = producto.instagram
        link2Redifined = producto.link2

        if(link2Redifined){
          html = "" + `<h3 class="text-center my-2 p-1"> ${linea} ${modelo}</h3>
          <div class="d-flex justify-content-between">
          ${caracteristicas}
          </div>
            <div>
              <a href="${link}" target="_blank"><img src="${youtube}" width="20%"><span>Más información en <bold>YOUTUBE</bold></a>
            </div>
            <div>
              <a href="${link2}" target="_blank"><img src="${youtube}" width="20%"><span>Más información en <bold>YOUTUBE</bold></a>
            </div> 
          </div>
          `

          $('#' + `${idRender}`).html("" + html);

          return
        }

        if (yotubeRedifined || instagramRedifined == undefined) {
          
            if (yotubeRedifined && instagramRedifined) {
              console.log("muestro render de ambos")

              html = "" + `<h3 class="text-center my-2 p-1"> ${linea} ${modelo}</h3>
              <div class="d-flex justify-content-between">
              ${caracteristicas}
              </div>
              <div>
                <a href="${link}" target="_blank"><img src="${youtube}" width="20%"><span>Más información en <bold>YOUTUBE</bold></span></a>
              </div>
              <div>
                <a href="${linki}" target="_blank"><img src="${instagram}" width="20%"><span>Más informacón en <bold>INSTAGRAM</bold></span></a></div></a>
              </div>
              `

              $('#' + `${idRender}`).html("" + html);
              return

              
            }if (yotubeRedifined) {
              console.log('muestro el render de youtube')

              html = "" + `<h3 class="text-center my-2 p-1"> ${linea} ${modelo}</h3>
              <div class="d-flex justify-content-between">
              ${caracteristicas}
              </div>
              <div class="espacioRedes">
                <a href="${link}" target="_blank"><img src="${youtube}" width="20%"><span>Más información en <bold>YOUTUBE</bold></a></div></a>
              </div>
              `

              $('#' + `${idRender}`).html("" + html);

              return
            }
            else{
              console.log('muestro render comun')

              html = "" + `<h3 class="text-center my-2 p-1"> ${linea} ${modelo}</h3>
                <div class="d-flex justify-content-between">
                ${caracteristicas}
                </div>
                    `
              $('#' + `${idRender}`).html("" + html); 
            }  

          

        } else {
         
          console.log('muestro render de instragram')
          html = "" + `<h3 class="text-center my-2 p-1"> ${linea} ${modelo}</h3>
          <div class="d-flex justify-content-between">
          ${caracteristicas}
          </div>
          <div><a href="${linki}" target="_blank"><img src="${instagram}" width="20%"><br><span>Más informacón en <bold>INSTAGRAM</bold></span></a></div></a></div>
          `

          $('#' + `${idRender}`).html("" + html); 
  
        }
      })
       
  }

};

///////////////////ABRIR PRODUCTOS CON EL SELECT////////////////////////

function ShowSelected(){

  const contenido = document.getElementById("productsSelector");
   let selected = contenido.options[contenido.selectedIndex].text;
   console.log(selected); 

   switch (selected) {
      case "Todos Nuestros Productos": 
        muestroTodosLosProductos();
      break;
       
      case 'Vacío en Refrigeracion': 
        muestroProductosRefrigeracion();
       break;

      case "Vacío en Laboratorio": 
        muestroProductosLaboratorio();
       break;

      case "Vacío Industrial":
        muestroProductosVacioIndustrial();
       break;

      case 'Dosificacion bombas electricas':
        muestroProductosDosificacionElectrica();
       break;

      case 'Bombas de energías sustentable':
        muestroProductosSustentables();
       break;

      case 'Transporte Neumatico - sopladores':
        muestroProductosSoplante();
      break;

      case 'Dosificacion bombas neumaticas':
      muestroProductosNeumaticos();
      break;

      case 'Accesorios':
      muestroProductosAccesorios();
      break;

      case 'Equipos especiales':
      muestroProductosEspeciales();
      break;

      case 'Equipos SKID':
        muestroProductosEquipos();
        break;

      default:
       break;
   }
}
noMuestroProdcuto();

function muestroTodosLosProductos(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible');
  $('*#btn-volver').removeClass('d-none')

  
}

function muestroProductosRefrigeracion(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible');
   $('*#Dos, *#Lab, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop').addClass('novisible');
   $('*#btn-volver').removeClass('d-none')

  
}

function muestroProductosLaboratorio(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible')
   $('*#Dos, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop').addClass('novisible')
   $('*#btn-volver').removeClass('d-none')

  
}

function muestroProductosVacioIndustrial(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible')
   $('*#Dos, *#Ref, *#Lab, #Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop').addClass('novisible')
   $('*#btn-volver').removeClass('d-none')
   
  
}

function muestroProductosDosificacionElectrica(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Acc, *#Esp, *#Reno, *#Neu, *#Equi, *#Sop').addClass('novisible')
   $('*#btn-volver').removeClass('d-none')


}

function muestroProductosSoplante(){
  console.log('estoy mostrando todos los productos de de sopladores')

  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible');
   $('*#Dos, *#Ref, *#Lab, #Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Ind').addClass('novisible')
   $('*#btn-volver').removeClass('d-none')
  
}

function muestroProductosAccesorios(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Esp, *#Neu, *#Reno, *#Equi, *#Sop').addClass('novisible')

   $('*#btn-volver').removeClass('d-none')

  
}

function muestroProductosNeumaticos(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Esp, *#Acc, *#Reno, *#Equi, *#Sop').addClass('novisible')

   $('*#btn-volver').removeClass('d-none')

   
  
}

function muestroProductosEspeciales(){
  $('#productoPorCategory').addClass('d-none')
   $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Neu, *#Acc, *#Reno, *#Equi, *#Sop').addClass('novisible')

   $('*#btn-volver').removeClass('d-none')

}

function muestroProductosEquipos(){
  $('#productoPorCategory').addClass('d-none')
   $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Neu, *#Acc, *#Reno, *#Esp, *#Sop').addClass('novisible')

   $('*#btn-volver').removeClass('d-none')
}

function muestroProductosSustentables(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi, *#Sop ').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Neu, *#Acc, *#Esp, *#Equi, *#Sop').addClass('novisible')

   $('*#btn-volver').removeClass('d-none')

}


function noMuestroProdcuto(){
  $('*#Ref, *#Lab, *#Ind, *#Dos, *#Neu, *#Acc, *#Esp, *#Reno, *#Equi, *#Sop').addClass('novisible')
}

function volverALista(){
  $('#productoPorCategory').removeClass('d-none')
  noMuestroProdcuto()
  $('*#btn-volver').addClass('d-none')

}
///////////////////////////BTN VOLVER A LISTA///////////////////////////
$('*#btn-volver').on('click', function(){volverALista(), irArriba()})



///////////////CONTROL PARA IR A LA PARTE SUPERIOR DE LA PAGINA////////////////
function irArriba() {

  $('body, html').animate({
      scrollTop: '120px'
  }, 150);
    console.log('estoy entrando en la funcion scroll');
};


$('*#productListSelector').on('click', function()
  {
    irArriba();
    console.log('estoy haciendo algo')
  })