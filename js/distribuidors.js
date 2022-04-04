//Llamado Ajax a mis distribuidors JSON
$.ajax({
    method: "GET",
    url: "../JSON/DISTRIBUIDORES.JSON",
  }).done((distribuidors) => {
      
    renderDistribuidorsCard(distribuidors)
      
      
  }).fail((error) => {
      console.log("carga de distribuidors no fue exitosa"); //reemplazar por un sweet modal
  }).always(() => {
      console.log("carga de datos distribuidors.JSON terminada");
  });



  function renderDistribuidorsCard(distribuidors) {
  

    distribuidors.forEach(element => {

      
      const { nombre, provincia, localidad, direccion, maps, img, id, tipo } = element
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
            ${maps}
        </div>
        <div class="card-footer">
            <div class="info">
                <div class="value">CLASE</div>
                <div class="type">${tipo.dosificacion}</div>
            </div>
            <div class="info">
                <div class="value">CLASE</div>
                <div class="type">${tipo.vacio}</div>
            </div>
            <div class="info">
                <div class="value">CLASE</div>
                <div class="type">${tipo.soplador}</div>
            </div>
        </div>
      </div>
      `
      $('#distribuidores').append(html)
        element;
        console.log(element)
    });

    $("#btnSearch").click(function (e) {
      e.preventDefault(distribuidors);
     
      let inputs = $("input");
    
      const valorBusqueda = $(inputs).val();
     
      const valorBusquedaFilter = valorBusqueda.trim().toLowerCase();
      
      resultadoBusqueda1 = distribuidors.filter((distribuidor) =>
          distribuidor.nombre.toLowerCase().includes(valorBusquedaFilter)
        );
    
      resultadoBusqueda2 = distribuidors.filter((distribuidor) =>
          distribuidor.provincia.toLowerCase().includes(valorBusquedaFilter)
        );

      resultadoBusqueda3 = distribuidors.filter((distribuidor) =>
          distribuidor.localidad.toLowerCase().includes(valorBusquedaFilter)
        );
    
        BusquedaParcial = resultadoBusqueda1.concat(resultadoBusqueda2)

        totalBusquedaDeDistribuidor = resultadoBusqueda3.concat(BusquedaParcial)
        
        if (totalBusquedaDeDistribuidor) {

          distribuidores.innerHTML = ""

          renderDistribuidorsCard(totalBusquedaDeDistribuidor);

          volverLista.innerHTML = "<div class='btn btn-dark w-100 d-block mt-4' onclick='location.reload()')>VOLVER A LA LISTA</DIV>"
        
          
        };
      });
  };


