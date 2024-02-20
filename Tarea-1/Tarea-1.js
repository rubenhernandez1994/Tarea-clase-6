/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonNumeroMiembros = document.querySelector("#boton-numero-miembros");

$botonNumeroMiembros.onclick = function(){
    const numeroMiembros = Number(document.querySelector("#cantidad-miembros-familia").value);
    document.querySelector("#formularios").innerHTML = '';

    for (i=1; i <= numeroMiembros; i++){
        let formulario = document.createElement('form');
        formulario.innerHTML = 
            `<h3>Edades del miembro</h3>`
            + '<input type="number" id="edad-miembro" placeholder="Ingresá las horas">';

        document.querySelector("#formularios").appendChild(formulario);
    }
    return false;
}

const $calculcarBotonMinimo = document.querySelector("#boton-miembro-menor");

$calculcarBotonMinimo.onclick = function(){
    const numeroMiembros = Number(document.querySelector("#cantidad-miembros-familia"));

    let sumaEdad = 0;

    for(i=1; i<=numeroMiembros; i++){
        let edades = Number(document.querySelector("#edad-miembro" + i).value);
        sumaEdad = Math.min(...edades)

        return sumaEdad
    }


    document.querySelector("#edades-familia").innerText =
        `La edad minima es ${sumaEdad}`

    return false;
}