//CIERTTO TODO LOS , .modalDesc//
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
muestroTodosLosProductos()
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

      case 'Dosificacion':
        muestroProductosDosificacion();
       break;

      case 'Transporte Neumatico':
        muestroProductosSoplante();
      break;

      case 'dosificadoras neumaticas':
      muestroProductosNeumaticos();
      break;

      case 'Accesorios':
      muestroProductosAccesorios();
      break;

      case 'equipos especiales':
      muestroProductosEspeciales();
      break;
     
      default:
       break;
   }
}

function muestroTodosLosProductos(){

  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp').removeClass('novisible');
  
}

function muestroProductosRefrigeracion(){

  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp').removeClass('novisible');
   $('*#Dos, *#Lab, *#Ind, *#Acc, *#Neu, *#Esp').addClass('novisible');
}

function muestroProductosLaboratorio(){

  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp').removeClass('novisible');
   $('*#Dos, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp').addClass('novisible');

}

function muestroProductosVacioIndustrial(){

  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp').removeClass('novisible');
   $('*#Dos, *#Ref, *#Lab, #Acc, *#Neu, *#Esp').addClass('novisible');
   
}

function muestroProductosDosificacion(){
  
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp').removeClass('novisible');
   $('*#Ref, *#Lab, *#Ind, *#Acc, *#Esp').addClass('novisible');

}

function muestroProductosSoplante(){

  console.log('estoy mostrando todos los productos de de sopladores')

}

function muestroProductosAccesorios(){
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp').removeClass('novisible');
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Esp, *#Neu').addClass('novisible');
}

function muestroProductosNeumaticos(){
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp').removeClass('novisible');
   $('*#Ref, *#Lab, *#Ind, *#Dos, *#Esp, *#Acc').addClass('novisible');
  
}

function muestroProductosEspeciales(){
  $('*#Dos, *#Lab, *#Ref, *#Ind, *#Acc, *#Neu, *#Esp').removeClass('novisible');
  $('*#Ref, *#Lab, *#Ind, *#Dos, *#Neu, *#Acc').addClass('novisible');
}