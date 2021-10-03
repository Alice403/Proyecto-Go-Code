function editarUsuario(fila) {
    localStorage.setItem("modo", "edicion");
    localStorage.setItem("fila", fila);
    window.location = "./registro_usuarios.html";
}

function agregarUsuario() {
    localStorage.setItem("modo", "insercion");
    window.location = "./registro_usuarios.html";
}

function iniciarUsuarios() {
    var a_usuarios = [
        {
            id: "001",
            nombre: "María",
            apellido: "Agreda",
            tipo: "vendedor",
            estado: "pendiente",
        },
        {
            id: "002",
            nombre: "Alvaro",
            apellido: "Reyes",
            tipo: "administrador",
            estado: "autorizado",
        },
    ];
    var s_usuarios = JSON.stringify(a_usuarios);
    localStorage.setItem("usuarios", s_usuarios);
}

function poblarTabla() {
    var usuarios = JSON.parse(localStorage.getItem("usuarios"));
    var tabla = document.getElementById("tablaUsuarios");
    var count = 1;
    usuarios.forEach(function (usuario) {
        var fila = tabla.insertRow(-1);
        fila.insertCell(0).innerHTML = usuario.id;
        fila.insertCell(1).innerHTML = usuario.nombre;
        fila.insertCell(2).innerHTML = usuario.apellido;
        fila.insertCell(3).innerHTML = usuario.tipo;
        fila.insertCell(4).innerHTML = usuario.estado;
        fila.insertCell(
            5
        ).innerHTML = `<button class="BotonEditar" onclick="editarUsuario(${count})"></button>`;
        count++;
    });
}

function iniciar() {
    var usuarios = localStorage.getItem("usuarios");
    if (usuarios == null) iniciarUsuarios();

    poblarTabla();
}
