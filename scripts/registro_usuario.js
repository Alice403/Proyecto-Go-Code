function guardarUsuario() {
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    var modo = localStorage.getItem("modo");
    if (modo == "insercion") {
        agregarUsuario(usuarios);
    }
    if (modo == "edicion") {
        editarUsuario(usuarios);
    }
    var s_usuarios = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", s_usuarios);

    window.location = "./gestion_usuarios.html";
}

function agregarUsuario(usuarios) {
    usuarios.push({
        id: document.getElementById("ID").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        tipo: document.getElementById("tipo").value,
        estado: document.getElementById("estado").value,
    });
    alert("El usuario fue agregado con exito!")
}

function editarUsuario(usuarios) {
    var fila = localStorage.getItem("fila") - 1;
    var usuario = usuarios[fila];
    usuario.id = document.getElementById("ID").value;
    usuario.nombre = document.getElementById("nombre").value;
    usuario.apellido = document.getElementById("apellido").value;
    usuario.tipo = document.getElementById("tipo").value;
    usuario.estado = document.getElementById("estado").value;
    alert("El usuario se modificó con exito!")
}

function poblarCampos() {
    var fila = localStorage.getItem("fila") - 1;
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    document.getElementById("ID").value = usuarios[fila].id;
    document.getElementById("nombre").value = usuarios[fila].nombre;
    document.getElementById("apellido").value = usuarios[fila].apellido;
    document.getElementById("tipo").value = usuarios[fila].tipo;
    document.getElementById("estado").value = usuarios[fila].estado;
}

function iniciar() {
    var modo = localStorage.getItem("modo");
    if (modo === "edicion") {
        poblarCampos();
    }
}
