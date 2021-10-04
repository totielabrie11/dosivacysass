//Llamado Ajax a mis notify JSON
$.ajax({
  method: "GET",
  url: "../json/notify.json",
}).done((notify) => {
    
    nuevoEventToLCS(notify);
    notificacionesJSON(notify);
    notifyDetector(notify);
    
}).fail((error) => {
    console.log("carga de notify no fue exitosa"); //reemplazar por un sweet modal
}).always(() => {
    console.log("carga de datos notify.JSON terminada");
});


const notificacionesJSON = (notify) => {
  localStorage.setItem(
    "notify",
    JSON.stringify([...notify])
  );
};

let arrayDeNotificaciones = [];

function nuevoEventToLCS(){

  notifyLCS = JSON.parse(localStorage.getItem("notify"));
  
 
  if (notifyLCS === null) {
      notifyLCS = []
    
      console.log('se reseteo el LCS')
      
    }
  else {
    console.log('desarrollar la logica para el usuario que tiene antecedente en LCS')

  }
  
} 
///////////////////////////////////////////////////////////////////////////////////////////////
////////////funcion crear la logica para enterarme de nuevas notificaciones y actualizar///////

function notifyDetector(notify){

  const notificationLCS = notifyLCS
  console.log("cantidad de notifications en el localStorage", notificationLCS)

  const notificationDBS = notify
  console.log("cantidad de notifications en el dataBase", notificationDBS)

  /* let [...laSumaDeNotify] = notifyLCS.concat(notify);
  console.log("concatenación de arrays que no fue necesaria para la solucion", laSumaDeNotify) */
  

  const indexArr1 = notificationLCS.map((el)=> el.id)
  const arrayDeNotificaciones = notificationDBS.filter((el)=> !indexArr1.includes(el.id))
  console.log("notificaciones no vistas por el US", arrayDeNotificaciones)

 
    
  
  
    if(notificationLCS === notificationDBS){
      console.log('no tengo nuevas notificaciones')
    }else{
      
      console.log('tengo nuevas notificaciones')
    
      //notify()
    
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



