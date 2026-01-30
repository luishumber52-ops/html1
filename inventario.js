var total = 0
var numproductos = 0;
var ids = 1;

function addFila() {
    var table = document.getElementById("tblfactura").getElementsByTagName("tbody")[0];

    console.log(table);
    var fila = table.insertRow(-1);
    var celda1 = fila.insertCell(0);
    var celda2 = fila.insertCell(1);
    var celda3 = fila.insertCell(2);
    var celda4 = fila.insertCell(3);
    var celda5 = fila.insertCell(4);
    var celda6 = fila.insertCell(5);

    var botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "-";
    botonEliminar.onclick = function () {
        var row = this.parentNode.parentNode;
        row.remove();
        calcularTotal();
        numproductos--;
        var contador = document.getElementById("numproductos");
        contador.innerHTML = "<b>" + numproductos;
    }
    celda1.appendChild(botonEliminar);


    var caja1 = addInput("codigo", "text");
    caja1.onchange = function () {
        let texto = this.options[this.selectedIndex].value;

        let id = this.id;
        let numeroId = id.substring(6);
        let valores = texto.split("-");
        document.getElementById("nombre"+numeroId).value = valores[1].trim();
        document.getElementById("valorUnitario"+numeroId).value = valores[2].trim();
    }
    
    celda2.appendChild(caja1);

    var caja2 = addInput("nombre", "text");
    celda3.appendChild(caja2);

    var caja3 = addInput("cantidad", "number");
    caja3.value=0;
    caja3.onblur = function () {
        var cantidad = document.getElementById(this.id).value;
        var numeroId = this.id.substring(8);
        if(cantidad=="" || isNaN(cantidad)){
            cantidad=0;
            document.getElementById(this.id).value=0;
            document.getElementById("subtotal"+numeroId).value=0;
        } else {
            var valorUnitario = document.getElementById("valorUnitario"+numeroId).value;
            if(valorUnitario=="" || isNaN(valorUnitario)){
                valorUnitario=0;
                document.getElementById("valorUnitario"+numeroId).value=0;
                document.getElementById("subtotal"+numeroId).value=0;
            } else {
                var subtotal = parseInt(cantidad) * parseInt(valorUnitario);
                document.getElementById("subtotal"+numeroId).value=subtotal;
            }
        }
        calcularTotal();
    }   
    celda4.appendChild(caja3);

    var caja4 = addInput("valorUnitario", "number");
    caja4.value=0;
    caja4.onblur = function () { 
        var valorUnitario = document.getElementById(this.id).value;
        var numeroId = this.id.substring(13);
        if(valorUnitario=="" || isNaN(valorUnitario)){
            valorUnitario=0;
            document.getElementById(this.id).value=0;
            document.getElementById("subtotal"+numeroId).value=0;
        } else {
            var cantidad = document.getElementById("cantidad"+numeroId).value;
            if(cantidad=="" || isNaN(cantidad)){
                cantidad=0;
                document.getElementById("cantidad"+numeroId).value=0;
                document.getElementById("subtotal"+numeroId).value=0;
            } else {
                var subtotal = parseInt(cantidad) * parseInt(valorUnitario);
                document.getElementById("subtotal"+numeroId).value=subtotal;
            }
        }
        calcularTotal();
    };    
    celda5.appendChild(caja4);

    var caja5 = addInput("subtotal", "number", true);
    celda6.appendChild(caja5);

    numproductos++;
    ids++;

    var contador = document.getElementById("numproductos");
    contador.innerHTML = "<b>" + numproductos;

}

    function addInput (valorId, typeInput, readOnly) {
        var caja = document.createElement("input");
        caja.id = valorId+ids;
        caja.name= valorId+ids;
        caja.type = typeInput;
        if (readOnly==true) {
            caja.readOnly = true;
        }

        return caja;
    }

    function addSelect(valorId) {
        var caja = document.createElement("select");
        caja.id = valorId+ids;
        caja.name= valorId+ids;
        cargarFichas(caja);
        return caja;
    }

function calcularTotal() {
    var table = document.getElementById("tblfactura").getElementsByTagName("tbody")[0];
    var filas = table.getElementsByTagName("tr");
    total = 0;
    for (var i = 0; i < filas.length; i++) {
        var caja = filas[i].getElementsByTagName("input")[4].value;
        if(caja=="" || isNaN(caja)){
            caja=0;
        }
        total= total + parseInt(caja);   
    }
    document.getElementById("totalFactura").innerHTML = total;

}

function cargarFichas(caja) {
    var cargar = new XMLHttpRequest();
    cargar.open("GET", "inventario.txt", true);
    cargar.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {

            let datos = this.responseText;
            var lineas = datos.split(/\r?\n/);

            lineas.forEach(function (linea) {
                if(linea.trim()!=""){
                    var datos = linea.split(",");

                    var option = document.createElement("option");
                    option.value = datos[0] + " - " + datos[1] + " - " + datos[2];
                    option.textContent = datos[0];
                }
            });
        }
    };
    cargar.send();
}            