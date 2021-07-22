let linea = "";
let modelo = "";
let precio = 0;
let img = "";
tipoDeProceso = "";
let desplazamiento = 0;
let caudal = 0;
let contrapresion = 0;
let arrayCarrito = [];
let arrayDeConsultas = [];
let arraySelection = [];
let resultadoBusqueda = [];
let mostrarCarrito = document.querySelector('#mostrarCarrito');
const GuardarLSvalues = () => {
  localStorage.setItem("selection", JSON.stringify(arrayDeConsultas));
};
const GuardarLSmatch = () => {
  localStorage.setItem("resultado", JSON.stringify(arraySelection));
};
let buscarProducto = "";

let inputValues = {
  proceso: "",
  desplazamiento: Number(),
  caudal: Number(),
  contrapresion: Number(),
};

const handleForm = (e) => {
  //eventos del DOM
  e.preventDefault();

  if (
    inputValues.proceso.trim() === "" ||
    inputValues.desplazamiento.trim() === "" ||
    inputValues.caudal.trim() === "" ||
    inputValues.contrapresion.trim() === ""
  ) {
    console.log("Todos los campos deben ser completados");
    return; //recuerden que este return lo ponemos para evitar que la funcion siga ejecutandose
  }

  arrayDeConsultas.push(inputValues);
  console.log("Despues de pushear los datos: ", arrayDeConsultas);

  capturar();
  GuardarLSvalues();
  GuardarLSmatch();
  PintarDom();
};



const handleInput = (e) => {
  //Aqui viene lo "complejo", necesitamos hacer este formulario dinamico, como hacemos eso? capturando el e.target.name del elemento y buscar que coincida con alguna propiedad del objeto inputValues, es por eso que es importante que los nombres de las propiedades del objeto sean las mismas que la de los names en el html. Por ejemplo e.target.name del segundo input sera apellido, este entrara en el objeto y buscara una propiedad que sea igual, si la consigue le agregara el e.target.value que le pasamos

  console.log("Soy el input donde estas escribiendo: ", e.target);
  console.log("Soy el atributo value de ese input: ", e.target.value);
  console.log("Soy el atributo name de ese input: ", e.target.name);

  inputValues = {
    ...inputValues, //esos ... se llama spread operator, googlear! Va a devolver una copia del objeto, dejo comentado como se veria el objeto si no tuviera eso
    [e.target.name]: e.target.value,
  };

  // inputValues = {
  //   [e.target.name]: e.target.value
  // }
  console.log(inputValues);
  tipoDeProceso = inputValues.proceso;
  console.log(tipoDeProceso);
  desplazamiento = Number(inputValues.desplazamiento);
  caudal = Number(inputValues.caudal);
  contrapresion = Number(inputValues.contrapresion);

  switch (
    tipoDeProceso /* como la variable que determina el proceso a seguir, se declara dentro de la funcion. Tuve que pegar todo el switch dentro de la funcion. Me gustaría poder arreglar esto en futuras entregas */
  ) {
    case "residual":
      selectorVacioR();

      break;

    case "altovacio":
      selectorVacioA();

      break;

    case "laboratorio":
      selectorVacioLaboratorio();

      break;

    case "electrica":
      selectorDosificadorElectrico();

      break;

    case "neumatica":
      selectorDosificadorNeumatico();

      break;

    case "solar":
      selectorDosificadorSolar();

      break;

    default:
      document.innerHTML + `NO HAY RESULTADOS PARA SU BUSQUEDA`;
  }
};
//llamamos el formulario
const form = document.querySelector("form");

//Llamamos a los inputs
const inputs = document.querySelectorAll(".input");
console.log(inputs);

//lamamos al alert donde pintaremos nuestra busqueda
const alertDom = document.querySelector("#resultadoSelector");
console.log(alertDom);

//hacemos el evento submit del form que va a ejecutar la funcion sendForm
form.addEventListener("submit", handleForm);

//hacemos el evento para capturar los values del input, pero como los inputs lo llamamos con un querySelectorAll tenemos que hacer una iteracion primero
inputs.forEach((input) => input.addEventListener("input", handleInput));

function selectorVacioA() {
  if (desplazamiento <= 60) {
    linea = "DVRII";
    modelo = "1A";
    precio = 175;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DVRII</li><li>MODELO 1A hasta 60LTS</li><li>220v</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA TRABAJOS DE REFRIGERACION</li><li>HELADERAS HOGARENAS</li><li>AIRE ACONDICIONADO HOGARENO</li></ol></div>';
  } else if (desplazamiento <= 130) {
    linea = "DVRII";
    modelo = "2A";
    precio = 260;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DVRII</li><li>MODELO 2A hasta 120LTS</li><li>220v</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA TRABAJOS DE REFRIGERACION</li><li>HELADERAS HOGARENAS DE GRAN VOLUMEN</li><li>AIRE ACONDICIONADO HOGARENOS HASTA 5000</li></ol></div>';
  } else if (desplazamiento <= 170) {
    linea = "DVRII";
    modelo = "3A";
    precio = 260;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DVRII</li><li>MODELO 3A hasta 170LTS</li><li>220v</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA TRABAJOS DE REFRIGERACION PESADOS</li><li>CAMARAS FRIGORIFICAS</li><li>AIRE ACONDICIONADO PISO TECHO</li><li>EQUIPOS CENTRALIZADOS</li></ol></div>';
  } else if (desplazamiento <= 280) {
    linea = "DVRII";
    modelo = "4A";
    precio = 380;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DVRII</li><li>MODELO 4A hasta 272LTS</li><li>220v</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA TRABAJOS DE REFRIGERACION PESADOS</li><li>APTA PARA TAREAS DE MANTENIMIENTO EN INDUSTRIA</li><li>CAMARAS FRIGORIFICAS</li><li>AIRE ACONDICIONADO PISO TECHO</li><li>EQUIPOS CENTRALIZADOS</li></ol></div>';
  } else {
    linea = null;
  }
  console.log("llegue hasta selector de alto vacio");
  img =
    '<img src="../img/bombas/DVR2-removebg-preview.png" width="60%" alt="">';
  
}

function selectorVacioR() {
  if (desplazamiento <= 400) {
    linea = "DSHC";
    modelo = "400";
    precio = 693;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DSHC</li><li>MODELO 400 hasta 400LTS/M</li><li>TENSION 380v</li><li>MOTOR DE 1HP</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA PROCESOS INDUSTRIALES</li><li>PEQUENO PULMON DE VACIO</li><li>ESTRUSORAS DE 1 BOCA</li><li>ELIMINAR PEQUENAS CANTIDAD DE VAPORES</li></ol></div>';
  } else if (desplazamiento <= 800) {
    linea = "DSHC";
    modelo = "800";
    precio = 990;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DSHC</li><li>MODELO 800 hasta 800LTS/M</li><li>TENSION 380v</li><li>MOTOR DE 2HP</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA PROCESOS INDUSTRIALES</li><li>PEQUENO PULMON DE VACIO</li><li>ESTRUSORAS DE HASTA 2 BOCAS</li><li>ELIMINAR PEQUENAS CANTIDAD DE VAPORES</li></ol></div>';
  } else if (desplazamiento <= 1250) {
    linea = "DSHC";
    modelo = "1250";
    precio = 1420;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DSHC</li><li>MODELO 1250 hasta 1250LTS/H</li><li>TENSION 380v</li><li>MOTOR DE 4HP</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA PROCESOS INDUSTRIALES</li><li>PULMON DE VACIO MEDIANO</li><li>ESTRUSORAS DE 4 BOCAS</li><li>ELIMINAR MEDIANAS CANTIDAD DE VAPORES</li></ol></div>';
  } else if (desplazamiento <= 1810) {
    linea = "DSHC";
    modelo = "1810";
    precio = 990;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DSHC</li><li>MODELO 1810 hasta 1810LTS/H</li><li>TENSION 380v</li><li>MOTOR DE 5.5HP</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA PROCESOS INDUSTRIALES</li><li>PEQUENO PULMON DE VACIO</li><li>ESTRUSORAS DE UNA BOCA</li><li>ELIMINAR PEQUENAS CANTIDAD DE VAPORES</li></ol></div>';
  } else if (desplazamiento <= 2500) {
    linea = "DSHC";
    modelo = "2500";
    precio = 2574;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DSHC</li><li>MODELO 2500 hasta 2500LTS/H</li><li>TENSION 380v</li><li>MOTOR DE 5.5HP</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA PROCESOS INDUSTRIALES</li><li>GRAN PULMON DE VACIO</li><li>ESTRUSORAS DE HASTA 20 BOCAS</li><li>ELIMINAR PEQUENAS CANTIDAD DE VAPORES</li></ol></div>';
  } else if (desplazamiento <= 3000) {
    linea = "DSHC";
    modelo = "3000";
    precio = 3049;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DSHC</li><li>MODELO 3000 hasta 3000LTS/H</li><li>TENSION 380v</li><li>MOTOR DE 7.5HP</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA PROCESOS INDUSTRIALES DE GRAN TAMAÑO</li><li>GRAN PULMON DE VACIO</li><li>ESTRUSORAS DE HASTA 30 BOCAS</li><li>ELIMINAR GRANDES CANTIDADES DE VAPORES</li></ol></div>';
  } else if (desplazamiento <= 4500) {
    linea = "DSHC";
    modelo = "4500";
    precio = 4139;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DSHC</li><li>MODELO 4500 de hasta 4500LTS/H</li><li>TENSION 380v</li><li>MOTOR DE 10HP</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA PROCESOS INDUSTRIALES DE GRAN TAMAÑO</li><li>GRAN PULMON DE VACIO</li><li>ESTRUSORAS DE HASTA 45 BOCAS</li><li>ELIMINAR INMENSAS CANTIDADES DE VAPORES DE UN PROCESO INDUSTRIAL</li></ol></div>';
  } else if (desplazamiento <= 6300) {
    linea = "DSHC";
    modelo = "6300";
    precio = 6765;
    caracteristicas = '<div><h4>CARACTERISTICAS</h4><ol><li>LINEA DSHC</li><li>MODELO 6300 hasta 6300LTS/H</li><li>TENSION 380v</li><li>MOTOR DE 15HP</li></ol><h4>DESEMPENO</h4><ol><li>APTA PARA PROCESOS INDUSTRIALES DE GRAN PORTE</li><li>GRAN PULMON DE VACIO</li><li>ESTRUSORAS DE HASTA 63 BOCAS</li><li>ELIMINAR INMENSAS CANTIDADES DE VAPORES DE UN PROCESO INDUSTRIAL</li></ol></div>';
  } else {
    linea = null;
  }
  console.log("llegue hasta selector de residual");
  img =
    '<img src="../img/bombas/DSHC BRIDA-removebg-preview.png" width="60%" alt="">';
}

function selectorVacioLaboratorio() {
  if (desplazamiento >= 100 && desplazamiento <= 150) {
    linea = "DVL";
    modelo = "DVL150";
    precio = 325;
  } else if (desplazamiento >= 1 && desplazamiento <= 100) {
    linea = "DVL";
    modelo = "DVL150";
    precio = 325;
  } else {
    linea = null;
  }
  console.log("llegue hasta selector de alto vacio para laboratorio");
}

function selectorDosificadorElectrico() {
  if (contrapresion <= 10 && caudal >= 16 && caudal <= 30) {
    linea = "DDI";
    modelo = "30";
    precio = 1250;
  } else if (contrapresion <= 10 && caudal >= 30 && caudal <= 60) {
    linea = "DDI";
    modelo = "60";
    precio = 1250;
  } else if (contrapresion <= 10 && caudal >= 60 && caudal <= 80) {
    linea = "DDI";
    modelo = "80";
    precio = 1250;
  } else if (contrapresion <= 10 && caudal >= 80 && caudal <= 150) {
    linea = "DDI";
    modelo = "150";
    precio = 1250;
  } else if (contrapresion <= 10 && caudal >= 150 && caudal <= 300) {
    linea = "DDI";
    modelo = "300";
    precio = 1250;
  } else if (contrapresion <= 10 && caudal >= 300 && caudal <= 600) {
    linea = "DDI";
    modelo = "600";
    precio = 1250;
  } else if (contrapresion <= 10 && caudal >= 600 && caudal <= 1200) {
    linea = "DDI";
    modelo = "DUPLEX";
    precio = 1950;
  } else if (contrapresion <= 10 && caudal >= 0.15 && caudal <= 1.5) {
    linea = "Milenio";
    modelo = "01510";
    precio = 320;
  } else if (contrapresion <= 10 && caudal >= 0.3 && caudal <= 3) {
    linea = "Milenio";
    modelo = "Milenio 03010";
    precio = 320;
  } else if (contrapresion <= 10 && caudal >= 0.5 && caudal <= 5) {
    linea = "Milenio";
    modelo = "Milenio 05010";
    precio = 320;
  } else if (contrapresion > 10 && contrapresion <= 50 && caudal <= 0.3) {
    linea = "DECI";
    modelo = "7/25";
    precio = 2200;
  } else if (contrapresion > 10 && contrapresion <= 200 && caudal <= 0.66) {
    linea = "DECI";
    modelo = "10/25";
    precio = 2200;
  } else if (contrapresion > 10 && contrapresion <= 200 && caudal <= 1.85) {
    linea = "DECI";
    modelo = "10/70";
    precio = 2300;
  } else if (contrapresion > 10 && contrapresion <= 200 && caudal <= 3) {
    linea = "DECI";
    modelo = "15/70";
    precio = 2400;
  } else if (
    contrapresion > 10 &&
    contrapresion <= 200 &&
    caudal >= 10 &&
    caudal <= 25
  ) {
    linea = "DE";
    modelo = "20/70";
    precio = 2900;
  } else if (contrapresion > 200 && contrapresion <= 800 && caudal <= 25) {
    linea = "DEAP";
    modelo = "100/800";
    precio = 3500;
  } else {
    linea = null;
  }
  console.log("llegue hasta selector de bombas electricas");
}

function selectorDosificadorNeumatico() {
  console.log("llegue hasta selector de bombas neumaticas");
}

function selectorDosificadorSolar() {
  console.log("llegue hasta selector de bombas solares");
}
