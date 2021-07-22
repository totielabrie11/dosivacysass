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
      
        resultadoSelector.innerHTML = "";  //limpiar el campo del selector de producto

        mostrarCarrito.innerHTML = ""; //limpiar el campo del carrito de compras

        Storage.clear();
    
    });
    

})


function agregarCarrito() {
    
    [...arrayCarrito] = JSON.parse(localStorage.getItem("resultado"));                                        

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
/* function agregarCarritoJson() {                     

    if (resultadoBusqueda.length === 0) { 
    console.log("🚀 ~ file: carrito.js ~ line 64 ~ agregarCarritoJson ~ resultadoBusqueda.length", resultadoBusqueda.length)
    
        $('#mostrarCarrito').slideDown(4000).slideToggle(4000).html('Debe seleccionar al menos un producto para poder mostrar el carrito');
    
    } else {
        let htmlRender = "";

        htmlRender +=
            `
        <div>${linea}  ${modelo}</div><div class="contenedor__img__carrito"></div><div><div>Cantidad</div><div><input type="text" placeholder="1" id="cantidadCarrito" class="w-25"> </div></div><div class="btn__borrarCarrito"><span>X</span></div><div class="btn__confirmarCarrito"><span>OK</span></div><div><div>Precio</div><div>$25000</div></div><div class="precio__total">TOTAL DE TU COMPRA</div>
            `;

            arrayCarrito.forEach((element) => {
            $('#mostrarCarrito').append(htmlRender);
        })
    }
}; */

// INVOCO MI ARCHIVO JSON CON AJAX A TRAVES DEL METODO GET
$.ajax({

    method: 'GET',
    url: '../json/productos.json'
    
}).done((productosJSON)=> {

    renderizarJSON(productosJSON);
    
}).fail((error)=> {

    console.log(error);//reemplazar por un sweet modal

}).always(()=> {

    console.log('transferencia de datos JSON terminada');

})



function renderizarJSON(productosJSON){
    
    productosJSON.forEach(producto => {

        const { proceso, linea, modelo, caracteristicas, foto, precio} = producto;

    
        $('#resultadoSelector').append(
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
        
    
       //let htmlRender = "";
       if (resultadoBusqueda.length >= 1) {       

       $('#mostrarCarrito').append(

        `<div>${linea}  ${modelo}</div><div class="contenedor__img__carrito">${foto}</div><div><div>Cantidad</div><div><input type="text" placeholder="1" id="cantidadCarrito" class="w-25"> </div></div><div class="btn__borrarCarrito"><span>X</span></div><div class="btn__confirmarCarrito"><span>OK</span></div><div><div>Precio</div><div>${precio}</div></div><div class="precio__total">TOTAL DE TU COMPRA</div>`);

        }
    
    });

    //No pude inlucír este evento dentro de los eventos click de jQuery , por que no encontré la forma de definir productosJSON como una variable global que traigo con ajax. solo me funciona dentro del ambito de la funcion.

    $('#btn-search').click(function (e) {

        e.preventDefault();
          
        var inputs = $('input');
          
        const valorBusqueda = $(inputs).val();
        const valorBusquedaFilter = valorBusqueda.trim().toLowerCase();
        
        resultadoBusqueda = productosJSON.filter(producto => producto.modelo.toLowerCase().includes(valorBusquedaFilter));
        console.log("🚀 ~ file: carrito.js ~ line 102 ~ resultadoBusqueda", resultadoBusqueda)
            
        resultadoSelector.innerHTML = ""
    
        renderizarJSON(resultadoBusqueda);
    
    });
}

