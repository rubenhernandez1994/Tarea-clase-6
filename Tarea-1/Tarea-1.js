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
    document.querySelector("#errores").innerHTML = ''
    const numeroMiembros = Number(document.querySelector("#cantidad-miembros-familia").value);
    const error = validarNumeroMiembros(numeroMiembros);
    if (error) {
        let mensajeError = document.createElement('p')
        mensajeError.innerHTML = error
        document.querySelector("#errores").appendChild(mensajeError);     
    }
    agregarMiembros();   

    return false
};

$botonBorrarFormularios.onclick = function() {
    document.querySelector("#formularios").innerHTML = '';
};

const $calculcarBotonMinimo = document.querySelector("#boton-miembro-menor");

$calculcarBotonMinimo.onclick = function(){
    document.querySelector("#errores").innerHTML = ''
    const valorEdades = document.querySelectorAll(".edad-miembro");
    let arrayEdades = [];
    crearArray(valorEdades, arrayEdades);

    const error = validarEdades(arrayEdades);
    if (error){
        let mensajeError = document.createElement('p')
        mensajeError.innerHTML = error
        document.querySelector("#errores").appendChild(mensajeError); 
        return;
    }

    const minEdad = Math.min(...arrayEdades.filter(edad => !isNaN(edad))); 
    
    let resultado = document.createElement('p');
    resultado.innerHTML = `La edad mínima es ${minEdad} años`;

    document.querySelector("#edades-familia").appendChild(resultado);   
};

const $calculcarBotonMaximo = document.querySelector("#boton-miembro-mayor");

$calculcarBotonMaximo.onclick = function(){
    document.querySelector("#errores").innerHTML = ''
    const valorEdades = document.querySelectorAll(".edad-miembro");
    let arrayEdades = [];
    crearArray(valorEdades, arrayEdades);

    const error = validarEdades(arrayEdades);
    if (error){
        let mensajeError = document.createElement('p')
        mensajeError.innerHTML = error
        document.querySelector("#errores").appendChild(mensajeError); 
        return;
    }

    const maxEdad = Math.max(...arrayEdades.filter(edad => !isNaN(edad))); 
    
    let resultado = document.createElement('p');
    resultado.innerHTML = `La edad máxima es ${maxEdad} años`;

    document.querySelector("#edades-familia").appendChild(resultado);  
};

const $calculcarBotonPromedio = document.querySelector("#promedio-edad");

$calculcarBotonPromedio.onclick = function() {
    document.querySelector("#errores").innerHTML = ''
    const numeroMiembros = Number(document.querySelector("#cantidad-miembros-familia").value);
    let sumaEdades = 0;
    

    for(let i = 0; i < numeroMiembros; i++){
        let edades = Number(document.querySelectorAll(".edad-miembro")[i].value);
        const error = validarEdades([edades]);
        if (error){
            let mensajeError = document.createElement('p')
            mensajeError.innerHTML = error
            document.querySelector("#errores").appendChild(mensajeError); 
            return;
        }
        sumaEdades += edades;
    }

    let promedio = sumaEdades / numeroMiembros;

    let resultado = document.createElement('p');
    resultado.innerHTML = `La media de las edades es de ${promedio} años`;

    document.querySelector("#edades-familia").appendChild(resultado);
};

function validarNumeroMiembros(numeroMiembros){
    if (numeroMiembros <= 0) {
        return "Este campo debe ser un número entero positivo y mayor que cero";
    }
    if (!Number.isInteger(numeroMiembros)) {
        return "Este campo debe ser un número entero positivo y mayor que cero";
    }
    if (numeroMiembros < 2) {
        return "Debes ingresar al menos 2 miembros";
    }
    return "";
}

function agregarMiembros(){
    const numeroMiembros = Number(document.querySelector("#cantidad-miembros-familia").value);
    document.querySelector("#formularios").innerHTML = '';

    for (let i = 1; i <= numeroMiembros; i++){
        let formulario = document.createElement('form');
        formulario.innerHTML = 
        `<h3>Edades del familiar ${i}</h3>` +
        `<input type="number" class="edad-miembro" placeholder="Ingrese la edad del miembro" oninput="validarNumeroMiembros(event)" min="2">`;
        
        if(numeroMiembros >= 2) {
            document.querySelector("#formularios").appendChild(formulario);
        }
    }    
}

function validarEdades(valorEdades){
    for (let i = 0; i < valorEdades.length; i++) {
        if (valorEdades[i] <= 0 || isNaN(valorEdades[i])) {
            return "Las edades deben ser números enteros positivos y mayores que cero";
        }
        if (!Number.isInteger(valorEdades[i])) {
            return "Las edades no pueden llevar números decimales";
        }
        if (valorEdades[i] > 125) {
            return "Nadie vive más de 125 años";
        }
    }
    return "";
}