//funcion constructora -> para caputrar los datos de la seleccion
function capturar() {
  function Selection(nombre, linea, modelo, precio, foto, caracteristicas, id) {
    this.nombre = nombre.toUpperCase();
    this.linea = linea;
    this.modelo = modelo;
    precio = precio;
    this.precio = precio;
    this.foto = foto;
    this.caracteristicas = caracteristicas;
    this.id = id
  }
  let nombreCapturar = tipoDeProceso;
  let lineaCapturar = linea;
  let modeloCapturar = modelo;
  let precioCapturar = precio;
  let fotoCapturar = foto;
  let caracteristicasCapturar = caracteristicas;
  let idCapturar = id;

  resultado = new Selection(
    nombreCapturar,
    lineaCapturar,
    modeloCapturar,
    precioCapturar,
    fotoCapturar,
    caracteristicasCapturar,
    idCapturar
  );

  arraySelection = [];
  arraySelection.push(resultado);
}

const PintarDom = () => {
  resultadoSelector.innerHTML = "";

  arraySelection = JSON.parse(localStorage.getItem("resultado"));
  console.log(arrayDeConsultas); // no importa el null por que entra igual con el if;

  if (arrayDeConsultas === null) {
    arraySelection = [];
  } else {
    if (linea === null) {
      $("#resultadoSelector")
        .fadeIn()
        .fadeToggle(7000)
        .html(
          '<div class="alert alert-danger float-left mt-4" role="alert">SU BUSQUEDA NO OBTIENE RESULTADO, DEBIDO A QUE LOS PARAMETROS "CAUDAL" SON DEMASIADO ALTOS</div>'
        );
      return;
    } else
      arraySelection.forEach((resultado) => {
        $("#resultadoSelector")
          .slideToggle()
          .slideDown(2500)
          .html(
            `      
            <div class="mt-3 p-1">
                <div id="errorBusqueda" class="alert alert-success" role="alert">
                    <table class="table" id="tabla">
                        <div class="lista__tabla text-dark">
                            <ul>
                                <li>Tipo de Proceso</li>
                                <li>Linea</li>
                                <li>Modelo</li>
                                <li>Precio</li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <hr>
                            <ul>
                                <li>${tipoDeProceso}</li>
                                <li>${linea}</li>
                                <li>${modelo}</li>
                                <li>${precio}</li>
                                <li></li>
                                <li></li>
                            </ul>
                            
                            <hr>
                            <section class="d-flex justify-content-between" style="height: 20rem;">
                                <div class="text-dark">
                                    <h5>${caracteristicas}</h5>
                                </div>     
                                <div style="border-left:1px solid rgba(105, 103, 103, 0.322)"></div>
                                <div>
                                    <h4 class="text-center">DISE??O</h4>
                                    <div class="d-flex justify-content-center">
                                        ${foto}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </table>    
                </div>
            </div>
                 `
          );
      });
  };
 }
//$(document).on("DOMContentLoaded", PintarDom)};
