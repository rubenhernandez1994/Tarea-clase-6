/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $salarioFamiliar = document.querySelector("#salario-miembros-familia")
const $agregarIntegrante = document.querySelector("#integrantes")
const $calculoSalarios = document.querySelector("#boton-salario-anual")

$agregarIntegrante.onclick = function (e) {
    agregarCampoInteraccionAFormulario($salarioFamiliar, 'salario');
    e.preventDefault()
}

function agregarCampoInteraccionAFormulario($formularioSalario, nombreCampo) {
    const $div = document.createElement("div");
    const $input = document.createElement("input");
    const $label = document.createElement("label");
    $input.placeholder = nombreCampo;
    $input.className = nombreCampo;
    $label.textContent = nombreCampo;
  
    const $botonEliminar = document.createElement("button");
    $botonEliminar.textContent = "eliminar";
  
    $div.appendChild($label);
    $div.appendChild($input);
    $div.appendChild($botonEliminar);
    $formularioSalario.appendChild($div);
  
    $botonEliminar.onclick = function () {
        eliminarElementoDeUnFormulario($div);
    };
  
    const eliminarElementoDeUnFormulario = $elemento => $elemento.remove();
}


$calculoSalarios.onclick = function(e){
  document.querySelector("#errores").innerHTML = ''
  const salarios = $salarioFamiliar.querySelectorAll(".salario");
  let sumaSalarios = 0;
  let contadorSalariosValidos = 0;
  let salarioMinimo = Number.POSITIVE_INFINITY
  let salarioMaximo = Number.NEGATIVE_INFINITY


  for(let i = 0; i < salarios.length; i++){
    let salario = salarios[i].value.trim();
    const error = validarSalarios([salario]);
    if (error){
        let mensajeError = document.createElement('p');
        mensajeError.innerHTML = error;
        document.querySelector("#errores").appendChild(mensajeError);
        return;
    }
    if (salario !== "" && !isNaN(Number(salario))) {
        sumaSalarios += Number(salario);
        contadorSalariosValidos++;

        salarioMinimo = Math.min(salarioMinimo, Number(salario));
        salarioMaximo = Math.max(salarioMaximo, Number(salario));
    }
  }
  let promedioSalarios = 0;

  if (contadorSalariosValidos > 0){
    promedioSalarios = sumaSalarios/contadorSalariosValidos;
  }

  let promedioSalarioMensual = promedioSalarios/12

  let promedio = document.createElement('p')
  promedio.innerHTML = `El salario promedio es de ${promedioSalarios}`

  let minimo = document.createElement('p')
  minimo.innerHTML = `El salario minimo es de ${salarioMinimo}`
  
  let maximo = document.createElement('p')
  maximo.innerHTML = `El salario minimo es de ${salarioMaximo}`

  let promedioMensual = document.createElement('p')
  promedioMensual.innerHTML = `El salario promedio es de ${promedioSalarioMensual}`


  document.querySelector("#salarios-familia").appendChild(promedio)
  document.querySelector("#salarios-familia").appendChild(minimo)
  document.querySelector("#salarios-familia").appendChild(maximo)
  document.querySelector("#salarios-familia").appendChild(promedioMensual)

  e.preventDefault();
}

function validarSalarios(valorSalarios){
  for (let i = 0; i < valorSalarios.length; i++) {
      if (valorSalarios[i] <= 0 || isNaN(valorSalarios[i])) {
          return "Los salarios deben ser numeros enteros positivos mayores que 0";
      }
      if (!Number.isInteger(valorSalarios[i])) {
          return "Los salarios no pueden llevar numeros decimales";
      }
  }
  return "";
}

