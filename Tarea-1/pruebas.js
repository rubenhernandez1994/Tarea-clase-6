function probarValidarNumeroMiembros(){
   
    console.assert(
        validarNumeroMiembros(0) <= "Este campo no puede estar vacío",
        'Validar numero de miembros no valido que el campo no este vacio'
    )

    console.assert(
        validarNumeroMiembros(.23) <= "Este campo debe ser un número entero positivo y mayor que cero",
        'Validar numero de miembros no valido que solo hayan ingresado decimales'
    )

    console.assert(
        validarNumeroMiembros(1) <= "Debes ingresar al menos 2 miembros",
        'Validar numero de miembros no valido que solo hayan ingresado decimales'
    )

    console.assert(
        validarNumeroMiembros(2) === '',
        'Validar numero de miembros no funciono con un numero valido'
      )
}

function probarValidarEdades(){
   
    console.assert(
        validarEdades(0) <= "Las edades deben ser números enteros positivos y mayores que cero",
        'Validar edades no valido que el campo no este vacio'
    )

    console.assert(
        validarEdades(.23) <= "Las edades no pueden llevar números decimales",
        'Validar edades no valido que solo hayan ingresado decimales'
    )

    console.assert(
        validarEdades(-1) <= "Las edades deben ser números enteros positivos y mayores que cero",
        'Validar Edades no valido que solo hayan ingresado numeros enteros positivos'
    )

    console.assert(
        validarEdades(125) === "Nadie vive más de 125 años",
        'Validar Edades no valido que hayan ingresado una edad de menos de 125 anios'
    )

    console.assert(
        validarEdades(2) === '',
        'Validar Edades no funciono con un numero valido'
      )
}

function probarValidarSalarios(){
   
    console.assert(
        validarSalarios(0) <= "Los salarios deben ser numeros enteros positivos mayores que 0",
        'Validar salarios no valido que el campo no este vacio'
    )

    console.assert(
        validarSalarios(.23) <= "Los salarios no pueden llevar numeros decimales",
        'Validar salarios no valido que solo hayan ingresado decimales'
    )

    console.assert(
        validarSalarios(-1) <= "Los salarios deben ser numeros enteros positivos mayores que 0",
        'Validar salarios no valido que solo hayan ingresado numeros enteros positivos'
    )

    console.assert(
        validarSalarios(1000000) > "Nadie gana mas de 1 millon",
        'Validar salarios no valido que hayan ingresado menos de 1 millon'
    )

    console.assert(
        validarSalarios(340000) === '',
        'Validar salarios no funciono con un numero valido'
      )
}

probarValidarNumeroMiembros()
probarValidarEdades()