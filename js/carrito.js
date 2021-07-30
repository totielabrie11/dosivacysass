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

  updateTotalPrice()

  /* const filterDeproducto = renderTodoMiCarrito.filter(id => id === id);
  console.log(filterDeproducto) */

  //Rube este array "renderTodoMiCarrito" es la concatenación de mis busquedas, pero no de todo lo que se está renderizando en mi html . dedique mucho tiempo a llevar mis busquedas al carrito y no logré hacer que al darle click se valla al carrito.
//entonces intento traer un array con el render de todos mis productos y eso está en la linea 151


}


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
    producto.precio = Number(producto.precio); 
    
    //aca intento llevar al local Storage mi array de productos que se está renderizando y tiene parseado el precio para intetnar hacer cuentas luego.

    console.log([producto]) //producto antes de entrar al LCS
    
    localStorage.setItem("listaDeProductosRender",JSON.stringify([producto]));
    // aca Rube me da 1 solo lenght

    //let arregloDeClavesYValores = Object.entries(producto);
    //const filterAlArrayDeProdcutos = arregloDeClavesYValores.filter(busqueda => id === id)
    
    
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

function updateTotalPrice(){

  renderTodoMiCarrito.forEach((precio) => {
  
    const [...sumaPrecios] = [precio.precio]
    
    console.log([...sumaPrecios])
    //var arreglo = [3 , 5, 9, 13] // mi array que traigo de precio.precio entró un array por cada iteracion y no lo puedo concatenar para hacer la suma correcta
    suma = 0

    for (let i = 0; i < sumaPrecios.length; i++)
     {
      
      suma += sumaPrecios[i];
      
    }
    console.log(suma)
    
  });

 $("#compraTotal").append(' ', suma)

}

