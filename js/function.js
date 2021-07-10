//funcion constructora -> para caputrar los datos de la seleccion
function capturar() {
  function Selection(nombre, linea, modelo, precio, img) {
    this.nombre = nombre.toUpperCase();
    this.linea = linea;
    this.modelo = modelo;
    precio = precio * 1.21;
    this.precio = precio;
    this.img = img;
  }
  let nombreCapturar = tipoDeProceso;
  let lineaCapturar = linea;
  let modeloCapturar = modelo;
  let precioCapturar = precio;
  let imgCapturar = img;

  contador = new Selection(
    nombreCapturar,
    lineaCapturar,
    modeloCapturar,
    precioCapturar,
    imgCapturar
  );

  arraySelection = [];
  arraySelection.push(contador);
  console.log(arraySelection);
}

const GuardarLS = () => {
  localStorage.setItem("selection", JSON.stringify(arraySelection));
};

const EliminarLS = (consulta) => {
  console.log(consulta);
  /* let indexArray;
    arraySelection.forEach((elemento, index) => {
        if(elemento.nombre === nombre){
            indexArray = index;   
        }
    });
    
    arraySelection.splice(indexArray,1);
    GuardarLS(); */
};

const PintarDom = () => {
  resultadoSelector.innerHTML = "";

  arraySelection = JSON.parse(localStorage.getItem("selection"));
  console.log(arraySelection); // no importa el null por que entra igual con el if;

  if (arraySelection === null) {
    arraySelection = [];
  } else {
    if (linea === null) {
      tabla.innerHTML += `<div class="alert alert-danger float-end" role="alert">SU BUSQUEDA NO HA ENCONTRADO RESULTADO</div>`;
      return;
    } else
      arraySelection.forEach((element) => {
        resultadoSelector.innerHTML += `<ul><li>'${contador.nombre}'</li><li>'${contador.linea}'</li><li>'${contador.modelo}'</li><li><span class="material-icons w-50">attach_money</span>'${contador.precio}'</li><li> <i class="material-icons" >delete</i></li><li><i class="material-icons">favorite</i></li></ul><hr><section class="d-flex justify-content-between" style="height: 20rem;"><div><h4>CARACTERISTICAS</h4><ol><li>hola</li><li>chau</li><li></li></ol></div><div style="border-left:1px solid rgba(105, 103, 103, 0.322)"></div><div><h4 class="text-center">DISEÑO</h4><div class="d-flex justify-content-center">'${contador.img}'</div></div></section></div>`;
      });
  }
};
//Eventos del DOM

//En este momento puedo cargar todas mis funciones en orden, queda mucho mas prolijo, se ve el orden de ejecución. a la espera del submit;

/* form.addEventListener("submit", (e) => {
  e.preventDefault();

  GuardarLS();
}); */

document.addEventListener("DOMContentLoaded", PintarDom);

resultadoSelector.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.target.innerHTML);

  if (e.target.innerHTML === "delete" || e.target.innerHTML === "favorite") {
    if (e.target.innerHTML === "delete") {
      EliminarLS(e.path[2].childNodes[4].innerHTML);
    }
  }
  if (e.target.innerHTML === "favorite") {
  }
});
