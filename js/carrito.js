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



$(document).ready(function(){

    $('#agregarCarrito').click(function () {
        //me pasaba que al intentar igualar mi arraySelection al arrayCarrito, como este todavia no habia sido ejecutada la funcion, el arrayCarrito tomaba el valor "nada", lo pude solucionar con el metodo .ready() que le paso a esta funcion. todo con jQuery
        agregarCarrito();

    });
    
    $('#borrarSelector').dblclick(function () { // funciona haciendo doble click
        
        //location.reload(); //forma equivocada de hacerlo

        arrayCarrito = []; //vacio el array
      
        resultadoSelector.innerHTML = "";  //borro el campo del resultado de mi busqueda 

        mostrarCarrito.innerHTML = ""; //no me borra esta parte del carrito

        Storage.clear();
    
    });

})

function agregarCarrito() {
    
    [...arrayCarrito] = JSON.parse(localStorage.getItem("resultado"));

    console.log("🚀 ~ file: carrito.js ~ line 32 ~ arrayCarrito", arrayCarrito);                                        

    if (arrayCarrito.length === 0) { 
    
        $('#mostrarCarrito').slideDown(4000).slideToggle(4000).html('Debe seleccionar al menos un producto para poder mostrar el carrito');
    
    } else {
        let htmlRender = "";

        htmlRender += `<div>${contador.linea}  ${contador.modelo}</div><div class="contenedor__img__carrito">${contador.img}</div><div><div>Cantidad</div><div><input type="text" placeholder="1" id="cantidadCarrito" class="w-25"> </div></div><div class="btn__borrarCarrito"><span>X</span></div><div class="btn__confirmarCarrito"><span>OK</span></div><div><div>Precio</div><div>$25000</div></div><div class="precio__total">TOTAL DE TU COMPRA</div>`;

        arrayCarrito.forEach((element) => {
            $('#mostrarCarrito').append(htmlRender);
        })
    }
};

// INVOCO MI ARCHIVO JSON CON AJAX A TRAVES DEL METODO GET
$.ajax({
    method: 'GET',
    url: '../json/productos.json'
}).done((productosJSON)=> {
    crearCards(productosJSON);
}).fail((error)=> {
    console.log(error);//reemplazar por un sweet modal
}).always(()=> {
    console.log('transferencia de datos JSON terminada');
});


function crearCards(productosJSON){
    console.log(productosJSON);
    
    let algo = $(productosJSON).each( function(index, producto) {
        $('#resultadoSelector').append(`<ul><li>${producto.proceso}</li><li>${producto.linea}</li><li>${producto.modelo}</li><li><i class="material-icons">attach_money</i>${producto.precio}</li><li></li><i class="material-icons">favorite</i></ul><hr><section class="d-flex justify-content-between" style="height: 20rem;">${producto.caracteristicas}<div style="border-left:1px solid rgba(105, 103, 103, 0.322)"></div><div><h4 class="text-center">DISEÑO</h4><div class="d-flex justify-content-center">${producto.foto}</div></div></section></div>`
        );
    })

};