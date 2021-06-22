//funcion constructora -> para caputrar los datos de la seleccion
function capturar(){
    function Proceso(nombre, linea, modelo, precio){
        this.nombre=(nombre.toUpperCase());
        this.linea=linea;
        this.modelo=modelo;
        precio= precio * 1.21;  
        this.precio=precio;
    }
    let nombreCapturar = tipoDeProceso;
    console.log(nombreCapturar)
    let lineaCapturar = linea;
    console.log(lineaCapturar)
    let modeloCapturar = modelo;
    console.log(modeloCapturar);
    let precioCapturar = precio;
    console.log(precioCapturar);

    contador = new Proceso(nombreCapturar, lineaCapturar, modeloCapturar, precioCapturar);
    console.log(contador);  
    
    baseDeDatos = [];
    console.log(baseDeDatos);
}
//funcion para pushear mis objetos a un array y presentarlos en pantalla
function agregar(){
    baseDeDatos.push(contador);
    document.getElementById("tabla").innerHTML+= '<tbody class="text-warning"><td>'+contador.nombre+'</td><td>'+contador.linea+'</td><td>'+contador.modelo+'</td><td>'+contador.precio+'</td></tbody>';
}

//funcion para calcular el iva del precio
function multiplicar() {
    precio * 1.21
}//no logre ejecutar la funcion dentro de mi constructor de objetos. ingreso la cuenta manualmente.



