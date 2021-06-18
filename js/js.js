let nombre = prompt("ingrese su nombre");
let tipoDeProceso = " ";
let mensaje = " ";
let desplazamiento = 0;
let tipoDeVacio = " ";
let caudal = 0;
let contraPresion = 0;
let tipoDeAccionamiento = " ";
let linea = " ";
let modelo = " ";

tipoDeProceso = prompt("Hola " + nombre + " Que tipo de proceso vas a realizar 1) Dosificación    2) Vacio  tambien puedes escribir 3) chau para salir") 
console.log(tipoDeProceso);

    switch (tipoDeProceso) {
        case "dosificacion":
            alert("Perfecto " + nombre + " bienvenido al selector inteligente para bombas de dosificación");
            tipoDeProceso = "dosificacion"
            console.log(tipoDeProceso)
            break;
        
        case "vacio":
            alert("Perfecto " + nombre + " bienvenido al selector inteligente para bombas de vacio");
            tipoDeProceso = "vacio"
            console.log(tipoDeProceso)
            break;

        case "chau":
            alert("Hasta luego " + nombre);
            break;
        
        default: 
            alert("Lo lamento " + nombre + " no has ingresado datos correctos, solo acepto dosificacion o vacio");
        
        
    }// Lamentablmente el While no me funciono. O ingresas los datos validos o te saca y tenes que recargar. */

    if (tipoDeProceso == "vacio"){
        tipoDeVacio = prompt("Que tipo de vacio necesita alcanzar   1) alto vacio   2) residual");
        desplazamiento = Number(prompt("que desplazamiento necesita obtener (ingrese numero mayor a 0 menor a 8000"));
        selectorVacio();
    
    }else if(tipoDeProceso == "dosificacion"){
        tipoDeAccionamiento = prompt("Que tipo de accionamiento es la bomba   1) electrica   2) neumatica ")
        caudal = Number(prompt("que caudal lts/h necesita en su dosificacion (ingrese numero mayor a 0 y menor a 1200"));
        contraPresion = Number(prompt("ingrese la contrapresion kg/cm2 que existe en el punto de inyeccion, mayor al 0 y menor a 800"));
        selectorDosificador();
    }


function selectorVacio(){
    if (desplazamiento <= 400 && tipoDeVacio == "alto vacio"){
        alert("Usted ha seleccionado una bomba de vacio de baño por aceite");
        linea = "DVRII"; modelo = "4A";
    }else if (desplazamiento >= 400 && tipoDeVacio == "residual"){
        alert("Usted ha seleccionado una bomba de vacio de anillo liquido o sello por agua");
        linea = "DSHC"; modelo = "400";
    }else {
        alert("su busqueda no encuadra en ningún material que podamos ofrecer")
    }
    capturar()
}

function selectorDosificador(){
    if (contraPresion <= 10 && caudal >=16 && caudal <=30 && tipoDeAccionamiento == "electrica") {
        alert("Usted ha seleccionado una bomba de la linea DDI 30 o superior");
        linea = "DDI"; modelo = "30";
    }else if (contraPresion <= 10 && caudal >=30 && caudal <=60 && tipoDeAccionamiento == "electrica") {
            alert("Usted ha seleccionado una bomba de la linea DDI 60 o superior");
            linea = "DDI"; modelo = "60";
    }else if (contraPresion <= 10 && caudal >=60 && caudal <=80 && tipoDeAccionamiento == "electrica") {
            alert("Usted ha seleccionado una bomba de la linea DDI 80 o superior");
            linea = "DDI"; modelo = "80";
    }else if (contraPresion <= 10 && caudal >=80 && caudal <=150 && tipoDeAccionamiento == "electrica") {
            alert("Usted ha seleccionado una bomba de la linea DDI 150 o superior");
            linea = "DDI"; modelo = "150";
    }else if (contraPresion <= 10 && caudal >=150 && caudal <=300 && tipoDeAccionamiento == "electrica") {
            alert("Usted ha seleccionado una bomba de la linea DDI 300 o superior");
            linea = "DDI"; modelo = "300"; 
    }else if (contraPresion <= 10 && caudal >=300 && caudal <=600 && tipoDeAccionamiento == "electrica") {
            alert("Usted ha seleccionado una bomba de la linea DDI 600 o superior");
            linea = "DDI"; modelo = "600"; 
    }else if (contraPresion <= 10 && caudal >=600 && caudal <=1200 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba de la linea DDI DUPLEX");
        linea = "DDI"; modelo = "DUPLEX";              
    }else if (contraPresion <= 10 && caudal >=0.15 && caudal <=1.5 && tipoDeAccionamiento == "electrica") {
        alert("Usted ha seIleccionado una bomba linea Milenio 1510");
        linea = "Milenio"; modelo = "01510";
    }else if (contraPresion <= 10 && caudal >=0.30 && caudal <=3 && tipoDeAccionamiento == "electrica") {
        alert("Usted ha seIleccionado una bomba linea Milenio 3010");
        linea = "Milenio"; modelo = "Milenio 03010";
    }else if (contraPresion <= 10 && caudal >=0.50 && caudal <=5 && tipoDeAccionamiento == "electrica") {
        alert("Usted ha seIleccionado una bomba linea Milenio 5010");
        linea = "Milenio"; modelo = "Milenio 05010";
    }else if (contraPresion > 10 && contraPresion <=50 && caudal <=0.30 && tipoDeAccionamiento == "electrica") {
        alert("Usted ha seleccionado una bomba linea DECI de alta presión")
        linea = "DECI"; modelo = "7/25";
    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=0.66 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba linea DECI de alta presión");
        linea = "DECI"; modelo = "10/25";
    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=1.85 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba linea DECI de alta presión");
        linea = "DECI"; modelo = "10/70";
    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=0.66 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba linea DECI de alta presión");
        linea = "DECI"; modelo = "15/70";
    }else if (contraPresion > 50 && contraPresion <=200 && caudal <=20 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba DE de alta presion ");
    }else if (contraPresion > 200 && contraPresion <=800 && caudal <=20 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba DEAP de alta presion ")
    }else{
        alert("No tenemos producto que se encuentre dentro de los parametros seleccionados")
    }
    capturar()
} 
agregar();
function capturar(){
    function Proceso(nombre, linea, modelo){
        this.nombre=nombre;
        this.linea=linea;
        this.modelo=modelo;
    }
    let nombreCapturar = tipoDeProceso;
    console.log(nombreCapturar)
    let lineaCapturar = linea;
    console.log(lineaCapturar)
    let modeloCapturar = modelo;
    console.log(modeloCapturar);
    
    contador = new Proceso(nombreCapturar, lineaCapturar, modeloCapturar);
    console.log(contador);  
    
    baseDeDatos = [];
    console.log(baseDeDatos);
}

function agregar(){
    baseDeDatos.push(contador);
    document.getElementById("tabla").innerHTML+= '<tbody><td>'+contador.nombre+'</td><td>'+contador.linea+'</td><td>'+contador.modelo+'</td></tbody>';
}

   