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

    window.location = "./admin_ventas.html";
}

function agregarProducto(productos) {
    productos.push({
        idventa: document.getElementById("IDventa").value,
        fechaventa: document.getElementById("fechaventa").value,
        idproducto: document.getElementById("IDproducto").value,
        descripcion: document.getElementById("descripcion").value,
        cantidad: document.getElementById("cantidad").value,
        preciou: document.getElementById("preciou").value,
        preciot: document.getElementById("preciot").value,
        idcliente: document.getElementById("IDcliente").value,
        nombrecliente: document.getElementById("nombrecliente").value,
        vendedor: document.getElementById("vendedor").value,
        estadov: document.getElementById("estadov").value,
    });
    alert("El producto fue agregado con exito!")
}

function editarProducto(productos) {
    var fila = sessionStorage.getItem("fila") - 1;
    var producto = productos[fila];
    producto.idventa = document.getElementById("IDventa").value;
    producto.fechaventa = document.getElementById("fechaventa").value;
    producto.idproducto = document.getElementById("IDproducto").value;
    producto.descripcion = document.getElementById("descripcion").value;
    producto.cantidad= document.getElementById("cantidad").value;
    producto.preciou= document.getElementById("preciou").value;
    producto.preciot= document.getElementById("preciot").value;
    producto.idcliente= document.getElementById("IDcliente").value;
    producto.nombrecliente= document.getElementById("nombrecliente").value;
    producto.vendedor= document.getElementById("vendedor").value;
    producto.estadov= document.getElementById("estadov").value;

    alert("El producto se modificó con exito!")
}

function poblarCampos() {
    var fila = sessionStorage.getItem("fila") - 1;
    var productos = JSON.parse(sessionStorage.getItem("productos"));
    document.getElementById("IDventa").value = productos[fila].idventa;
    document.getElementById("fechaventa").value = productos[fila].fechaventa;
    document.getElementById("IDproducto").value = productos[fila].idproducto;
    document.getElementById("descripcion").value = productos[fila].descripcion;
    document.getElementById("cantidad").value = productos[fila].cantidad;
    document.getElementById("preciou").value = productos[fila].preciou;
    document.getElementById("preciot").value = productos[fila].preciot;
    document.getElementById("IDcliente").value = productos[fila].idcliente;
    document.getElementById("nombrecliente").value = productos[fila].nombrecliente;
    document.getElementById("vendedor").value = productos[fila].vendedor;
    document.getElementById("estadov").value = productos[fila].estadov;
}

function iniciar() {
    var modo = sessionStorage.getItem("modo");
    if (modo === "edicion") {
        poblarCampos();
    }
}
