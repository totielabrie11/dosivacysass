$.ajax({
  method: "GET",
  url: "../JSON/notify.json",
}).done(function(notify) {
  
    renderNotifyList(notify)
    nuevoEventToLCS(notify);
    notifyDetector(notify);
  
  }).always(function() {
    // Por ejemplo removemos la imagen "cargando..."
  }).fail(function() {
    // Manejar errores
  })


//////////////////SETTER DE BOTONES PARA LAS NOTIFY/////////////////////////
//Elimina todo


const btnCampanita = document.getElementById("notifyIcon");

  btnCampanita.addEventListener("click", function(){

    let $boxNotifys = document.getElementById('notifyBox');
    
    $boxNotifys.classList.toggle('d-none')
   
  });


let arrayNotiRenderBox = [];

function nuevoEventToLCS(notify){

  const guardarLCS = (notify) => {
    localStorage.setItem(
      "notify",
      JSON.stringify([...notify])
    );
  };
  //guardarLCS(notify)  //=> borra todas las notifys
  
  
  notifyLCS = JSON.parse(localStorage.getItem("notify"));
  
 
  if (notifyLCS === null) {
      notifyLCS = []
    
      console.log('se reseteo el LCS')
      
    }
  else {
    console.log('desarrollar la logica para el usuario que tiene antecedente en LCS')
    //notifyDetector(notify);
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
  let arrayNotiRenderBox =  notificationDBS.filter((el)=> !indexArr1.includes(el.titulo))
  console.log("notificaciones no vistas por el US", arrayNotiRenderBox);

  notifyNoVistas = localStorage.setItem('notifyNoVistas', JSON.stringify(arrayNotiRenderBox));

 
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
    renderNotifyCuantity(arrayNotiRenderBox)
    
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
  

};

function renderNotifyListControl(arrayNotiRenderBox) {

  
  console.log('las notify que están entrando al render box',arrayNotiRenderBox);

  const clase = arrayNotiRenderBox.map((x)=> x.clase)
  
      $("#notyListControl").html('');
      arrayNotiRenderBox.forEach((elemento)=> {
        const { titulo, tema, descripcion, img, id, fechaEvento, fechaCreacion, clase } =
        elemento;
    
        $("#notyListControl").append(
    
        `
        <div class="tucked-corners-top ">
          <div id="acceder" class="tucked-corners-bottom ${clase}">
            <h4>${titulo}</h4>
            <div class="container d-flex">
              <div class="pinchito" style="width: 50%" height: "50%">
                <img src="../img/pinche-removebg-preview.png" width="30%">
              </div>
              <div style="width: 50%" height: "50%" class="me-2">
              <img src="${img}" width="70%" alt="" class="rounded">
              </div>
              <div class="text-md-center text-wrap">
                <span >${tema}</span>
              </div>
              <div class="controlsNotify d-flex">
                <button class="btn btn-primary w-50 ms-1 me-2 my-4" id="${id}" onclick="eliminarCuantity('${id}')"><i class="fas fa-eye"></i></button>
                <button class="btn btn-danger w-50 my-4" id="btnEliminarCheck" onclick="eliminarCheckList('${id}')"><i class="fas fa-trash"></i></button>
                <input type="checkbox" id="checkbox" class="form-check-input ms-4 my-auto p-2" onclick="ingresarCheckList('${id}')">
              </div>
            </div>
          </div>
        </div>
        
          `
        )
      });

  
}
//Eliminar los cuantity

notifyMapedNot = [];

const eliminarCuantity = (id) => {

  
  notifyNoVistas = JSON.parse(localStorage.getItem("notifyNoVistas"))
  console.log("🚀 ~ file: notify.js ~ line 189 ~ eliminarCuantity ~ notifyNoVistas", notifyNoVistas)
  
  let notifyCuantityFilter = notifyNoVistas.filter(not => not.id !== id);
  let notifyMapActive2 =  notifyNoVistas.filter(not => not.id == id);
  //agregar la class cambio vista box
  let nuevaClase = 'active2';
  //let id = 2;

  
  notifyMapActive2.map(function(dato){
    if(dato.id == id){
    dato.clase = nuevaClase;
    }
  
    return notifyMapActive2;
  });


  const notifys = notifyMapActive2.find(not => not.id === id); //Buscar si existe en el not
  const isInNot = notifyMapedNot.find(prod => prod.id === id);
  
    if (isInNot) {
      notifyMapedNot[notifyMapedNot.findIndex(not => not.id === id)].cantidad += 1;
      notifyMapedNot = [...notifyMapedNot];
      return;
    }
    notifys.cantidad = 1;
    notifyMapedNot.push(notifys);

  console.log('cantidad de notify mapeadas',notifyMapedNot);

  const indexArr1 = notifyNoVistas.map((el)=> el.id)
  const notifyNoMapeadas = notifyNoVistas.filter((el)=> indexArr1.includes(el.id))
  console.log("🚀 ~ file: notify.js ~ line 263 ~ eliminarCuantity ~ notifyNoMapeadas", notifyNoMapeadas)
  
  const NotiMapNoMapConcat = notifyNoMapeadas.concat(notifyMapedNot)
  console.log("🚀 ~ file: notify.js ~ line 266 ~ eliminarCuantity ~ NotiMapNoMapConcat", NotiMapNoMapConcat)
  
  NotiMapNoMapConcat.splice(-1,1);
  renderNotifyListControl(NotiMapNoMapConcat);
  
  localStorage.setItem("notifyNoVistas", JSON.stringify(notifyCuantityFilter));

    renderNotifyCuantity();

}

//Eliminar los ckecklist
const eliminarCheckList = (id) => {
  notifyNoVistas = JSON.parse(localStorage.getItem("notifyNoVistas"))
  console.log("🚀 ~ file: notify.js ~ line 196 ~ eliminarCheckList ~ notifyNoVistas", notifyNoVistas)
  console.log(id);


  
}
//Ingresar los ckecklist del BoxNotify
let arrayCkeck = []
const ingresarCheckList = (id) =>{


  const notifyNoVistas = JSON.parse(localStorage.getItem("notifyNoVistas"))
   if (notifyNoVistas == null){notifyNoVistas = []}
  console.log(notifyNoVistas)
  console.log(id)
    
  const notifys = notifyNoVistas.find(not => not.id === id); //Buscar si existe en el not
  const isInNot = arrayCkeck.find(prod => prod.id === id);
  
    if (isInNot) {
      arrayCkeck[arrayCkeck.findIndex(not => not.id === id)].cantidad += 1;
      arrayCkeck = [...arrayCkeck];
      return;
    }
    notifys.cantidad = 1;
    arrayCkeck.push(notifys);

  console.log('cantidad de notify listadas',arrayCkeck);
  

}



function renderNotifyCuantity(arrayNotiRenderBox) {
  
  if(notifyMapedNot != ""){
    console.log('cantidad de notify que fueron mapeadas y debo guardar en LCS: ', notifyMapedNot)
  }

  if (arrayNotiRenderBox == null) {arrayNotiRenderBox = notifyCuantity
    notifyCuantityUS = JSON.parse(localStorage.getItem("notifyNoVistas"))

    if (notifyCuantityUS.length == 0) {
    
      renderNoTengoNotification();
    
    }else{
      const notifyCuantityNumber = notifyCuantityUS.length
      $('.notifyCuantity').html(`<span id="notifyCuantity" class="text-center"> ${notifyCuantityNumber}</span>`)
    }

    return
  }


  notifyCuantity = [...arrayNotiRenderBox].length  

  if (notifyCuantity) {
    
    renderNotifyListControl(arrayNotiRenderBox); 
  }; 

  $('.notifyCuantity').html(`<span id="notifyCuantity" class="text-center"> ${notifyCuantity}</span>`)
  

}
  
  


function renderNotifyList(notify) {
  
  let fechaCreacion = notify.map((x)=> x.fechaCreacion)
  let fechaEventos = notify.map((x)=> x.fechaEvento)
  
  console.log(fechaCreacion);
  console.log(fechaEventos);

  notify.reverse();

  notify.forEach((elemento) => {
    const { titulo, tema, descripcion, img, id, fechaEvento, fechaCreacion } =
    elemento;
    
    
    $("#renderTodasLasNotify").append(
      `
      <div class="card">
      <div class="card-image">
          <img src="${img}">
      </div>
      <div class="card-body">
          <span class="date"></span>
          <h4 class="text-center">${titulo}</h4>
          <h5>${tema}</h5>
          <p>
           ${descripcion}
          </p>
          
      </div>
      <div class="card-footer">
          <div class="info">
              <div class="value">PUBLICADO</div>
              <div class="type">${fechaCreacion}</div>
          </div>
          <div class="info">
              <div class="value">FECHA</div>
              <div class="type">${fechaEvento}</div>
          </div>
          <div class="info">
              <div class="value">ACTIVO</div>
              <div class="type"></div>
          </div>
      </div>
    </div>  
    </div>
      `
      )
    })
};
  
