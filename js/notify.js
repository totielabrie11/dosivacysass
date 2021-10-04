//Llamado Ajax a mis notify JSON
$.ajax({
  method: "GET",
  url: "../json/notify.json",
})
.done((notify) => {
    nuevoEventToLCS(notify);
    //notificacionesJSON(notify);
    notifyDetector(notify);
    
    
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
  console.log("🚀 ~ file: notify.js ~ line 55 ~ notifyDetector ~ notificationLCS", notificationLCS)

  const notificationDBS = notify
  console.log("🚀 ~ file: notify.js ~ line 58 ~ notifyDetector ~ notificationDBS", notificationDBS)
  
  let result = notificationDBS.every(function (element) {
    return notificationLCS.includes(element);
  });

  let [...laSumaDeNotify] = notifyLCS.concat(notify);
  console.log("🚀 ~ file: notify.js ~ line 64 ~ result ~ result", result)

  //const notificacionesNoVistas = notificationDBS.filter((element)=> !notificationLCS.includes(element))

  let notificacionesNoVistas = notificationDBS.filter(function(element) {
    return !notificationLCS.includes(element);
  });

  console.log(notificacionesNoVistas)

  
  
    if(arrayDeNotificaciones === notifyLCS){
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



