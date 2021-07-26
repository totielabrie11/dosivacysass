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
    //agregarCarritoBusqueda();
    //agregarCarrito();
  });

  $("#borrarSelector").dblclick(function () {
    // funciona haciendo doble click

    //location.reload(); //forma equivocada de hacerlo

    arrayCarrito = []; //vacio el array

    resultadoSelector.innerHTML = ""; //limpiar el campo del selector de producto

    //mostrarCarrito.innerHTML = ""; //limpiar el campo del carrito de compras
  });
});

/* function agregarCarrito() {
  [...arrayCarrito] = JSON.parse(localStorage.getItem("resultado"));

  if (arrayCarrito.length === 0) {
    $("#mostrarCarrito")
      .slideDown(4000)
      .slideToggle(4000)
      .html(
        "Debe seleccionar al menos un producto para poder mostrar el carrito"
      );
  } else {
    let htmlRender = "";

    htmlRender += `<div>${contador.linea}  ${contador.modelo}</div><div class="contenedor__img__carrito">${contador.img}</div><div><div>Cantidad</div><div><input type="text" placeholder="1" id="cantidadCarrito" class="w-25"> </div></div><div class="btn__borrarCarrito">
        <span onclick="deleteItemCarrito(event) id="btn-delete">
        X
        </span></div><div class="btn__confirmarCarrito"><span>OK</span></div><div><div>Precio</div><div>$25000</div></div><div class="precio__total">TOTAL DE TU COMPRA</div>`;

    arrayCarrito.forEach((element) => {
      $("#mostrarCarrito").append(htmlRender);
    });
  }
} */

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

renderCarritoDeMiBusqueda = JSON.parse(localStorage.getItem("busquedaCarrito"));
renderCarritoDeMiSeleccion = JSON.parse(localStorage.getItem("resultado"));

let [...renderTodoMiCarrito] = renderCarritoDeMiBusqueda.concat(
  renderCarritoDeMiSeleccion
);
console.log(
  "🚀 ~ file: carrito.js ~ line 81 ~ ...renderTodoMiCarrito",
  ...renderTodoMiCarrito
);

function agregarTodoCarrito() {
  if (renderTodoMiCarrito === null) {
    renderTodoMiCarrito = [];
  } else {
    renderTodoMiCarrito.forEach((resultado) => {
      $("#mostrarCarrito").append(
        `
        <div>${resultado.linea}  ${resultado.modelo}</div>
        <div class="contenedor__img__carrito">${resultado.foto}</div>
            <div>
                Cantidad
            </div>
            <div>
                <input type="text" placeholder="1" id="cantidadCarrito" class="w-25"> 
            </div>
        </div>
        <div> 
            <div class="btn__borrarCarrito" value="borrar" onclick="deleteItemCarrito(${resultado.id})">
                <div>X</div>
            </div>
        </div>
        <div>
            <div class="btn__confirmarCarrito" value="agregar" onclick="deleteItemCarrito(${resultado.id})">
                <span>OK</span>
            </div>
        </div>
        <div>Precio</div>
        <div>${resultado.precio}</div>
        </div>
        <div class="precio__total">TOTAL DE TU COMPRA</div>
            `
      );
    });
  }
}

agregarTodoCarrito();

function renderizarJSON(productosJSON) {
  productosJSON.forEach((producto) => {
    const { proceso, linea, modelo, caracteristicas, foto, precio, id } =
      producto;

    $("#resultadoSelector").append(
      `
        <div class="mt-4">
            <ul>
                <li>${proceso}</li>
                <li>${linea}</li>
                <li>${modelo}</li>
                <li><i class="material-icons">attach_money</i>${producto.precio}</li>
                <li></li>
                <i class="material-icons">favorite</i>
            </ul>
            <hr>
            <section class="d-flex justify-content-between" style="height: 20rem;">
                ${caracteristicas}
                <div style="border-left:1px solid rgba(105, 103, 103, 0.322)">
                </div>
                <div>
                    <h4 class="text-center">DISEÑO</h4><div class="d-flex justify-content-center">${producto.foto}
                </div>
            </section>
            <hr>  
        </div>
            `
    );

    let htmlRender = "";

    /*  if (resultadoBusqueda1.length >= 1 || resultadoBusqueda2.length >= 1) {
      $("#mostrarCarrito").append(
        `
        <div>${linea}  ${modelo}</div>
        <div class="contenedor__img__carrito">${foto}</div>
            <div>
                Cantidad
            </div>
            <div>
                <input type="text" placeholder="1" id="cantidadCarrito" class="w-25"> 
            </div>
        </div>
        <div> 
            <div class="btn__borrarCarrito" value="borrar" onclick="deleteItemCarrito(${id})">
                <div>X</div>
            </div>
        </div>
        <div>
            <div class="btn__confirmarCarrito" value="agregar" onclick="deleteItemCarrito(${id})">
                <span>OK</span>
            </div>
        </div>
        <div>Precio</div>
        <div>${precio}</div>
        </div>
        <div class="precio__total">TOTAL DE TU COMPRA</div>
            `
      );
    } */
  });

  deleteItemCarrito = (id) => {
    console.log(id);
  };
  agregarItemCarrito = (id) => {
    console.log(id);
  };

  //No pude inlucír este evento dentro de los eventos click de jQuery , por que no encontré la forma de definir productosJSON como una variable global que traigo con ajax. solo me funciona dentro del ambito de la funcion.

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
