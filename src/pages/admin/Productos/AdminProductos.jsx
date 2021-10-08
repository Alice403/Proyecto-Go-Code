import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'media/logo_cuadernia.png';

const AdminProductos = () => {
  return (
    <div>
    <header>
      <ul class = "encabezado">
        <li>
            <img class = "logoCuadernia" src = {logo} alt="Logo Cuadernia"></img>
        </li>
        <li>
            <div class = "tituloPagina">ADMINISTRADOR DE PRODUCTOS</div>
        </li>
      </ul>
    </header>

      <ul className = "cuerpo">
        <li>
          <div className = "contenedorBotonAgregar">
            <input className = "botonAgregar boton" type= "button" 
            onclick = "agregarProducto();"  
            value = "Agregar Producto" />
          </div>
        </li>
        
        <li>
          <div className = "contenedorTabla">
            <table className = "tabla" id="tablaProductos">
              <tr className = "campos">
                <th>Identificador del producto</th>
                <th>Descripción del producto</th>
                <th>Valor Unitario</th>
                <th>¿Disponible?</th>
                <th>Edición</th>
              </tr>
            </table>
          </div>
        </li>

        <li>
          <div className = "contenedorBotonesSalir">
            <div>
              <Link to = '/admin'>
              <input className = "boton" type= "button" 
              value = "Salir de la Aplicación"/>
              </Link>
            </div>
            <div>
              <Link to = '/'>
              <input className = "boton botonHome" type= "button" />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default AdminProductos;
