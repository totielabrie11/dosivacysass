
/* let nombre = "carlos"
let edad = 37;
let estadoCivil = "soltero"; */


/* let nombre = prompt("ingrese su nombre");
console.log(nombre);

let edad = prompt("ingrese su edad");
edad = parseInt(edad); //para este caso, me sirve mas ParseInt  Number
console.log(edad);

let estadoCivil = prompt("ingrese su estaod civil");
console.log(estadoCivil);


if (edad >= 18 && estadoCivil == ("soltero" || "soltera")) { 
    alert("Bienvenido " + nombre + " estas autorizado a ingresar a este contenido " + " con el fin de que dejes de ser " + estadoCivil)
} else if (edad >= 18 && estadoCivil == ("casado" || "casada")) {
    alert("puedes ingresar " + nombre + " a ver el contenido, bajo tus propios riesgos")
}
 else {
    alert("hola " + nombre + " No reunes los requisitos para ingresar a este sitio")
} */

//var amigos = ["carlos", "tito", "pichiman",];
//var amigos1 = ["totielabrie", "pocha", "angie", "soledad"];
//var amigos2 = amigos.concat(amigos1); // para concatenar una cadena de texto de un arraid , asignara un valor por unidad
    //amigos2.push("aaron", "loco", "ezequiel");
    
    //document.write("Estos son todos tus amigos: " + amigos2.join(" / ") + " que suman un total de " + amigos2.length + " amigos");
    //document.write("Estos son todos tus amigos " + amigos2 + " que suman un total de " + amigos2.length + " amigos");
    //amigos2.join() le agrega un separador entre cada elemento
    //amigos2.lenght suma la cantidad de elementos y devuelve el valor = cantidad
/* var edad = 20
var DiasDeSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
DiasDeSemana.length
console.log(DiasDeSemana)

for ( i = 0; i <= DiasDeSemana.length - 1; i++ ) {    //ciclo for
    document.write( DiasDeSemana[i] + "<br><br>");
} */


/* var DiasDeSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var NumeroDias = DiasDeSemana.length - 1;
var i = 0;

while (i <= NumeroDias) {
    document.write( DiasDeSemana[i] + "<br><br>");   //ciclo while
    i++;
} */

/* let confirmacion = confirm("Desea conocer que tipo de triangulo es el suyo");
    if (confirmacion) {
        let lado1 = parseFloat(prompt("Ingrese el angulo del primero lado del triangulo"));
        console.log (lado1);
        let lado2 = parseFloat(prompt("Ingrese el angulo del segundo lado del triangulo"));
        console.log (lado2);
        let lado3 = parseFloat(prompt("Ingrese el angulo del tercer lado del triangulo"));
        console.log (lado3);
        if ((lado1 === lado2) && (lado2 === lado3) && (lado3 === lado1)){
            alert("su triangulo es Equilatero");
        } else if ((lado1 !== lado2) && (lado1 !== lado3) && (lado3 !== lado2)){
            alert("su triangulo es Escaleno")
        } else alert("Su triangulo es Isoceles")      
    } */

/* var suma = function(numero1 , numero2){
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    
    var resultado = numero1 + numero2;
    return resultado;
} */



/* let nombre = prompt("ingrese su nombre");   //bot con switch - no acepta condicional pero acepta valor y si hay conicidencia lo valida o pasa al que sigue. al meterlo en un while siempre vuelve a preguntar para validar un valor;
let msj

while (msj !=="chau") {
    msj = prompt("ingrese un mensaje");

    switch (msj) {
        case "hola":
            alert("hola " + nombre);
            break
        
        case "fecha":
            alert(new Date().toLocaleString());
            break;

        case "chau":
            alert("Hasta luego " + nombre);
            break;
        
        default: 
          alert("mensaje invalido")
    }
} */

//Hacer una encuesta a 5 personas de los temas de abajo usando todo lo aprendido.
// Nombre
// Sexo: Varones/mujeres. (Si alguien quiere sumar generos no binarias tambien puede)
// Educacion: Secundaria/terciaria/universitaria/
// Trabaja: si/no
// En caso de trabajar: sueldo
// La encuesta debera mostrar por consola los resultados finales que seran:
// Cantidad de varones, cantidad de mujeres.
// Sueldo promedio de varones y sueldo promedio de mujeres
// Cuantos tienen secundaria, cuantos terciaria y cuantos univeristaria
// Nombre del mayor sueldo y del menor sueldo
// Aca no solo se usan los temas vistos sino, que se pone a prueba la logica de cada uno. Importante hacer una programacion limpia y ordenada.
// Ayuda spoiler:
// Se tienen que declarar variables para los resultados e ir guardando la informacion de cada dato.
// Se tienen que hacer las 5 preguntas 5 veces, una para cada encuestado.
// Despues de cada respuesta se hacen los calculos y se actualizan las variables declaradas como globales para los resultados.


  
let nombre = prompt("ingrese su nombre");
console.log(nombre);
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
        
        
    }/* Lamentablmente el While no me funciono. O ingresas los datos validos o te saca y tenes que recargar. */

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

/* console.log(desplazamiento)
console.log(tipoDeVacio)
console.log(caudal)
console.log(contraPresion)
console.log(tipoDeAccionamiento)
 */
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

    var contador = new Proceso(nombreCapturar, lineaCapturar, modeloCapturar);
    console.log(contador);
    agregar();
}
    let baseDeDatos = ["nombre", "linea", "modelo"];
    console.log(baseDeDatos);

function agregar(){
    baseDeDatos.push(contador);
}
    
    
   