function agregarFila() {
    var id = localStorage.getItem("ID");
    var nombre = localStorage.getItem("nombre");
    var apellido = localStorage.getItem("apellido");
    var tipo = localStorage.getItem("tipo");
    var estado = localStorage.getItem("estado");
    var tabla = document.getElementById("tablaUsuarios");
    var row = tabla.insertRow(-1);
    var cell_id = row.insertCell(0).innerHTML = id;
    var cell_nombre = row.insertCell(1).innerHTML = nombre;
    var cell_apelllido = row.insertCell(2).innerHTML = apellido;
    var cell_tipo = row.insertCell(3).innerHTML = tipo;
    var cell_estado = row.insertCell(4).innerHTML = estado;

    var rows = tabla.rows.length - 1;
    var Herramienta = row.insertCell(5).innerHTML = `<button class="BotonEditar" onclick="editar(${rows})"></button>`;
    borrarStorage();
}

function editarFila() {
    var fila = localStorage.getItem("fila");
    var id = localStorage.getItem("ID");
    var nombre = localStorage.getItem("nombre");
    var apellido = localStorage.getItem("apellido");
    var tipo = localStorage.getItem("tipo");
    var estado = localStorage.getItem("estado");
    var tabla = document.getElementById("tablaUsuarios");
    var row = tabla.rows[fila];
    row.cells[0].innerHTML = id;
    row.cells[1].innerHTML = nombre;
    row.cells[2].innerHTML = apellido;
    row.cells[3].innerHTML = tipo;
    row.cells[4].innerHTML = estado;
    localStorage.removeItem("estado");
}

function editarUsuario(row) {
    var fila = document.getElementById("tablaUsuarios").rows[row];
    localStorage.setItem("mode", "edicion")
    localStorage.setItem("fila", row);
    localStorage.setItem("id", fila.cells[0].innerHTML);
    localStorage.setItem("nombre", fila.cells[1].innerHTML);
    localStorage.setItem("apellido", fila.cells[2].innerHTML);
    localStorage.setItem("tipo", fila.cells[3].innerHTML);
    localStorage.setItem("estado", fila.cells[4].innerHTML);
    window.location = "./registro-nuevo-usuario.html";
}

function borrarStorage() {
    localStorage.removeItem("fila");
    localStorage.removeItem("modo");
    localStorage.removeItem("ID");
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");
    localStorage.removeItem("tipo");
    localStorage.removeItem("estado");
}

function agregarUsuario() {
    localStorage.setItem("modo", "insercion");
    window.location = "./registro-nuevo-usuario.html";
}

function iniciar() {
    var modo = localStorage.getItem("modo");
    if (modo === null)
        return;

    if (modo === "insercion")
        agregarFila();

    if (modo === "edicion")
        editarFila();
}