function jugarPPT(opcionUsuario) {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const indiceComputadora = Math.floor(Math.random() * 3);
    const opcionComputadora = opciones[indiceComputadora];
    let resultado = '';

    if (opcionUsuario === opcionComputadora) {
        resultado = 'Empate';
    } else if (
        (opcionUsuario === 'piedra' && opcionComputadora === 'tijeras') ||
        (opcionUsuario === 'papel' && opcionComputadora === 'piedra') ||
        (opcionUsuario === 'tijeras' && opcionComputadora === 'papel')
    ) {
        resultado = 'Ganaste';
    } else {
        resultado = 'Perdiste';
    }
    document.getElementById("resultadoPPT").innerHTML =
        "Computadora eligió: " + opcionComputadora + "<br>" +
        "Resultado: " + resultado;
}

ducument.getElementById("piedra").onclick = () => jugarPPT('piedra');
document.getElementById("papel").onclick = () => jugarPPT('papel');
document.getElementById("tijeras").onclick = () => jugarPPT('tijeras');