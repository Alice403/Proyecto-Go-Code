function guardarVenta() {
    var ventas = JSON.parse(sessionStorage.getItem("ventas"));
    var modo = localStorage.getItem("modo");
    if (modo == "insercion") {
        agregarVenta(ventas);
    }
    if (modo == "edicion") {
        editarVenta(ventas);
    }
    var s_ventas = JSON.stringify(ventas);
    localStorage.setItem("ventas", s_ventas);

    window.location = "./Cuadernia";
}

function agregarVenta(ventas) {
    ventas.push({
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
    alert("La venta fue agregada con exito!")
}

function editarVenta(ventas) {
    var fila = sessionStorage.getItem("fila") - 1;
    var venta = ventas[fila];
    venta.idventa = document.getElementById("IDventa").value;
    venta.fechaventa = document.getElementById("fechaventa").value;
    venta.idproducto = document.getElementById("IDproducto").value;
    venta.descripcion = document.getElementById("descripcion").value;
    venta.cantidad = document.getElementById("cantidad").value;
    venta.preciou = document.getElementById("preciou").value;
    venta.preciot = document.getElementById("preciot").value;
    venta.idcliente = document.getElementById("IDcliente").value;
    venta.nombrecliente = document.getElementById("nombrecliente").value;
    venta.vendedor = document.getElementById("vendedor").value;
    venta.estadov = document.getElementById("estadov").value;
        
    alert("La venta se modifico exito!")

}

function poblarCampos() {
    var fila = sessionStorage.getItem("fila") - 1;
    var ventas = JSON.parse(sessionStorage.getItem("ventas"));

    document.getElementById("IDventa").value = ventas[fila].idventa;
    document.getElementById("fechaventa").value = ventas[fila].fechaventa;
    document.getElementById("IDproducto").value = ventas[fila].idproducto;
    document.getElementById("descripcion").value = ventas[fila].descripcion;
    document.getElementById("cantidad").value = ventas[fila].cantidad;
    document.getElementById("preciou").value = ventas[fila].preciou;
    document.getElementById("preciot").value = ventas[fila].preciot;
    document.getElementById("IDcliente").value = ventas[fila].idcliente;
    document.getElementById("nombrecliente").value= ventas[fila].nombrecliente;
    document.getElementById("vendedor").value = ventas[fila].vendedor;
    document.getElementById("estadov").value = ventas[fila].estadov;

}

function iniciar() {
    var modo = sessionStorage.getItem("modo");
    if (modo === "edicion") {
        poblarCampos();
    }
}