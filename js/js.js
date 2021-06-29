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
const listaSelector = document.getElementById('listaSelector') 
const formularioUser = document.querySelector('#formularioUser')


switch (tipoDeProceso) {
    
    case 'residual':
        
        selectorVacioR();
        
        break;

    case 'altovacio':
        
        selectorVacioA();
        
        break;
    
    case "laboratorio":
        
        selectorVacioLaboratorio();            

        break;

    case 'electrica':

        selectorDosificadorElectrico();
        
        break;

    case 'electrica':

        selectorDosificadorElectrico();
            
        break;

    case 'neumatica':

        selectorDosificadorNeumatico();
            
        break;

    case 'solar':

        selectorDosificadorSolar();
            
        break;
    
    default: 
        document.innerHTML + `NO HAY RESULTADOS PARA SU BUSQUEDA`;

}

console.log(tipoDeProceso);


function selectorVacioA(){
    if (desplazamiento <= 60){
        
        linea = "DVRII"; modelo = "1A"; precio = 175; 
    
    }else if (desplazamiento <= 130){
        
        linea = "DVRII"; modelo = "2A"; precio = 260;
        
    }else if (desplazamiento <= 170){
        
        linea = "DVRII"; modelo = "3A"; precio = 260;
        
    }else if (desplazamiento <= 280){
    
    linea = "DVRII"; modelo = "4A"; precio = 380;
        
    }else {
        linea = null;
    }
}

function selectorVacioR(){
    if (desplazamiento <= 400){
       
        linea = "DSHC"; modelo = "400"; precio = 693;

    }else if (desplazamiento <= 800){
       
        linea = "DSHC"; modelo = "800"; precio = 990;

    }else if (desplazamiento <= 1250){
       
        linea = "DSHC"; modelo = "1250"; precio = 1420;
      
    }else if (desplazamiento <= 1810){
       
        linea = "DSHC"; modelo = "1810"; precio = 990;    

    }else if (desplazamiento <= 2500){
       
        linea = "DSHC"; modelo = "2500"; precio = 2574;

    }else if (desplazamiento <= 3000){
       
            linea = "DSHC"; modelo = "3000"; precio = 3049;

    }else if (desplazamiento <= 4500){
       
        linea = "DSHC"; modelo = "4500"; precio = 4139;

    }else if (desplazamiento <= 6300){
       
        linea = "DSHC"; modelo = "6300"; precio = 6765;
    
    }else {
        linea = null;
    }
}


function selectorVacioLaboratorio(){
    if (desplazamiento >= 100 && desplazamiento <= 150){
    
        linea = "DVL"; modelo = "DVL150"; precio = 325;

    }else if (desplazamiento >= 1 && desplazamiento <= 100){
       
        linea = "DVL"; modelo = "DVL150"; precio = 325;
    }else {
        linea = null;
    }
    
}

//funcion selectora para cuando entra en dosificacion
function selectorDosificadorElectrico(){
    if (contraPresion <= 10 && caudal >=16 && caudal <=30) {
        
        linea = "DDI"; modelo = "30"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=30 && caudal <=60) {
            
            linea = "DDI"; modelo = "60"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=60 && caudal <=80) {
           
            linea = "DDI"; modelo = "80"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=80 && caudal <=150) {
            
            linea = "DDI"; modelo = "150"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=150 && caudal <=300) {
           
            linea = "DDI"; modelo = "300"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=300 && caudal <=600) {
      
            linea = "DDI"; modelo = "600"; precio = 1250;

    }else if (contraPresion <= 10 && caudal >=600 && caudal <=1200){
        
        linea = "DDI"; modelo = "DUPLEX"; precio = 1950;  

    }else if (contraPresion <= 10 && caudal >=0.15 && caudal <=1.5) {
        
        linea = "Milenio"; modelo = "01510"; precio = 320;

    }else if (contraPresion <= 10 && caudal >=0.30 && caudal <=3) {
    
        linea = "Milenio"; modelo = "Milenio 03010"; precio = 320;

    }else if (contraPresion <= 10 && caudal >=0.50 && caudal <=5) {
 
        linea = "Milenio"; modelo = "Milenio 05010"; precio = 320;

    }else if (contraPresion > 10 && contraPresion <=50 && caudal <=0.30) {

        linea = "DECI"; modelo = "7/25"; precio = 2200;

    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=0.66){
        
        linea = "DECI"; modelo = "10/25"; precio = 2200;

    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=1.85){
        
        linea = "DECI"; modelo = "10/70"; precio = 2300;

    }else if (contraPresion > 10 && contraPresion <=200 && caudal <=3){
        
        linea = "DECI"; modelo = "15/70"; precio = 2400;

    }else if (contraPresion > 10 && contraPresion <=200 && caudal >=10 && caudal <=25){
       
        linea = "DE"; modelo = "20/70"; precio = 2900;
    }else if (contraPresion > 200 && contraPresion <=800 && caudal <=25){
    
        linea = "DEAP"; modelo = "100/800"; precio = 3500;
    }else{
        linea = null;
    }
   
}