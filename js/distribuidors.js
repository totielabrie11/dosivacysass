//Llamado Ajax a mis distribuidors JSON
$.ajax({
    method: "GET",
    url: "../JSON/distribuidores.json",
  }).done(function(distribuidors) {
      
    renderDistribuidorsCard(distribuidors)
      
      
  }).fail((error) => {
      console.log("carga de distribuidors no fue exitosa"); //reemplazar por un sweet modal
  }).always(() => {
      console.log("carga de datos distribuidors.JSON terminada");
  });


  function renderDistribuidorsCard(distribuidors) {
  

    distribuidors.forEach(element => {

      
      const { nombre, provincia, localidad, direccion, maps, img, id, tipo, contacto } = element
      htmlVacio = ""
      html = 
      `
      <div class="cardDis">
        <div class="card-image">
            ${img}
        </div>
        <div class="card-body">
            <h4 class="nombreDis">${nombre}</h4>
            <span>${provincia} - ${localidad}</span><br>
            <span >${direccion}</span  >
            <p>${contacto}</p>
            ${maps}
        </div>
        <div class="card-footer d-none">
            <div class="info">
                <div class="value">VENDE</div>
                <div class="type">${tipo.dosificacionMenor}</div>
            </div>
            <div class="info">
                <div class="value">VENDE</div>
                <div class="type">${tipo.dosificacionMayor}</div>
            </div>
            <div class="info">
                <div class="value">VENDE</div>
                <div class="type">${tipo.vacio}</div>
            </div>
            <div class="info">
                <div class="value">VENDE</div>
                <div class="type">${tipo.refrigeracion}</div>
            </div>
            <div class="info">
                <div class="value">VENDE</div>
                <div class="type">${tipo.soplador}</div>
            </div>
            <div class="info">
                <div class="value">VENDE</div>
                <div class="type">${tipo.petroleo}</div>
            </div>
        </div>
      </div>
      `
      $('#distribuidores').append(html)
        element;
        console.log(element)
    });    
    
    var $selectPorTipoProduct = '';
    var $selectPorProvincia = '';

    $('select').change(function(){
      $selectPorTipoProduct = $('#selectTipoProd').val();
      $selectPorProvincia = $('#selectProvincia').val();
      
    })
    
    $("#btnSearch").click(function (e) {
      
      $('#distribuidores').removeClass('d-none');
      $('#form-distribuidores').addClass('d-none');

      const buscarPorProvincia = ($selectPorProvincia) => {
        Busqueda = distribuidors.filter((distribuidor) =>
          distribuidor.provincia.toLowerCase().includes($selectPorProvincia)
          //distribuidor.localidad.toLowerCase().includes($localidadDis)

        );
      }

      const administrarFilter = ($selectPorTipoProduct) => {
        if ($selectPorTipoProduct === "vacio") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.vacio.toLowerCase().includes($selectPorTipoProduct)
          );
          return;
        };
        if ($selectPorTipoProduct === "sopladores") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.soplador.toLowerCase().includes($selectPorTipoProduct)
          );
          return;
        };
        if ($selectPorTipoProduct === "laboratorio") {
          Busqueda1 = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.refrigeracion.toLowerCase().includes($selectPorTipoProduct)
          );
          Busqueda2 = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.vacio.toLowerCase().includes($selectPorTipoProduct)
          );
          Busqueda = Busqueda1.concat(Busqueda2)
          return;
        };
        if ($selectPorTipoProduct === "industrial") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.vacio.toLowerCase().includes($selectPorTipoProduct)
          );
          return;
        };
        if ($selectPorTipoProduct === "petrolera") {
          console.log('estoy entrando en busqueda petrolera')
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.petroleo.toLowerCase().includes($selectPorTipoProduct)
          );
          return;
        };
        if ($selectPorTipoProduct === "compactos") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.dosificacionMenor.toLowerCase().includes($selectPorTipoProduct)
          );
          return;
        };
        if ($selectPorTipoProduct === "gran porte") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.dosificacionMayor.toLowerCase().includes($selectPorTipoProduct)
          );
          return;
        };

        if ($selectPorTipoProduct === "accesorios") {
          Busqueda = [];
          alert('accesorios no está asignado a ningun distribuidor')
        };


      };
      
      let $inputs = $("input");
      
      const $nombreDis = $('#nombreDis').val().trim().toLowerCase();
      
      
      //const $localidadDis = $selectProvincia.trim().toLowerCase();
      
      
      //configuro mis shitches para que entre la busqueda según su caso
      if($selectPorTipoProduct != ''){

        administrarFilter($selectPorTipoProduct);


      };
      if ($selectPorProvincia != ''){
         
        buscarPorProvincia($selectPorProvincia);

      }

      if($nombreDis){

        Busqueda = distribuidors.filter((distribuidor) =>
          distribuidor.nombre.toLowerCase().includes($nombreDis)
        );
      };

    
      console.log(Busqueda);

      if (Busqueda) {

        distribuidores.innerHTML = ""

        renderDistribuidorsCard(Busqueda);

        volverLista.innerHTML = "<div class='btn btn-dark w-100 d-block mt-4 btn-efect' onclick='location.reload()')>RESETEAR BUSQUEDA</DIV>"
        
      }else{
        distribuidores.innerHTML = ""
      };
    });
  };

////////////////////////SETEO DE BTNS PARA VOLVER A LA VISTA GRAL DEL DIS///////////////
function subir() {

  $('body, html').animate({
      scrollTop: '120px'
  }, 150);
    console.log('estoy entrando en la funcion scroll');
};

$(".btnModal, *#btn-back-i").click( "click", function() {
   
  $('#distribuidoresInter').toggle().addClass('d-none');
  $('#mapaA, #mapaI').toggle().removeClass('d-none');
  subir();
});

$('*#btn-back').click('click', function(){
  $('#distribuidorList').toggle().removeClass('d-none');
  $('#mapaA, #mapaI').toggle().removeClass('d-none');
  subir();
})


$("#mapaA").click("click", function(){

  $('#distribuidorList').toggle().removeClass('d-none');
  $('#mapaA, #mapaI').toggle().addClass('d-none');
  subir();
})

$("#mapaI").click("click", function(){

  $('#distribuidoresInter').toggle().removeClass('d-none');
  $('#mapaA, #mapaI').toggle().addClass('d-none');
  subir();
});


// Tomo control de mi form para buscar Distribuidores
const $formDist = $("#form-distribuidores")

$formDist.submit(e =>{
  
  e.preventDefault();

})
// funcion para pintar el input en blanco
$('input').click(function(e){
  const ID = ($(this).attr('id')) 
  
  $('#' + `${ID}`).addClass('textareaColorBlanco')
  
})
$('select').click(function(e){
  const ID = ($(this).attr('id')) 
  
  $('#' + `${ID}`).addClass('textareaColorBlanco')
  
})