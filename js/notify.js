//Llamado Ajax a mis notify JSON
$.ajax({
  method: "GET",
  url: "../json/notify.json",
}).done((notify) => {
    
    renderNotifyList(notify)
    nuevoEventToLCS(notify);
    notifyDetector(notify);
    
}).fail((error) => {
    console.log("carga de notify no fue exitosa"); //reemplazar por un sweet modal
}).always(() => {
    console.log("carga de datos notify.JSON terminada");
});


let arrayDeNotificaciones = [];

function nuevoEventToLCS(notify){

  const guardarLCS = (notify) => {
    localStorage.setItem(
      "notify",
      JSON.stringify([...notify])
    );
  };

  const btnCampanita = document.getElementById("notifyIcon");
  btnCampanita.addEventListener("click", function(){

    guardarLCS(notify);
    location.reload();

  });
   
  
  
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
  

  const indexArr1 = notificationLCS.map((el)=> el.titulo)
  const arrayDeNotificaciones = notificationDBS.filter((el)=> !indexArr1.includes(el.titulo))
  console.log("notificaciones no vistas por el US", arrayDeNotificaciones)

 
  let arrOne = notificationDBS.map((titulo)=> titulo.titulo)
  let arrTwo = notificationLCS.map((titulo)=> titulo.titulo)

  let result = arrOne.every(function (element) {

    return arrTwo.includes(element);

  });

  console.log(result);
  
  
  if(result){
    console.log('no tengo nuevas notificaciones')
    renderNoTengoNotification()
  }else{
      
    console.log('tengo nuevas notificaciones')
    
    notifyWebNotification()
    renderNotifyCuantity(arrayDeNotificaciones)
    
  }

}
  

  

function notifyWebNotification(){
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

///////////////////////////////////RENDER///////////////////////////////////////
function renderNoTengoNotification() {
    
  $('.notifyCuantityContainer').html("")
  

}

function renderNotifyCuantity(arrayDeNotificaciones) {

  
  const notifyCuantity = [...arrayDeNotificaciones].length
  
  $('.notifyCuantity').html(`<h6 id="notifyCuantity" class="text-center"> ${notifyCuantity}</h6>`)
  
}

$("#pruebaporid").click( function(){

  console.log("acá pasa algo")

})

function renderNotifyList(notify) {
  
  notifyLista = notify
  notify.forEach((elemento) => {
    const { titulo, tema, descripcion, img, id } =
    elemento;
     
    
    $("#renderTodasLasNotify").append(
      `
      <div class="card col-3">
      <div class="card-image"></div>
      <div class="card-text">
        <span class="date">4 days ago</span>
        <h2>Post One</h2>
        <p>${titulo}</p>
      </div>
      <div class="btnNotifyVisto">
        <button class="btn btn-success" onclick="deleteNotify(notifyLista, '${titulo}')">VISTO</button>
      </div>
      <div class="card-stats">
        <div class="stat">
          <div class="value">4<sup>m</sup></div>
          <div class="type">read</div>
        </div>
        <div class="stat border">
          <div class="value">5123</div>
          <div class="type">views</div>
        </div>
        <div class="stat">
          <div class="value">32</div>
          <div class="type">comments</div>
        </div>
      </div>
    </div>
      `)
    })
}


let notify = [];

const deleteNotify = (not, titulo) => {
    //buscar producto en DB
    const product = not.find(prod => prod.titulo === titulo); //Buscar si existe en el cart
    console.log("🚀 ~ file: notify.js ~ line 199 ~ deleteNotify ~ product", product)
    
    const isInNot = notify.find(prod => prod.titulo === titulo);
    console.log("🚀 ~ file: notify.js ~ line 202 ~ deleteNotify ~ isInNot", isInNot)
  
    if (isInNot) {
      notify[notify.findIndex(prod => prod.titulo === titulo)].cantidad += 1;
      notify = [...notify];
      return;
    }
    product.cantidad = 1;
    notify.push(product);

    console.log('agregando producto al notify: ', notify )
    
    localStorage.setItem("notify", JSON.stringify(notify));

    const indexArr1 = notify.map((el)=> el.titulo)
    const arrayDeNotificaciones = not.filter((el)=> !indexArr1.includes(el.titulo))
    console.log("notificaciones no vistas por el US", arrayDeNotificaciones)

    renderNotifyCuantity(arrayDeNotificaciones)
    
};
  
