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

  $("#borrarSelector").dblclick(function () {
    
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
  $("#btnComprar").click(function () {
    console.log(precio)
   Swal.fire({
    title: 'Gracias por tu compra',
    text: 'El pago se ha registrado con exito',
    // html:
    icon: 'success',
    confirmButtonText: 'CONFIRMAR',
    footer: 'Le enviamos el recibo por email',
    // width:
    // padding:
    // background:
    // grow:
    // backdrop:
    timer: '5500',
    timerProgressBar: 'true'
    // toast:
    // position:
    // allowOutsideClick:
    // allowEscapeKey:
    // allowEnterKey:
    // stopKeydownPropagation:
  
    // input:
    // inputPlaceholder:
    // inputValue:
    // inputOptions:
    
    //  customClass:
    // 	container:
    // 	popup:
    // 	header:
    // 	title:
    // 	closeButton:
    // 	icon:
    // 	image:
    // 	content:
    // 	input:
    // 	actions:
    // 	confirmButton:
    // 	cancelButton:
    // 	footer:	
  
    // showConfirmButton:
    // confirmButtonColor:
    // confirmButtonAriaLabel:
  
    // showCancelButton:
    // cancelButtonText:
    // cancelButtonColor:
    // cancelButtonAriaLabel:
    
    // buttonsStyling:
    // showCloseButton:
    // closeButtonAriaLabel:
  
  
    // imageUrl:
    // imageWidth:
    // imageHeight:
    // imageAlt:

    
  });
  localStorage.removeItem('busquedaCarrito');
  localStorage.removeItem('productoById');
  localStorage.removeItem('resultado');

  window.setTimeout(recargar, 5700);
  });
});

function recargar() {
  location.reload()
}

// INVOCO MI ARCHIVO JSON CON AJAX A TRAVES DEL METODO GET
$.ajax({
  method: "GET",
  url: "../json/productos.json",
})
.done((productosJSON) => {
    renderizarJSON(productosJSON);
    crearArrayDeProductosJSON(productosJSON)
  })
  .fail((error) => {
    console.log(error); //reemplazar por un sweet modal
  })
  .always(() => {
    console.log("transferencia de datos JSON terminada");
  });


function agregarAlCarrito(id){

  console.log(id)
  const obtenerProductoById = arrayDeProductoById.filter(busqueda => busqueda.id === id); // aquí me traía dos resultados, por que mis productos id están presentes en JSON y en JS mi creador primario de objetos.product. entonces con index[0], le pido que me traiga solo el primer resultado.
  console.log(obtenerProductoById)
  
  localStorage.setItem("productoById", JSON.stringify(obtenerProductoById));

  updateTotalPrice()
  location.reload() 

}
$(window).ready(function () {
  updateTotalPrice()
});

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
    localStorage.setItem(
      "productoById",
      JSON.stringify([...renderTodoMiCarrito.filter(busqueda => busqueda.id === id)])

    );
    location.reload();
  };
  
  GuardarLSFilter();
  updateTotalPrice();
};

renderCarritoDeMiProductoById = JSON.parse(localStorage.getItem("productoById"));
renderCarritoDeMiBusqueda = JSON.parse(localStorage.getItem("busquedaCarrito"));
if (renderCarritoDeMiBusqueda === null) {renderCarritoDeMiBusqueda = []}
renderCarritoDeMiSeleccion = JSON.parse(localStorage.getItem("resultado"));
if (renderCarritoDeMiSeleccion === null) {renderCarritoDeMiSeleccion = []};

let [...renderTodoMiCarrito] = renderCarritoDeMiBusqueda.concat(
  renderCarritoDeMiSeleccion).concat(renderCarritoDeMiProductoById);

$(document).ready(function () {

  if (renderTodoMiCarrito === null) {
    renderTodoMiCarrito = [];
  } else {
    renderTodoMiCarrito.forEach((resultado) => {
      $("#mostrarContenidoCarrito").append(
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
            <div class="btn__borrarCarrito text-w" value="borrar" onclick="deleteItemCarrito('${resultado.id}')">
                <div>X</div>
            </div>
        </div>
        <div>
            <div class="btn__confirmarCarrito btn-success" value="agregar" onclick="deleteItemCarrito('${resultado.id}')">
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

function crearArrayDeProductosJSON(productosJSON) {
 arrayDeProductoById = [...productosJSON]
  
  
}
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////RENDERIZA TODOS MIS ELEMENTOS JSON//////////////////////////////
function renderizarJSON(productosJSON) {
  productosJSON.forEach((producto) => {
    const { proceso, linea, modelo, caracteristicas, foto, precio, id } =
    producto;
    producto.precio = Number(producto.precio); 
    
    $("#resultadoSelector").append(
      `
      <div class="mt-3 p-1 text-dark">
      <div id="errorBusqueda" class="alert alert-dark" role="alert">
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

function updateTotalPrice(){

let total = 0;
renderTodoMiCarrito.forEach(producto => {
    if (producto === null) {producto = []};  
    total += producto.precio
});
console.log(total);

 $("#compraTotal").html(' Total de la compra:  $' +  total);

};

