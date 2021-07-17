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
    
        mostrarCarrito.innerHTML = ""
    
    } else {
        arrayCarrito.forEach((element) => {
            mostrarCarrito.innerHTML += 
            `<div>${contador.linea}  ${contador.modelo}</div><div class="contenedor__img__carrito">${contador.img}</div><div><div>Cantidad</div><div><input type="text" placeholder="1" id="cantidadCarrito" class="w-25"> </div></div><div class="btn__borrarCarrito"><span>X</span></div><div class="btn__confirmarCarrito"><span>OK</span></div><div><div>Precio</div><div>$25000</div></div><div class="precio__total">TOTAL DE TU COMPRA</div>`
        })
    }
};

//Profe , tengo aqui un tema con mi funcion agregarCarrito. Se pinta una vez el resultado de la seleccion y despues. no importa que pase. no se va a modificar nunca mas. si lo pruebo en consola y le fuerzo el valor 0 , si funciona, pero luego en practica no logro hacerlo andar. Si borro el Lsotrage a mano, tampoco, si en vez de pintar con el local storage , le paso un array que luego lo paso a nada, tampoco. Es como si no se pudiera volver a renderizar cualquier tipo de cambio. A diferencia de mi section de selector . que te permite cambiar de busqueda e ir por otro objeto y esto se cambia en pantalla sin ningun problema. tampoco puedo borrar lo que se pinto , si se fija en la funcion de borrar, le estoy pasando un innerHTML ="nada" y ademas le estoy limpiando el storage. que tampoco sucede. Pero mas alla de borrar o no. me gustaria poder agregar items a mi carrito. si me puede orientar profe, hasta aqui hemos llegado con mi conocimiento que esta al 3%. saludos profe Rube gracias.
