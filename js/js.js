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
let precio = 0;


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
        
        
    }

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

agregar();

//funcion slectora para cuando entra en vacio
function selectorVacio(){
    if (desplazamiento <= 400 && tipoDeVacio == "alto vacio"){
        alert("Usted ha seleccionado una bomba de vacio de baño por aceite");
        linea = "DVRII"; modelo = "4A"; precio = 380;
    }else if (desplazamiento >= 400 && tipoDeVacio == "residual"){
        alert("Usted ha seleccionado una bomba de vacio de anillo liquido o sello por agua");
        linea = "DSHC"; modelo = "400"; precio = 990;
    }else {
        alert("su busqueda no encuadra en ningún material que podamos ofrecer")
    }
    capturar()
}

//funcion selectora para cuando entra en dosificacion
function selectorDosificador(){
    if (contraPresion <= 10 && caudal >=16 && caudal <=30 && tipoDeAccionamiento == "electrica") {
        alert("Usted ha seleccionado una bomba de la linea DDI 30 o superior");
        linea = "DDI"; modelo = "30"; precio = 1250;
    }else if (contraPresion <= 10 && caudal >=30 && caudal <=60 && tipoDeAccionamiento == "electrica") {
            alert("Usted ha seleccionado una bomba de la linea DDI 60 o superior");
            linea = "DDI"; modelo = "60"; precio = 1250;
    }else if (contraPresion <= 10 && caudal >=60 && caudal <=80 && tipoDeAccionamiento == "electrica") {
            alert("Usted ha seleccionado una bomba de la linea DDI 80 o superior");
            linea = "DDI"; modelo = "80"; precio = 1250;
    }else if (contraPresion <= 10 && caudal >=80 && caudal <=150 && tipoDeAccionamiento == "electrica") {
            alert("Usted ha seleccionado una bomba de la linea DDI 150 o superior");
            linea = "DDI"; modelo = "150"; precio = 1250;
    }else if (contraPresion <= 10 && caudal >=150 && caudal <=300 && tipoDeAccionamiento == "electrica") {
            alert("Usted ha seleccionado una bomba de la linea DDI 300 o superior");
            linea = "DDI"; modelo = "300"; precio = 1250;
    }else if (contraPresion <= 10 && caudal >=300 && caudal <=600 && tipoDeAccionamiento == "electrica") {
            alert("Usted ha seleccionado una bomba de la linea DDI 600 o superior");
            linea = "DDI"; modelo = "600"; precio = 1250;
    }else if (contraPresion <= 10 && caudal >=600 && caudal <=1200 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba de la linea DDI DUPLEX");
        linea = "DDI"; modelo = "DUPLEX"; precio = 1950;          
    }else if (contraPresion <= 10 && caudal >=0.15 && caudal <=1.5 && tipoDeAccionamiento == "electrica") {
        alert("Usted ha seIleccionado una bomba linea Milenio 1510");
        linea = "Milenio"; modelo = "01510"; precio = 320;
    }else if (contraPresion <= 10 && caudal >=0.30 && caudal <=3 && tipoDeAccionamiento == "electrica") {
        alert("Usted ha seIleccionado una bomba linea Milenio 3010");
        linea = "Milenio"; modelo = "Milenio 03010"; precio = 320;
    }else if (contraPresion <= 10 && caudal >=0.50 && caudal <=5 && tipoDeAccionamiento == "electrica") {
        alert("Usted ha seIleccionado una bomba linea Milenio 5010");
        linea = "Milenio"; modelo = "Milenio 05010"; precio = 320;
    }else if (contraPresion > 10 && contraPresion <=50 && caudal <=0.30 && tipoDeAccionamiento == "electrica") {
        alert("Usted ha seleccionado una bomba linea DECI de alta presión")
        linea = "DECI"; modelo = "7/25"; precio = 2200;
    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=0.66 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba linea DECI de alta presión");
        linea = "DECI"; modelo = "10/25"; precio = 2200;
    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=1.85 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba linea DECI de alta presión");
        linea = "DECI"; modelo = "10/70"; precio = 2300;
    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=3 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba linea DECI de alta presión");
        linea = "DECI"; modelo = "15/70"; precio = 2400;
    }else if (contraPresion > 10 && contraPresion <=200 && caudal >=10 && caudal <=25 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba DE de alta presion ");
        linea = "DE"; modelo = "20/70"; precio = 2900;
    }else if (contraPresion > 200 && contraPresion <=800 && caudal <=25 && tipoDeAccionamiento == "electrica"){
        alert("Usted ha seleccionado una bomba DEAP de alta presion ");
        linea = "DEAP"; modelo = "100/800"; precio = 3500;
    }else{
        alert("No tenemos producto que se encuentre dentro de los parametros seleccionados")
    }
    capturar()
} 