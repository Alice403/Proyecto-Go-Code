import {React, useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import HeaderPrivado from 'components/HeaderPrivado';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const getToken = ()=>{
  return `Bearer ${localStorage.getItem('token')} `; 
}

const ModificarVenta = () => {
  const form = useRef(null);
  const [borrarDatos, setBorrarDatos] = useState(false)

  useEffect(() => {
    if (borrarDatos){
      document.getElementById("cantidad").value = '';
      document.getElementById("preciou").value = '';
      document.getElementById("preciot").value = '';
      document.getElementById("fechaventa").value = '';
      document.getElementById("IDcliente").value = '';
      document.getElementById("nombrecliente").value = '';
      document.getElementById("vendedor").value = '';
      document.getElementById("estadov").value = '';
      setBorrarDatos(!borrarDatos);
    }
  },[borrarDatos]);

  const submitForm = async (e) => {
    e.preventDefault();
    const datos_formulario = new FormData(form.current);

    const nuevaVenta = {};
    datos_formulario.forEach((value, key) => {
    nuevaVenta[key] = value;
    });
    console.log(nuevaVenta)
  
    const options = {
      method: 'POST',
      url: 'https://hidden-cliffs-11953.herokuapp.com/ventas/nueva/',
      headers: { 'Content-Type': 'application/json', Authorization: getToken()},
      data: {
        cantidad: nuevaVenta.cantidad, 
        valor_unitario: nuevaVenta.valor_unitario, 
        valor_total: nuevaVenta.valor_total,
        fecha_venta: nuevaVenta.fecha_venta,
        id_cliente: nuevaVenta.id_cliente,
        nombre_cliente: nuevaVenta.nombre_cliente,
        vendedor: nuevaVenta.vendedor,
        estado_venta: nuevaVenta.estado_venta},
    };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      setBorrarDatos(!borrarDatos);
      toast.success('Venta agregada con éxito');
    })
    .catch(function (error) {
      console.error(error);
      toast.error('Error creando una venta');
    });
  }
  return (
    <div>
      <HeaderPrivado titulo = {'Registrar Venta'.toUpperCase()}/>

      <div className = "contenedorFormulario">
        <form id = "formulario" ref={form} onSubmit={submitForm}> 
          <ul className = "listaFormulario">

          {/* <li></li>
          <li></li> ELEMENTOS PARA AGREGAR IDS (INMUTABLES) */}

          <li>
            <label>Cantidad</label>
            <div className = "contenedorDeDatos">
              <input name = "cantidad"
              type = "number" min = "0" className = "dato" id = "cantidad" required/>
            </div>
          </li>

          <li>
            <label>Valor unitario</label>
            <div className = "contenedorDeDatos">
              <input name = "valor_unitario"
              type = "number" min = "0"  className = "dato" id = "preciou" required/>
            </div>
          </li>

          <li>
            <label>Valor total</label>
            <div className = "contenedorDeDatos">
              <input name = "valor_total"
              type = "number" min = "0" className = "dato" id = "preciot" required/>
            </div>
          </li>

          <li>
            <label>Fecha de la venta</label>
            <div className = "contenedorDeDatos">
              <input name = "fecha_venta"
              type = "date"  className = "dato" id = "fechaventa" required/>
            </div>
          </li>
        
          <li>
            <label>ID del cliente</label>
            <div className = "contenedorDeDatos">
              <input name = "id_cliente"
              type = "number"  min = "0" className = "dato" id = "IDcliente" required/>
            </div>
          </li>

          <li>
            <label>Nombre del cliente</label>
            <div className = "contenedorDeDatos">
                <input name = "nombre_cliente"
                type = "text" className = "dato" id = "nombrecliente" required/>
            </div>
          </li>

          <li>
            <label>Vendedor</label>
            <div className = "contenedorDeDatos">
                <input name = "vendedor"
                type = "text" className = "dato" id = "vendedor" required/>
            </div>
          </li>

          <li>
            <label>Estados de la venta</label>
            <div className = "contenedorDeDatos">
                <select name="estado_venta"
                  id="estadov" required>
                  <option disabled value = '' selected>Seleccione una opción</option>
                  <option value = "En proceso">En proceso</option>
                  <option value = "Entregada">Entregada</option>
                  <option value = "Cancelada">Cancelada</option>
                </select>
              </div>
            </li>
          </ul>
        </form>
      </div>

      <div className = "contenedorBotonesGuardar">
        <div>
          <Link to = '/admin/ventas'>
            <input className = "boton" type= "button" value = "Regresar" />
          </Link>
        </div>
        <div>
          <button className = "boton" form = "formulario" 
          type = 'submit'>Guardar</button>
        </div>
      </div>

      <ToastContainer position='bottom-center' autoClose={4000} />
    </div>
  )
}

export default ModificarVenta
