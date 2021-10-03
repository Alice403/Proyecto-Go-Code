function guardarProducto() {
    var productos = JSON.parse(sessionStorage.getItem("productos"));
    var modo = sessionStorage.getItem("modo");
    if (modo == "insercion") {
        agregarProducto(productos);
    }
    if (modo == "edicion") {
        editarProducto(productos);
    }
    var s_productos = JSON.stringify(productos);
    sessionStorage.setItem("productos", s_productos);

    window.location = "./admin_productos.html";
}

function agregarProducto(productos) {
    productos.push({
        id: document.getElementById("ID").value,
        descripcion: document.getElementById("descripcion").value,
        valor_unitario: document.getElementById("valor_unitario").value,
        esta_disponible: document.getElementById("esta_disponible").value,
    
    });
    alert("El producto fue agregado con exito!")
}

function editarProducto(productos) {
    var fila = sessionStorage.getItem("fila") - 1;
    var producto = productos[fila];
    producto.id = document.getElementById("ID").value;
    producto.descripcion = document.getElementById("descripcion").value;
    producto.valor_unitario = document.getElementById("valor_unitario").value;
    producto.esta_disponible = document.getElementById("esta_disponible").value;
    alert("El producto se modificó con exito!")
}

function poblarCampos() {
    var fila = sessionStorage.getItem("fila") - 1;
    var productos = JSON.parse(sessionStorage.getItem("productos"));
    document.getElementById("ID").value = productos[fila].id;
    document.getElementById("descripcion").value = productos[fila].descripcion;
    document.getElementById("valor_unitario").value = productos[fila].valor_unitario;
    document.getElementById("esta_disponible").value = productos[fila].esta_disponible;
}

function iniciar() {
    var modo = sessionStorage.getItem("modo");
    if (modo === "edicion") {
        poblarCampos();
    }
}
