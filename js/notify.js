//Llamado Ajax a mis notify JSON
$.ajax({
  method: "GET",
  url: "../json/notify.json",
})
.done((notify) => {
    nuevoEventToLCS(notify);
    notificacionesJSON(notify);
    
  })
  .fail((error) => {
    console.log("carga de notify no fue exitosa"); //reemplazar por un sweet modal
  })
  .always(() => {
    console.log("carga de datos notify.JSON terminada");
  });


const notificacionesJSON = (notify) => {
  localStorage.setItem(
    "notify",
    JSON.stringify([...notify])
  );
};

let arrayDeNotificaciones = []

function nuevoEventToLCS(){

  notifyLCS = JSON.parse(localStorage.getItem("notify"));
  console.log("🚀 ~ file: notify.js ~ line 33 ~ notifyDetector ~ notifyLCS", notifyLCS)
 
  if (notifyLCS === null) {
      notifyLCS = []
    
      console.log('se reseteo el LCS')
      notifyDetector(notifyLCS)
    }
  else {
    console.log('desarrollar la logica para el usuario que tiene antecedente en LCS')
    notifyDetector(notifyLCS)

  }
  
} 
///////////////////////////////////////////////////////////////////////////////////////////////
////////////funcion crear la logica para enterarme de nuevas notificaciones y actualizar///////
updateNotify()
function updateNotify(notifyLCS){

  
  console.log(arrayDeNotificaciones)

}

 /*  let arrayDeNotificaciones = notifyLCS.find(not => not.titulo !== titulo); //Buscar si existe en el cart
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
}; */

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
function notifyDetector(notifyLCS){

  
  console.log(notifyLCS)

 
  if(arrayDeNotificaciones === notifyLCS){
    console.log('no tengo nuevas notificaciones')
  }else{
    
    console.log('tengo nuevas notificaciones')

    notify()

  }
  
} 


function notify(){
  //verificar que el navegador soporte notificaciones

  if (!("Notification" in window)) {

      alert('tu navegador no soporta notificaciones');

  }else if(Notification.permission === "granted"){

      //Lanzar notificacion si ya está autoriazado el servicio

      notificacion = new Notification("Tienes una nueva notificacion a revisar")

  }else if(Notification.permission !== "denied"){

      Notification.requestPermission(function(){

          if(Notification.permission === "granted"){

             const notification = new Notification("Bienvenido, al servicio de notificaciones Dosivac")

          }

      })

  }

}



