let nombre = document.querySelector('#nombreUS').value;
console.log(nombre)
let tipoDeProceso = document.querySelector('#tipoDeProcesos').value; 
console.log(tipoDeProceso)
let desplazamiento = document.querySelector('#desplazamiento').value;
console.log(desplazamiento)
let caudal = document.querySelector('#caudal').value;
console.log(caudal)
let contraPresion = document.querySelector('#contrapresion').value; 
console.log(contraPresion)
let linea = "";
let modelo = "";
let precio = 0;
const listaSelector = document.getElementById('listaSelector') //👌
console.log();
const formularioUser = document.querySelector('#formularioUser')//
console.log();


const entrarProceso = () => {

    if (tipoDeProceso === 'altovacio' || 'residual'){

        selectorVacio();

    }else if (tipoDeProceso === 'laboratorio'){

        selectorVacioLaboratorio();

    }else {

        selectorDosificadorElectrico();

    }
}

entrarProceso();

function selectorVacio(){
    if (desplazamiento <= 400 && tipoDeProceso == "altovacio"){
    
        linea = "DVRII"; modelo = "4A"; precio = 380;

    }else if (desplazamiento >= 400 && tipoDeVacio == "residual"){
       
        linea = "DSHC"; modelo = "400"; precio = 990;
    }else {
        listaSelector.innerHTML += `SU BUSQUEDA NO ARROJA NINGUN RESULTADO`;
    }
}

function selectorVacioLaboratorio(){
    if (desplazamiento >= 100 && desplazamiento <= 150){
    
        linea = "DVL"; modelo = "DVL150"; precio = 325;

    }else if (desplazamiento >= 1 && desplazamiento <= 100){
       
        linea = "DVL"; modelo = "DVL150"; precio = 325;
    }else {
        document.innerHTML+= `SU BUSQUEDA NO ARROJA NINGUN RESULTADO`;
    }
}

//funcion selectora para cuando entra en dosificacion
function selectorDosificadorElectrico(){
    if (contraPresion <= 10 && caudal >=16 && caudal <=30 && tipoDeAccionamiento == "electrica") {
        
        linea = "DDI"; modelo = "30"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=30 && caudal <=60 && tipoDeAccionamiento == "electrica") {
            
            linea = "DDI"; modelo = "60"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=60 && caudal <=80 && tipoDeAccionamiento == "electrica") {
           
            linea = "DDI"; modelo = "80"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=80 && caudal <=150 && tipoDeAccionamiento == "electrica") {
            
            linea = "DDI"; modelo = "150"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=150 && caudal <=300 && tipoDeAccionamiento == "electrica") {
           
            linea = "DDI"; modelo = "300"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=300 && caudal <=600 && tipoDeAccionamiento == "electrica") {
      
            linea = "DDI"; modelo = "600"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=600 && caudal <=1200 && tipoDeAccionamiento == "electrica"){
        
        linea = "DDI"; modelo = "DUPLEX"; precio = 1950;  

    }else if (contraPresion <= 10 && caudal >=0.15 && caudal <=1.5 && tipoDeAccionamiento == "electrica") {
        
        linea = "Milenio"; modelo = "01510"; precio = 320;

    }else if (contraPresion <= 10 && caudal >=0.30 && caudal <=3 && tipoDeAccionamiento == "electrica") {
    
        linea = "Milenio"; modelo = "Milenio 03010"; precio = 320;

    }else if (contraPresion <= 10 && caudal >=0.50 && caudal <=5 && tipoDeAccionamiento == "electrica") {
 
        linea = "Milenio"; modelo = "Milenio 05010"; precio = 320;

    }else if (contraPresion > 10 && contraPresion <=50 && caudal <=0.30 && tipoDeAccionamiento == "electrica") {

        linea = "DECI"; modelo = "7/25"; precio = 2200;

    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=0.66 && tipoDeAccionamiento == "electrica"){
        
        linea = "DECI"; modelo = "10/25"; precio = 2200;

    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=1.85 && tipoDeAccionamiento == "electrica"){
        
        linea = "DECI"; modelo = "10/70"; precio = 2300;

    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=3 && tipoDeAccionamiento == "electrica"){
        
        linea = "DECI"; modelo = "15/70"; precio = 2400;

    }else if (contraPresion > 10 && contraPresion <=200 && caudal >=10 && caudal <=25 && tipoDeAccionamiento == "electrica"){
       
        linea = "DE"; modelo = "20/70"; precio = 2900;
    }else if (contraPresion > 200 && contraPresion <=800 && caudal <=25 && tipoDeAccionamiento == "electrica"){
    
        linea = "DEAP"; modelo = "100/800"; precio = 3500;
    }else{
        document.innerHTML+= `SU BUSQUEDA NO ARROJA NINGUN RESULTADO`;
    }
}
