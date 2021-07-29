//METODO PARA LLEGAR HASTA EL EVENTO CLICK DE MIS BOTONES SIN JQ

/* const agregarCarritoButtom = document.querySelectorAll('#agregarCarrito');
agregarCarritoButtom.forEach(agregarCarrito => {
    agregarCarrito.addEventListener('click', () => console.log('agregado'))
});

const agregarBorrarSelButtom = document.querySelectorAll('#borrarSelector');
agregarBorrarSelButtom.forEach(agregarCarrito => {
    agregarCarrito.addEventListener('click', () => console.log('agregado'))
});
 */

//METODO PARA LLEGAR HASTA EL EVENTO CLICK DE MIS BOTONES CON JQ  Y ademas le estoy pasando una funcion HERMOSO

$(document).ready(function () {
  $("#agregarCarrito").click(function () {
    //me pasaba que al intentar igualar mi arraySelection al arrayCarrito, como este todavia no habia sido ejecutada la funcion, el arrayCarrito tomaba el valor "nada", lo pude solucionar con el metodo .ready() que le paso a esta funcion. todo con jQuery

    console.log('estoy aqui')
  });

  $("#borrarSelector").dblclick(function () {
    // funciona haciendo doble click

    //location.reload(); //forma equivocada de hacerlo

    arrayCarrito = []; //vacio el array

    resultadoSelector.innerHTML = ""; //limpiar el campo del selector de producto

    //mostrarCarrito.innerHTML = ""; //limpiar el campo del carrito de compras
  });
  $("#ocultarForm").click(function () {
    $("form").addClass("ocultar__form").toggle();
    $("#resultadoSelector").attr('class', 'd-flex flex-nowrap');
    $("#textoCaracteristica").addClass('tamañoLetraCaracteristica').toggle();
    
  });
  $("#carritoIcon").on( "click", function() {
    
    $('#mostrarCarrito').toggle(); 

  });
});

// INVOCO MI ARCHIVO JSON CON AJAX A TRAVES DEL METODO GET
$.ajax({
  method: "GET",
  url: "../json/productos.json",
})
.done((productosJSON) => {
    renderizarJSON(productosJSON);
  })
  .fail((error) => {
    console.log(error); //reemplazar por un sweet modal
  })
  .always(() => {
    console.log("transferencia de datos JSON terminada");
  });


function agregarAlCarrito(id){
  let productosJSON 

 // const agregarAlCarrito = productosJSON.filter(busqueda => busqueda.id === id);
  //console.log("🚀 ~ file: carrito.js ~ line 66 ~ agregarAlCarrito ~ agregarAlCarrito", agregarAlCarrito)
  

}
  console.log("🚀 ~ file: carrito.js ~ line 71 ~ agregarAlCarrito ~ productosJSON", productosJSON)


function deleteItemCarrito(id){

  console.log('antes de eliminar de mi carrito: ', renderTodoMiCarrito);
  const borrarDelCarrito = renderTodoMiCarrito.filter(busqueda => busqueda.id !== id);
  [...renderTodoMiCarrito] = borrarDelCarrito
  console.log('despues de eliminar mi carrito: ',[...renderTodoMiCarrito]);
  
  const GuardarLSFilter = () => {
    localStorage.setItem(
      "busquedaCarrito",
      JSON.stringify([...renderTodoMiCarrito])
      
    );
    localStorage.setItem(
      "resultado",
      JSON.stringify([...renderTodoMiCarrito.filter(busqueda => busqueda.id === id)]) //esto me costo horrores y lo saque por que tenía un ejemplo similar mas arriba. 
      
    );
    location.reload();
  };
  
  GuardarLSFilter();
 
};

renderCarritoDeMiBusqueda = JSON.parse(localStorage.getItem("busquedaCarrito"));
renderCarritoDeMiSeleccion = JSON.parse(localStorage.getItem("resultado"));

let [...renderTodoMiCarrito] = renderCarritoDeMiBusqueda.concat(
  renderCarritoDeMiSeleccion
);

$(document).ready(function () {

  if (renderTodoMiCarrito === null) {
    renderTodoMiCarrito = [];
  } else {
    renderTodoMiCarrito.forEach((resultado) => {
      $(".carrito__superior").append(
        `
        <div class="carrito container alert alert-warning text-dark rounded">
        <div>
            <h4>${resultado.linea}</h4>
        </div>
        <div>
            <h4>${resultado.modelo}</h4>
        </div>
        <div class="contenedor__img__carrito">
            ${resultado.foto}
        </div>
        <div>
            <div>
                <span>Cantidad</span>
                <input type="text" placeholder="1" id="cantidadCarrito" class="w-25"> 
            </div>
        </div>
        <div> 
            <div class="btn__borrarCarrito" value="borrar" onclick="deleteItemCarrito('${resultado.id}')">
                <div>X</div>
            </div>
        </div>
        <div>
            <div class="btn__confirmarCarrito" value="agregar" onclick="deleteItemCarrito('${resultado.id}')">
                <span>OK</span>
            </div>
        </div>
        <div>Precio</div>
        <div>${resultado.precio}</div>
        </div>
    </div>
    </div>
            `
      );
    });
  }
})


//agregarTodoCarrito();

function renderizarJSON(productosJSON) {
  productosJSON.forEach((producto) => {
    const { proceso, linea, modelo, caracteristicas, foto, precio, id } =
      producto;

    $("#resultadoSelector").append(
      `
      <div class="mt-3 p-1 text-dark">
      <div id="errorBusqueda" class="alert alert-success" role="alert">
          <table class="table" id="tabla">
              <div class="lista__tabla text-dark">
                  <ul>
                      <li>Tipo de Proceso</li>
                      <li>Linea</li>
                      <li>Modelo</li>
                      <li>Precio</li>
                      <li><i class="material-icons" id="borrarSelector">delete</i></li>
                      <li><i class="material-icons" onclick="agregarAlCarrito('${id}')" id="agregarCarrito">add_shopping_cart</i></li>
                  </ul>
              </div>
              <hr>
                  <ul>
                      <li>${proceso}</li>
                      <li>${linea}</li>
                      <li>${modelo}</li>
                      <li>${precio}</li>
                      <li></li>
                      <li></li>
                  </ul>
                  
                  <hr>
                  <section class="d-flex justify-content-between" style="height: 20rem;">
                      <div class="text-dark">
                          <h5 id="textoCaracteristica">${caracteristicas}</h5>
                      </div>     
                      <div style="border-left:1px solid rgba(105, 103, 103, 0.322)"></div>
                      <div>
                          <h5 class="text-center">DISEÑO</h5>
                          <div class="d-flex justify-content-center">
                              ${foto}
                          </div>
                      </div>
                  </section>
              </div>
          </table>    
      </div>
  </div>
      `
    );
  });

  $("#btnSearch").click(function (e) {
    e.preventDefault();

    var inputs = $("input");

    const valorBusqueda = $(inputs).val();
    const valorBusquedaFilter = valorBusqueda.trim().toLowerCase();

    resultadoBusqueda1 = productosJSON.filter((producto) =>
      producto.modelo.toLowerCase().includes(valorBusquedaFilter)
    );

    resultadoBusqueda2 = productosJSON.filter((producto) =>
      producto.proceso.toLowerCase().includes(valorBusquedaFilter)
    );

    resultadoSelector.innerHTML = "";

    renderizarJSON(resultadoBusqueda1);
    renderizarJSON(resultadoBusqueda2);

    let [...resultadoBusquedaLCS] =
      resultadoBusqueda1.concat(resultadoBusqueda2);

    const GuardarLSBusqueda = () => {
      localStorage.setItem(
        "busquedaCarrito",
        JSON.stringify([...resultadoBusquedaLCS])
      );
    };
    GuardarLSBusqueda();

    $("#btnSearch").reset(input[1]);
  });
}

function agregarItemCarrito(id){
  console.log(id);
}; 