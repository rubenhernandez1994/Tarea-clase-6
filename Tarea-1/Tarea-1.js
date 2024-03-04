/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonNumeroMiembros = document.querySelector("#boton-numero-miembros");
const $botonBorrarFormularios = document.querySelector("#boton-borrar-formularios");

function crearArray(numeros, array){
    for (let i = 0; i < numeros.length; i++){
        array.push(Number(numeros[i].value));
    }
    return array;
}


$botonNumeroMiembros.onclick = function(){
    const numeroMiembros = Number(document.querySelector("#cantidad-miembros-familia").value);
    const error = validarNumeroMiembros(numeroMiembros);
    if (error) {
        alert(error);
        return false;
    }
    agregarMiembros()
    
}

$botonBorrarFormularios.onclick = function() {
    document.querySelector("#formularios").innerHTML = '';
}


const $calculcarBotonMinimo = document.querySelector("#boton-miembro-menor")

$calculcarBotonMinimo.onclick = function(){
    const valorEdades = document.querySelectorAll(".edad-miembro");
    let arrayEdades = [];
    crearArray(valorEdades, arrayEdades);

    const minEdad = Math.min(...arrayEdades.filter(edad => !isNaN(edad))); 
    
    let resultado = document.createElement('p')
    resultado.innerHTML = `La edad minima es ${minEdad} anos`

    document.querySelector("#edades-familia").appendChild(resultado);   
}


const $calculcarBotonMaximo = document.querySelector("#boton-miembro-mayor")

$calculcarBotonMaximo.onclick = function(){
    const valorEdades = document.querySelectorAll(".edad-miembro");
    let arrayEdades = [];
    crearArray(valorEdades, arrayEdades);

    console.log(arrayEdades);

    const minEdad = Math.max(...arrayEdades.filter(edad => !isNaN(edad))); 
    console.log("Edad maxima:", minEdad);

    let resultado = document.createElement('p')
    resultado.innerHTML = `La edad maxima es ${minEdad} anos`

    document.querySelector("#edades-familia").appendChild(resultado);  

}

const $calculcarBotonPromedio = document.querySelector("#promedio-edad");

$calculcarBotonPromedio.onclick = function() {
    const numeroMiembros = Number(document.querySelector("#cantidad-miembros-familia").value);
    let sumaEdades = 0;

    for(let i = 0; i < numeroMiembros; i++){
        let edades = Number(document.querySelectorAll(".edad-miembro")[i].value);
        sumaEdades += edades;
    }

    console.log(sumaEdades / numeroMiembros);

    let promedio = sumaEdades/numeroMiembros

    let resultado = document.createElement('p')
    resultado.innerHTML = `La media de las edades es de ${promedio} anos`

    document.querySelector("#edades-familia").appendChild(resultado);

}

function validarNumeroMiembros(numeroMiembros){
    if (numeroMiembros <= 0) {
        return "Este campo no puede estar vacío";
    }
    return "";

}


function agregarMiembros(){
    const numeroMiembros = Number(document.querySelector("#cantidad-miembros-familia").value);
    document.querySelector("#formularios").innerHTML = '';

    for (let i = 1; i <= numeroMiembros; i++){
        let formulario = document.createElement('form');
        formulario.innerHTML = 
            `<h3>Edades del familiar ${i}</h3>`
            + '<input type="number" class="edad-miembro" placeholder="Ingresá numero de miembros">';

        document.querySelector("#formularios").appendChild(formulario);     

    }
    
    return false;

}