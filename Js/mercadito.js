

function cargarProductos() {
    var carga = new XMLHttpRequest();
    carga.open("GET","productos.txt", true);
    carga.onreadystatechange = function() {
        if (this.readyState == 4 && this.status === 200) {
            document.getElementById("productos").innerHTML = "<option>Seleccione un producto</option>"+getopciones(this.responseText);
        }
    };
    carga.send();
}

function getopciones(cadena) {
    
    var opciones = "";
    var productos = cadena.split("\n");
    for (let i = 0; i < productos.length; i++) {
        let producto = productos[i].split(":");
        opciones += "<option value='" + producto[1] + "'>" + producto[0] + "</option>";
    }
    return opciones;
}

function calcularTotal() {
    var productoSeleccionado = document.getElementById("productos").value;
    var cantidad = document.getElementById("cantidad").value;
    if (cantidad<0) {




        
        alert("La cantidad no puede ser negativa");
        return;
    }
    var pagototal = productoSeleccionado * cantidad;
    document.getElementById("resultado").innerText = "$"+pagototal.toFixed(2);
}