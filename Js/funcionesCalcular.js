var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");

function calcularTotal() {
    
    let num1 = parseInt(n1.value);
    let num2 = parseInt(n2.value);
    let resultado = 0;
    switch (document.getElementById("operacion").value) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            resultado = num1 / num2;
            break;
            case "!":
                resultado = 1;
                for (let i = 1; i <= num1; i++) {
                    resultado = resultado *i;
                }
              
                break;
    }
    alert("Calculando"+resultado);
    document.getElementById("resultado").innerText = resultado;
}