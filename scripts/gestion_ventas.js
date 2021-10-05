function editarVenta(fila) {
    sessionStorage.setItem("modo", "edicion");
    sessionStorage.setItem("fila", fila);
    window.location = "./formularioCuadernia.html";
}

function agregarVenta() {
    sessionStorage.setItem("modo", "insercion");
    window.location = "./formularioCuadernia.html";
}

function iniciarVentas() {
    var a_ventas = [
        {

           
            idventa: "021020211",
            fechaventa: "2 OCT 21",
            idproducto: "AXR128",
            descripcion: "Cuaderno reciclado",
            cantidad: "2",
            preciou: "20,000.00",
            preciot: "40,000.00",
            idcliente: "1.333.444.601",
            nombrecliente: "Mauricio Cardenas",
            vendedor:"Julio Vargas",
            estadov: "cancelado",
            
            
            
        },
        {
            idventa: "031020211",
            fechaventa: "3 OCT 21",
            idproducto: "JEP45",
            descripcion: "Cuaderno escolar",
            cantidad: "4",
            preciou: "5,000.00",
            preciot: "20,000.00",
            idcliente: "1.020.555.666",
            nombrecliente: "Claudia Ramos",
            vendedor:"Elisa Perez",
            estadov: "Entregado",
        },
    ];
    var s_ventas = JSON.stringify(a_ventas);
    sessionStorage.setItem("ventas", s_ventas);
}

function poblarTabla() {
    var ventas = JSON.parse(sessionStorage.getItem("ventas"));
    var tabla = document.getElementById("tablaVentas");
    var count = 1;
    ventas.forEach(function (venta) {
        var fila = tabla.insertRow(-1);
        fila.insertCell(0).innerHTML = venta.idventa;
        fila.insertCell(1).innerHTML = venta.fechaventa;
        fila.insertCell(2).innerHTML = venta.idproducto;
        fila.insertCell(3).innerHTML = venta.descripcion;
        fila.insertCell(4).innerHTML = venta.cantidad;
        fila.insertCell(5).innerHTML = venta.preciou;
        fila.insertCell(6).innerHTML = venta.preciot;
        fila.insertCell(7).innerHTML = venta.idcliente;
        fila.insertCell(8).innerHTML = venta.nombrecliente;
        fila.insertCell(9).innerHTML = venta.vendedor;
        fila.insertCell(10).innerHTML = venta.estadov;
        fila.insertCell(
            11
        ).innerHTML = `<button class="BotonEditar" onclick="editarVenta(${count})"></button>`;
        count++;
    });
}

function iniciar() {
    var ventas = sessionStorage.getItem("ventas");
    if (ventas == null) iniciarVentas();

    poblarTabla();
}