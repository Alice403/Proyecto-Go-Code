import React from 'react';
import {Link} from 'react-router-dom';
import Logo from 'images/logo_cuadernia.png';

const ModificarVenta = () => {
  return (
    <div>
      <header>
      <ul class = "encabezado">
        <li>
          <img class = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"/>
        </li>
        <li>
            <div class = "tituloPaginaFormulario">EDITAR VENTAS</div>
        </li>
      </ul>
    </header>

  <div className = "contenedorFormulario">
    <ul className = "formulario">

    {/* <li></li>
    <li></li> ELEMENTOS PARA AGREGAR IDS (INMUTABLES) */}


      <li>
        <label>Cantidad</label>
        <div class = "contenedorDeDatos">
          <input type = "number" min = "0" className = "dato" id = "cantidad" required/>
        </div>
      </li>

      <li>
        <label> Precio unitario</label>
        <div class = "contenedorDeDatos">
          <input type = "number" min = "0"  className = "dato" id = "preciou" required/>
        </div>
      </li>

      <li>
        <label> Precio total</label>
        <div class = "contenedorDeDatos">
          <input type = "number" min = "0" className = "dato" id = "preciot" required/>
          
        </div>
      </li>

      <li>
        <label> Fecha de la venta</label>
        <div class = "contenedorDeDatos">
            <input type = "date"  className = "dato" id = "fechaventa" required/>
        </div>
      </li>
      
      <li>
        <label> ID del cliente</label>
        <div class = "contenedorDeDatos">
          <input type = "number"  min = "0" className = "dato" id = "IDcliente" required/>
        </div>
      </li>

      <li>
        <label> Nombre del cliente</label>
        <div class = "contenedorDeDatos">
            <input type = "text" className = "dato" id = "nombrecliente" required/>
        </div>
      </li>

      <li>
        <label> Vendedor</label>
        <div class = "contenedorDeDatos">
            <input type = "text" className = "dato" id = "vendedor" required/>
        </div>
      </li>

      <li>
        <label>  Estados de la venta</label>
        <div class = "contenedorDeDatos">
            <select required name="estado_venta" id="estadov">
              <option disabled value={0}>Seleccione una opción</option>
              <option value = "pendiente">En proceso</option>
              <option value = "entrega">Entregada</option>
              <option value = "cancelada">Cancelada</option>
            </select>
        </div>
      </li>

    </ul>
  </div>

  <div className = "contenedorBotonesGuardar">
        <div>
          <Link to = '/admin/ventas'>
            <input className = "boton" type= "button" value = "Regresar" />
          </Link>
        </div>
        <div>
          <Link to = '/admin/ventas'>
            <input className = "boton" type = "button" value = "Guardar"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ModificarVenta
