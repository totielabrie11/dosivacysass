//funcion constructora -> para caputrar los datos de la seleccion
function capturar() {
  function Selection(nombre, linea, modelo, precio, foto, caracteristicas) {
    this.nombre = nombre.toUpperCase();
    this.linea = linea;
    this.modelo = modelo;
    precio = precio;
    this.precio = precio;
    this.foto = foto;
    this.caracteristicas = caracteristicas;
  }
  let nombreCapturar = tipoDeProceso;
  let lineaCapturar = linea;
  let modeloCapturar = modelo;
  let precioCapturar = precio;
  let fotoCapturar = foto;
  let caracteristicasCapturar = caracteristicas;

  resultado = new Selection(
    nombreCapturar,
    lineaCapturar,
    modeloCapturar,
    precioCapturar,
    fotoCapturar,
    caracteristicasCapturar
  );

  arraySelection = [];
  arraySelection.push(resultado);
}

/* const EliminarLS = (consulta) => {
  console.log(consulta);
  let indexArray;
    arraySelection.forEach((elemento, index) => {
        if(elemento.nombre === nombre){
            indexArray = index;   
        }
    });
    
    arraySelection.splice(indexArray,1);
    GuardarLS();
}; */

const PintarDom = () => {
  resultadoSelector.innerHTML = "";

  arraySelection = JSON.parse(localStorage.getItem("resultado"));
  console.log(arrayDeConsultas); // no importa el null por que entra igual con el if;

  if (arrayDeConsultas === null) {
    arraySelection = [];
  } else {
    if (linea === null) {
      $("table")
        .fadeIn(2000)
        .fadeToggle(5000)
        .html(
          '<div class="alert alert-danger float-left" role="alert">SU BUSQUEDA NO HA ENCONTRADO RESULTADO</div>'
        );
      return;
    } else
      arraySelection.forEach((element) => {
        $("#resultadoSelector")
          .slideToggle()
          .slideDown(2500)
          .html(
            `<ul><li>'${resultado.nombre}'</li><li>'${resultado.linea}'</li><li>'${resultado.modelo}'</li><li><i class="material-icons">attach_money</i>'${resultado.precio}'</li><li></li><i class="material-icons">favorite</i></ul><hr><section class="d-flex justify-content-between" style="height: 20rem;">'${resultado.caracteristicas}'<div style="border-left:1px solid rgba(105, 103, 103, 0.322)"></div><div><h4 class="text-center">DISEÑO</h4><div class="d-flex justify-content-center">'${resultado.foto}'</div></div></section></div>`
          );
      });
  }
};
//Eventos del DOM

//En este momento puedo cargar todas mis funciones en orden, queda mucho mas prolijo, se ve el orden de ejecución. a la espera del submit;

/* form.addEventListener("submit", (e) => {
  e.preventDefault();

  GuardarLS();
}); */

///////////////////////////////////////////////////////////////////////
//funcion de escuchar y disparar eventos DOM antes de jQuery
/////////////////////////////////////////////////////////////////////
/* document.addEventListener("DOMContentLoaded", PintarDom);

resultadoSelector.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.target.innerHTML);

}); */

////////////////////////////////////////////////////////////////////
//funcion de escuchar y disparar eventos DOM con jQuery
///////////////////////////////////////////////////////////////////
$(document).on("DOMContentLoaded", PintarDom);
