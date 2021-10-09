import React from 'react';
import {Link} from 'react-router-dom';
import Logo from 'images/logo_cuadernia.png';
import {Helmet} from "react-helmet";

const AdminProductos = () => {
  return (
    <div>
      <Helmet>
          <title>Administrador de Productos</title>
      </Helmet>
      
    <header>
      <ul class = "encabezado">
        <li>
            <img class = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"/>
        </li>
        <li>
            <div class = "tituloPagina">ADMINISTRADOR DE PRODUCTOS</div>
        </li>
      </ul>
    </header>

      <ul className = "cuerpo">
        <li>
          <div className = "contenedorBotonAgregar">
            <Link to = '/admin/productos/editar'>
              <input className = "botonAgregar boton" type= "button" 
              value = "Agregar Producto" />
            </Link>
          </div>
        </li>
        
        <li>
          <div className = "contenedorTabla">
            <table className = "tabla" id="tablaProductos">
              <tr className = "campos">
                <th>ID Producto</th>
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

export default AdminProductos;
