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
    
    $('#borrarSelector').dblclick(function () {
        
        location.reload();

    });

})


function agregarCarrito() {
    
    let [...arrayCarrito] = arraySelection;
    console.log("🚀 ~ file: carrito.js ~ line 32 ~ arrayCarrito", arrayCarrito)
    
    //falta terminar la logica de programacion, y que se renderice mi HTML en la nueva section de la class "carrito"  
}

