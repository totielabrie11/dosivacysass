$('.modalDesc').hide();

function abrirModal(id){

  
  $("ul li").click(function(id){
    
    console.log(id)
    
    $("#milenio").fadeIn(1000).animate({
      left: '280px',
    });
  });  
}


$('.btnModal').click(function(){

  $(".modalDesc").animate({
    left: '0px',
  
  });

  $('.modalDesc').fadeOut(500);
})


$("ul li").removeClass("active")

function pintarSelector(id) {
  
  $("ul li").removeClass("active");

  $( '#' + `${id}`).addClass( "active" );

  $( '#' + `${id}` ).dblclick(function() {
    $("ul li").removeClass("active");

  });

  abrirModal(id);
};


//Funcion que reconoce el ID y lo manda
$("li").click(function() {
  var id = $(this).attr("id");
  var name = $(this).closest("li").prop("tagName");

  pintarSelector(id);
});

//Funcion que va a renderizar las caracteristicas de los productos
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
    
    
      productoFinded.forEach((producto) => {
        
        const { linea, modelo, caracteristicas, id } = producto;
        htmlClean = ""
        html = "" + `<h2 class="text-center my-2 p-1"> ${linea} ${modelo}</h2>
        <div class="d-flex justify-content-between">
        ${caracteristicas}
        </div>`
  
        $("#caracterContainer").html("" + html);
  

      })
       
  }

};