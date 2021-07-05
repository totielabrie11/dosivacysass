//funcion constructora -> para caputrar los datos de la seleccion
function capturar(){
    function Selection(nombre, linea, modelo, precio){
        this.nombre=(nombre.toUpperCase());
        this.linea=linea;
        this.modelo=modelo;
        precio= precio * 1.21;  
        this.precio=precio;
    } 
    let nombreCapturar = tipoDeProceso;
    let lineaCapturar = linea;
    let modeloCapturar = modelo;
    let precioCapturar = precio;  

    contador = new Selection(nombreCapturar, lineaCapturar, modeloCapturar, precioCapturar); 
     
    arraySelection = [];
    arraySelection.push(contador);
    console.log(arraySelection); 
}

const GuardarLS = () => {

    localStorage.setItem('selection', JSON.stringify(arraySelection));
    
}

/* const EliminarLS = (nombre) => {  todavia no estoy listo para esto 
    let indexArray;
    arraySelection.forEach((elemento, index) => {
        if(elemento.nombre === nombre){
            indexArray = index;   
        }
    });
    
    arraySelection.splice(indexArray,1);
    GuardarLS();
} */

const PintarDom = () => {
    
    listaSelector.innerHTML = '';

    arraySelection = JSON.parse(localStorage.getItem('selection'));
    console.log(arraySelection);// no importa el null por que entra igual con el if;

    if(arraySelection === null){
        arraySelection = [];
    }else {
        arraySelection.forEach(element => {

            listaSelector.innerHTML += `<tbody id="listaSelector" class="text-warning alert-danger"><td>${contador.nombre}</td><td>${contador.linea}</td><td>${contador.modelo}</td><td><i class="material-icons">attach_money</i>${contador.precio}</td><td><i class="material-icons me-5" >delete</i><i class="material-icons">favorite</i></td></tbody>`;

            if (linea === null){

               tabla.innerHTML += `<div class="alert alert-danger float-end" role="alert">SU BUSQUEDA NO HA ENCONTRADO RESULTADO</div>`;
                
            }

        });
    }
}

//Eventos del DOM

//En este momento puedo cargar todas mis funciones en orden, queda mucho mas prolijo, se ve el orden de ejecución. a la espera del submit;

form.addEventListener('submit', (e)=> {

    e.preventDefault();
    
    GuardarLS();

    PintarDom();

});
document.addEventListener('DOMContentLoaded', PintarDom);