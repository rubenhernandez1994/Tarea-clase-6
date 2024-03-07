function probarValidarNumeroMiembros(){
    console.assert(
        validarNumeroMiembros('') === "Este campo no puede estar vacío",
        'Validar numero de miembros no valido que el campo no este vac[io'
    )
}

probarValidarNumeroMiembros()