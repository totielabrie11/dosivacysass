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
      bottom: '240px',
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
        
        const { linea, modelo, caracteristicas, id, idRender } = producto;
        htmlClean = ""
        html = "" + `<h2 class="text-center my-2 p-1"> ${linea} ${modelo}</h2>
        <div class="d-flex justify-content-between">
        ${caracteristicas}
        </div>`
  
        $('#' + `${idRender}`).html("" + html);
  

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

      case 'vacio industrial':
      muestroProductosVacioIndus();
      break;
     
      default:
       break;
   }
}

function muestroTodosLosProductos(){

  $('*#Dos, *#Lab, *#Dos, *#Ind').removeClass('novisible');
  
}

function muestroProductosRefrigeracion(){

  $('*#Dos, *#Lab, *#Ref, *#Ind').removeClass('novisible');
   $('*#Dos, *#Lab, *#Ind').addClass('novisible');
}

function muestroProductosLaboratorio(){

  $('*#Dos, *#Lab, *#Ref, *#Ind').removeClass('novisible');
   $('*#Dos, *#Ref, *#Ind').addClass('novisible');

}

function muestroProductosVacioIndustrial(){

  $('*#Dos, *#Lab, *#Ref, *#Ind').removeClass('novisible');
   $('*#Dos, *#Ref, *#Lab').addClass('novisible');
   
}

function muestroProductosDosificacion(){
  
  $('*#Dos, *#Lab, *#Ref, *#Ind').removeClass('novisible');
   $('*#Ref, *#Lab, *#Ind').addClass('novisible');

}

function muestroProductosSoplante(){

  console.log('estoy mostrando todos los productos de de sopladores')

}

