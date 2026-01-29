function calcularDivisores () {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = " ";

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Ingrese el numero");
        return;
    }

    resultado.innerHTML += "<li><b>divisores de " + numero1 + ":</b></li>";
    for(let i = 1; i <= numero1; i++) {
        if (numero1 % i === 0){
            resultado.innerHTML += "<li>" + i + "</li>";
        }
    }

    resultado.innerHTML += "<li>---------------------------</li>";
    resultado.innerHTML += "<li><b>divisores de " + numero2 + ":</b></li>";

    for(let i = 1; i <= numero2; i++){
        if (numero2 % i === 0) {
            resultado.innerHTML += "<li>" + i + "</li>";
        }
    }
}