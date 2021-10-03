function editarProducto(fila) {
    sessionStorage.setItem("modo", "edicion");
    sessionStorage.setItem("fila", fila);
    window.location = "./modificar_productos.html";
}

function agregarProducto() {
    sessionStorage.setItem("modo", "insercion");
    window.location = "./modificar_productos.html";
}

function iniciarProductos() {
    var a_productos = [
        {
            id: "001",
            descripcion: "Cuaderno rallado 100 hojas",
            valor_unitario: "4000",
            esta_disponible: "No",
        },
        {
            id: "002",
            descripcion: "Cuaderno cuadriculado 50 hojas",
            valor_unitario: "2500",
            esta_disponible: "Sí",
        },
    ];
    var s_productos = JSON.stringify(a_productos);
    sessionStorage.setItem("productos", s_productos);
}

function poblarTabla() {
    var productos = JSON.parse(sessionStorage.getItem("productos"));
    var tabla = document.getElementById("tablaProductos");
    var count = 1;
    productos.forEach(function (producto) {
        var fila = tabla.insertRow(-1);
        fila.insertCell(0).innerHTML = producto.id;
        fila.insertCell(1).innerHTML = producto.descripcion;
        fila.insertCell(2).innerHTML = producto.valor_unitario;
        fila.insertCell(3).innerHTML = producto.esta_disponible;
        fila.insertCell(4).innerHTML = `<button class = "botonEditar" onclick="editarProducto(${count})">
        <i class="fas fa-pencil-alt botonEditar"></i></button>`;
        count++;
    });
}

function iniciar() {
    var productos = sessionStorage.getItem("productos");
    if (productos == null) iniciarProductos();

    poblarTabla();
}
