let linea = '';
let modelo = '';
let precio = 0;
let tipoDeProceso = '';
let desplazamiento = 0;
let caudal = 0;
let contrapresion = 0;

const arrayDeConsultas = [];

let inputValues = {

    proceso: '',
    desplazamiento: Number(),
    caudal: Number(),
    contrapresion: Number()

}

const handleForm = e => {
    e.preventDefault();

    if (
        inputValues.proceso.trim() === '' ||
        inputValues.desplazamiento.trim() === '' ||
        inputValues.caudal.trim() === '' ||
        inputValues.contrapresion.trim() === ''
    ) {
    console.log('Todos los campos deben ser completados');
    return; //recuerden que este return lo ponemos para evitar que la funcion siga ejecutandose
  }

  arrayDeConsultas.push(inputValues);
  console.log('Despues de pushear los datos: ', arrayDeConsultas);
};

const handleInput = e => {
    //Aqui viene lo "complejo", necesitamos hacer este formulario dinamico, como hacemos eso? capturando el e.target.name del elemento y buscar que coincida con alguna propiedad del objeto inputValues, es por eso que es importante que los nombres de las propiedades del objeto sean las mismas que la de los names en el html. Por ejemplo e.target.name del segundo input sera apellido, este entrara en el objeto y buscara una propiedad que sea igual, si la consigue le agregara el e.target.value que le pasamos
  
    console.log('Soy el input donde estas escribiendo: ', e.target);
    console.log('Soy el atributo value de ese input: ', e.target.value);
    console.log('Soy el atributo name de ese input: ', e.target.name);

    
  
    inputValues = {
      ...inputValues, //esos ... se llama spread operator, googlear! Va a devolver una copia del objeto, dejo comentado como se veria el objeto si no tuviera eso
      [e.target.name]: e.target.value
    };
  
    // inputValues = {
    //   [e.target.name]: e.target.value
    // }
    console.log(inputValues);
    let tipoDeProceso = inputValues.proceso;
    let desplazamiento = inputValues.desplazamiento;
    console.log(desplazamiento);
    
};

//llamamos el formulario
const form = document.querySelector('form');

//Llamamos a los inputs
const inputs = document.querySelectorAll('.input');
console.log(inputs)

//hacemos el evento submit del form que va a ejecutar la funcion sendForm
form.addEventListener('submit', handleForm);

//hacemos el evento para capturar los values del input, pero como los inputs lo llamamos con un querySelectorAll tenemos que hacer una iteracion primero
inputs.forEach(input => input.addEventListener('input', handleInput));


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
