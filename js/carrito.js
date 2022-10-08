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
   
    let montoTotal = document.querySelector("#compraTotal").textContent.replace('Total de la compra:', '')
  
    montoTotal = Number(montoTotal.substring(4))
    
    if (montoTotal === 0) {
      Swal.fire({
        title: 'Tu compra no ha sido procesada',
        text: 'Debes ingresar al menos un producto al carrito',
        icon: 'error',
        confirmButtonText: 'CONFIRMAR',
        footer: 'Ingrese un producto y vuelva a intentar',
        timer: '5500',
        timerProgressBar: 'true'
      });
    console.log('estoy aquí: no tengo compras en mi carrito')
    return
    }
    
    Swal.fire({
    title: 'Gracias por tu compra',
    text: 'El pago se ha registrado con exito',
    html: `<h4>El pago total de la compra es de:  <br><br>$ ${montoTotal} </h4>`,
    icon: 'success',
    confirmButtonText: 'CONFIRMAR',
    footer: 'Le enviamos el recibo por email',
    timer: '5500',
    timerProgressBar: 'true'
  });
  console.log('estoy aquí: tengo al menos una compra en mi carrito')
  
     localStorage.removeItem('busquedaCarrito');
     localStorage.removeItem('carrito');
     localStorage.removeItem('resultado');
   
     window.setTimeout(recargar, 5700);
  });

});
  
function recargar() {
  location.reload() // antes la usaba todo el tiempo para hacer correr mi app
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
  
  let carrito = [];
const agregarAlCarrito = id => {
    //buscar producto en DB
    arrayDeProductoById
    
    const product = arrayDeProductoById.find(prod => prod.id === id); //Buscar si existe en el cart
    const isInCart = carrito.find(prod => prod.id === id);
  
    if (isInCart) {
      carrito[carrito.findIndex(prod => prod.id === id)].cantidad += 1;
      carrito = [...carrito];
      return;
    }
    product.cantidad = 1;
    carrito.push(product);

    console.log('agregando producto al carrito: ', carrito )
    localStorage.setItem("carrito", JSON.stringify(carrito));

    guardarLSCarrito()
    renderCarrito();
    updateTotalPrice();
};
  
const borrarDelCarrito = id => {
    const deleteProduct = carrito.filter(prod => prod.id !== id);
    carrito = [...deleteProduct];

    console.log('eliminando producto del carrito: ', carrito )
    localStorage.setItem("carrito", JSON.stringify(carrito));

    guardarLSCarrito();
    renderCarrito();
    updateTotalPrice();
};
  

$(window).ready(function () {// hermoso este descubrimiento
  renderCarrito();
  updateTotalPrice();
});

function guardarLSCarrito(){ 
[...renderTodoMiCarrito] = JSON.parse(localStorage.getItem("carrito"));
}


const renderCarrito = () => {
    let [...renderTodoMiCarrito] = JSON.parse(localStorage.getItem("carrito"));
    console.log([...renderTodoMiCarrito]); 
    $("#mostrarContenidoCarrito").html('')
    let html = '';
    renderTodoMiCarrito.forEach((resultado) => {
        html =  `
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
                <div class="btn__borrarCarrito text-w" value="borrar" onclick="borrarDelCarrito('${resultado.id}')">
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
      `;
      $("#mostrarContenidoCarrito").append(html)
    });
}

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
                      <li><i class="material-icons" onclick="borrarDelCarrito('${id}')" id="borrarSelector">delete</i></li>
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

    let inputs = $("input");

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

    let input = $("#search").val() 
    $("#search").reset(input);

    $('#distribuidores').removeClass('d-none')
  });
}

function updateTotalPrice(){
  [...renderTodoMiCarrito] = JSON.parse(localStorage.getItem("carrito"));

  let total = 0;
  renderTodoMiCarrito.forEach(producto => {
      
    total += producto.precio 
    
  ;
})
$("#compraTotal").html(' Total de la compra:  $' +  total);

};

/* total = Number.isNaN(total) 
if (true){total = producto.precio} 
if (total === undefined){total = 0} // tuve que usar este metodo isNaN, ya que no lo tomaba como condicional, lo pase a undefined y ahi si entró la condicional.  */
