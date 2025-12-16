var registroAsistencia = [];

function registroAsistencias() {
    var ficha = document.getElementById("fichas").value.substring(0,7).trim();
    var checkboxes = document.getElementsByName("aprendiz[]");
    asistentes = [];
    for ( var i=0; i < checkboxes.length; i++ ) {
        if ( checkboxes[i].checked ) {
            asistentes.push(checkboxes[i].value.trim());
        }
    }
    registroAsistencia[ficha] = asistentes;
    console.log(registroAsistencia);

}

function cargarAsistencias() {
    var optiones = document.getElementById("fichas").value;
    //var ficha = option.split(" ")[0].trim();
    var ficha = optiones.substring(0,7).trim();
    var carga = new XMLHttpRequest();
    carga.open("GET", ficha+".txt", true);
    carga.onreadystatechange = function() {
        if ( this.readyState == 4 && this.status == 200 ) {
            document.getElementById("lista-aprendices").innerHTML = guardarAsistencias(this.responseText);
        } else if ( this.readyState == 4 && this.status == 404 ) {
            alert("no se encontraron aprendices para la ficha seleccionada.");
            document.getElementById("lista-aprendices").innerHTML = "";
        }
    };
    carga.send();
}

function guardarAsistencias(cadena) {
    var filas = "";
    var aprendices = cadena.split("\n");
    for (let i=0; i < aprendices.length - 1; i++) {
        filas += "<tr><td>"+aprendices[i]+"</td><td><input type='checkbox' name='aprendiz[]' value=' "+aprendices[i]+"'/></td></tr>";
    }
    return filas;
}   

function cargarFichas() {
    var carga = new XMLHttpRequest();
    carga.open("GET","fichas.txt",true);
    carga.onreadystatechange = function() {
        if ( this.readyState == 4 && this.status == 200 ) {
            document.getElementById("fichas").innerHTML = "<option>Seleccione una ficha</option><br/>"+this.responseText;
        }
    };
    carga.send();
}