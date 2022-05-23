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
      <div class="card">
        <div class="card-image">
            ${img}
        </div>
        <div class="card-body">
            <span class="date">${nombre}</span>
            <h4>${provincia}</h4>
            <h5>${localidad}</h5>
            <p>
              ${direccion}
            </p>
            <p>
              ${contacto}
            </p>
            ${maps}
        </div>
        <div class="card-footer">
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
    
    var $valorDelSelect = '';

    $('select').change(function(){
      $valorDelSelect = $('select').val();
      
    })
    
    $("#btnSearch").click(function (e) {
      
      const administrarFilter = ($valorDelSelect) => {
        if ($valorDelSelect === "vacio") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.vacio.toLowerCase().includes($valorDelSelect)
          );
          return;
        };
        if ($valorDelSelect === "sopladores") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.soplador.toLowerCase().includes($valorDelSelect)
          );
          return;
        };
        if ($valorDelSelect === "laboratorio") {
          Busqueda1 = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.refrigeracion.toLowerCase().includes($valorDelSelect)
          );
          Busqueda2 = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.vacio.toLowerCase().includes($valorDelSelect)
          );
          Busqueda = Busqueda1.concat(Busqueda2)
          return;
        };
        if ($valorDelSelect === "industrial") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.vacio.toLowerCase().includes($valorDelSelect)
          );
          return;
        };
        if ($valorDelSelect === "petrolera") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.petroleo.toLowerCase().includes($valorDelSelect)
          );
          return;
        };
        if ($valorDelSelect === "compactos") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.dosificacionMenor.toLowerCase().includes($valorDelSelect)
          );
          return;
        };
        if ($valorDelSelect === "gran porte") {
          Busqueda = distribuidors.filter((distribuidor) =>
            distribuidor.tipo.dosificacionMayor.toLowerCase().includes($valorDelSelect)
          );
          return;
        };

        if ($valorDelSelect === "accesorios") {
          Busqueda = [];
          alert('accesorios no está asignado a ningun distribuidor')
        };


      };
      
      let $inputs = $("input");
      
      const $nombreDis = $('#nombreDis').val().trim().toLowerCase();
      const $localidadDis = $('#localidadDis').val().trim().toLowerCase();
      
      //configuro mis shitches para que entre la busqueda según su caso
      if($valorDelSelect != ''){

        administrarFilter($valorDelSelect);

      };
    

      if($nombreDis){

        Busqueda = distribuidors.filter((distribuidor) =>
          distribuidor.nombre.toLowerCase().includes($nombreDis)
        );
      };

      if($localidadDis){
        
        Busqueda = distribuidors.filter((distribuidor) =>
          distribuidor.provincia.toLowerCase().includes($localidadDis)
          //distribuidor.localidad.toLowerCase().includes($localidadDis)
        );
      };
  
      console.log(Busqueda);

      if (Busqueda) {

        distribuidores.innerHTML = ""

        renderDistribuidorsCard(Busqueda);

        volverLista.innerHTML = "<div class='btn btn-dark w-100 d-block mt-4' onclick='location.reload()')>VOLVER AL SELECTOR</DIV>"
        
      }else{
        distribuidores.innerHTML = ""
      };
    });
  };


$(".btnModal, *#btn-back-i").click( "click", function() {
   
  $('#distribuidoresInter').toggle().addClass('d-none');
  $('#mapaA, #mapaI').toggle().removeClass('d-none');

});

$('*#btn-back').click('click', function(){
  $('#distribuidorList').toggle().removeClass('d-none');
  $('#mapaA, #mapaI').toggle().removeClass('d-none');
})


$("#mapaA").click("click", function(){

  $('#distribuidorList').toggle().removeClass('d-none');
  $('#mapaA, #mapaI').toggle().addClass('d-none');
})

$("#mapaI").click("click", function(){

  $('#distribuidoresInter').toggle().removeClass('d-none');
  $('#mapaA, #mapaI').toggle().addClass('d-none');

});


// Tomo control de mi form para buscar Distribuidores
const $formDist = $("#form-distribuidores")

$formDist.submit(e =>{
  
  e.preventDefault();

})