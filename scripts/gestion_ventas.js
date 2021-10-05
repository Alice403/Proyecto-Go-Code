function editarProducto(fila) {
    sessionStorage.setItem("modo", "edicion");
    sessionStorage.setItem("fila", fila);
    window.location = "./modificar_ventas.html";
}

function agregarProducto() {
    sessionStorage.setItem("modo", "insercion");
    window.location = "./modificar_ventas.html";
}

function iniciarProductos() {
    var a_productos = [
        {
            idventa: "001",
            fechaventa: " 2 SEP 21",
            idproducto: "AAA123",
            descripcion: "Cuaderno pasta",
            cantidad: "1",
            preciou: "45000",
            preciot: "45000",
            idcliente: "1234567",
            nombrecliente: "Pedro Perez",
            vendedor: "Camila Perez",
            estadov: "En proceso",
        },
        {
            idventa: "002",
            fechaventa: "5 OCT 21",
            idproducto: "BBB208",
            descripcion: "Cuaderno argollado",
            cantidad: "3",
            preciou: "30000",
            preciot: "90000",
            idcliente: "1891011",
            nombrecliente: "Dario Pinzon",
            vendedor: "Carolina Restrepo",
            estadov: "Entregado",
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
        fila.insertCell(0).innerHTML = producto.idventa;
        fila.insertCell(1).innerHTML = producto.fechaventa;
        fila.insertCell(2).innerHTML = producto.idproducto;
        fila.insertCell(3).innerHTML = producto.descripcion;
        fila.insertCell(4).innerHTML = producto.cantidad;
        fila.insertCell(5).innerHTML = producto.preciou;
        fila.insertCell(6).innerHTML = producto.preciot;
        fila.insertCell(7).innerHTML = producto.idcliente;
        fila.insertCell(8).innerHTML = producto.nombrecliente;
        fila.insertCell(9).innerHTML = producto.vendedor;
        fila.insertCell(9).innerHTML = producto.estadov;
        fila.insertCell(11).innerHTML = `<button class = "botonEditar" onclick="editarProducto(${count})">
        <i class="fas fa-pencil-alt botonEditar"></i></button>`;
        count++;
    });
}

function iniciar() {
    var productos = sessionStorage.getItem("productos");
    if (productos == null) iniciarProductos();

    poblarTabla();
}
