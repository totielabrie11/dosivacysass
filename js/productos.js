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

  idModal = idModal.slice(1)
  
  console.log(idModal);

    $('#' + `${idModal}`).fadeIn(1000).animate({
      bottom: '120px',
    });
    
}

/* FUNCION QUE CIERRA EL MODAL , todos los .modalDesc*/
$('.btnModal').click(function(){

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
        
        const { linea, modelo, caracteristicas, id, idRender, youtube, instagram, link, linki  } = producto;
        htmlClean = ""
        yotubeRedifined = producto.youtube 
        instagramRedifined = producto.instagram
        if (yotubeRedifined || instagramRedifined == undefined) {
          
            if (yotubeRedifined && instagramRedifined) {
              console.log("muestro render de ambos")

              html = "" + `<h3 class="text-center my-2 p-1"> ${linea} ${modelo}</h3>
              <div class="d-flex justify-content-between">
              ${caracteristicas}
              </div>
              <div><a href="${link}" target="_blank"><img src="${youtube}" width="20%"><br><span class="me-2 p-2">Producto con contenido en youtube</span></a></div>
              <div><a href="${linki}" target="_blank"><img src="${instagram}" width="20%"><br><span class="me-2 p-2">Publicado en instragram</span></a></div></a></div>
              `

              $('#' + `${idRender}`).html("" + html);
              return

              
            }if (yotubeRedifined) {
              console.log('muestro el render de youtube')

              html = "" + `<h3 class="text-center my-2 p-1"> ${linea} ${modelo}</h3>
              <div class="d-flex justify-content-between">
              ${caracteristicas}
              </div>
              <div><a href="${link}" target="_blank"><img src="${youtube}" width="20%"><br><span class="me-2 p-2">Producto con contenido en youtube</span></a></div></a></div>
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
          <div><a href="${linki}" target="_blank"><img src="${instagram}" width="20%"><br><span class="me-2 p-2">Publicado en instragram</span></a></div></a></div>
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

      case "Vacío Industrial - Sopladores":
        muestroProductosVacioIndustrial();
       break;

      case 'Dosificacion bombas electricas':
        muestroProductosDosificacionElectrica();
       break;

      case 'Bombas de energías sustentable':
        muestroProductosSustentables();
       break;

      case 'Transporte Neumatico':
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
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').removeClass('novisible');
  $('*#btn-volver').removeClass('d-none')

  
}

function muestroProductosRefrigeracion(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').removeClass('novisible');
   $('*#Dos, *#Lab, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').addClass('novisible');
   $('*#btn-volver').removeClass('d-none')

  
}

function muestroProductosLaboratorio(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').removeClass('novisible')
   $('*#Dos, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').addClass('novisible')
   $('*#btn-volver').removeClass('d-none')

  
}

function muestroProductosVacioIndustrial(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').removeClass('novisible')
   $('*#Dos, *#Ref, *#Lab, #Acc, *#Neu, *#Esp, *#Reno, *#Equi').addClass('novisible')
   $('*#btn-volver').removeClass('d-none')
   
  
}

function muestroProductosDosificacionElectrica(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Acc, *#Esp, *#Reno, *#Neu, *#Equi').addClass('novisible')
   $('*#btn-volver').removeClass('d-none')


}

function muestroProductosSoplante(){
  $('#productoPorCategory').addClass('d-none')
  console.log('estoy mostrando todos los productos de de sopladores')

  $('*#btn-volver').removeClass('d-none')

  
}

function muestroProductosAccesorios(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Esp, *#Neu, *#Reno, *#Equi').addClass('novisible')

   $('*#btn-volver').removeClass('d-none')

  
}

function muestroProductosNeumaticos(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Esp, *#Acc, *#Reno, *#Equi').addClass('novisible')

   $('*#btn-volver').removeClass('d-none')

   
  
}

function muestroProductosEspeciales(){
  $('#productoPorCategory').addClass('d-none')
   $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Neu, *#Acc, *#Reno, *#Equi').addClass('novisible')

   $('*#btn-volver').removeClass('d-none')

}

function muestroProductosEquipos(){
  $('#productoPorCategory').addClass('d-none')
   $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Neu, *#Acc, *#Reno, *#Esp').addClass('novisible')

   $('*#btn-volver').removeClass('d-none')
}

function muestroProductosSustentables(){
  $('#productoPorCategory').addClass('d-none')
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp, *#Reno, *#Equi').removeClass('novisible')
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Neu, *#Acc, *#Esp, *#Equi').addClass('novisible')

   $('*#btn-volver').removeClass('d-none')

}


function noMuestroProdcuto(){
  $('*#Ref, *#Lab, *#Ind, *#Dos, *#Neu, *#Acc, *#Esp, *#Reno, *#Equi').addClass('novisible')
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

  $('*#btn-volver').click(function () {
    $('body, html').animate({
      scrollTop: '312.55px'
    }, 150);
    console.log('estoy entrando en la funcion scroll');
  });


}

$('*.cardP').on('click', function()
  {
    irArriba();
    console.log('estoy haciendo algo')
  })