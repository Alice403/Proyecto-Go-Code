import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'media/logo_cuadernia.png';

const GestionVentas = () => {
  return (
    <div>
    <header>
      <ul class = "encabezado">
        <li>
          <img class = "logoCuadernia" src = {logo} alt="Logo Cuadernia"></img>
        </li>

        <li>
            <div class = "tituloPagina">MODULO DE VENTAS</div>
        </li>
      </ul>
    </header>

      <ul className = "cuerpo">
        <li>
          <div className = "contenedorBotonAgregar">
            <Link to = '/admin/ventas/editar'>
              <input className = "botonAgregar boton" type= "button" 
              value = "Agregar Venta" />
            </Link>
          </div>
        </li>
        
        <li>
          <div class = "contenedorTabla">
            <table class = "tabla" id="tablaProductos">
              <tr class = "campos">
                <th>ID de la venta</th>
                <th>Fecha de venta</th>
                <th>ID del producto</th>
                <th>Descripción del producto</th>
                <th>Cantidad</th>
                <th>Precio unitario</th>
                <th>Precio total</th>
                <th>ID del cliente</th>
                <th>Nombre del cliente</th>
                <th>Vendedor</th>
                <th>Estados de la venta</th>
                <th>Edición</th>
              </tr>
            </table>
          </div>
        </li>

        <li>
          <div class = "contenedorBotonesSalir">
            <div>
              <Link to = '/admin'>
              <input className = "boton" type= "button" 
              value = "Salir de la Aplicación"/>
              </Link>
            </div>
            <div>
              <Link to = '/'>
                <i class="fas fa-home fa-3x botonHome">
                {/* Si quieres con personita fa-house-user */}
                </i>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default GestionVentas
