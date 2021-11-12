//Llamado Ajax a mis distribuidors JSON
$.ajax({
    method: "GET",
    url: "../json/distribuidores.json",
  }).done((distribuidors) => {
      
    renderDistribuidorsCard(distribuidors)
      
      
  }).fail((error) => {
      console.log("carga de distribuidors no fue exitosa"); //reemplazar por un sweet modal
  }).always(() => {
      console.log("carga de datos distribuidors.JSON terminada");
  });



  function renderDistribuidorsCard(distribuidors) {
  

    distribuidors.forEach(element => {

      const { nombre, provincia, localidad, direccion, maps, img, id } = element
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
                <div class="value">51784</div>
                <div class="type">views</div>
            </div>
            <div class="info">
                <div class="value">329</div>
                <div class="type">comments</div>
            </div>
            <div class="info">
                <div class="value">4.5</div>
                <div class="type">rating</div>
            </div>
        </div>
      </div>
      `
      $('#distribuidores').append(html)
        element;
        console.log(element)
    });
}