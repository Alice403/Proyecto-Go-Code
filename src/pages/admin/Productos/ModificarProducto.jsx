import React from 'react';
import {Link} from 'react-router-dom';
import Logo from 'media/logo_cuadernia.png';

const ModificarProducto = () => {
  return (
    <div>
      <header>
        <ul className = "encabezado">
          <li>
              <img className = "logoCuadernia" src= {Logo} alt="Logo Cuadernia"/>
          </li>
          <li>
              <div className = "tituloPaginaFormulario">EDITAR PRODUCTOS</div>
          </li>
        </ul>
      </header>

      <div className = "contenedorFormulario">
        <ul className = "formulario">
          <li>
            <div className = "contenedorDeDatos">
              <label> Identificador del producto
              <input type = "number" id = "ID" required/>
              </label>
            </div>
          </li>

          <li>
            <div className = "contenedorDeDatos">
              <label> Descripción del producto
                <input type = "text" id = "descripcion" required/>
              </label>
            </div>
          </li>

          <li>
            <div className = "contenedorDeDatos">
              <label> Valor Unitario
                <input type = "number" id = "valor_unitario" required/>
              </label>
            </div>
          </li>

          <li>
            <div className = "contenedorDeDatos">
              <label> ¿Disponible?
                <input type = "text" id = "esta_disponible" required/>
              </label>
            </div>
          </li>
        </ul>
      </div>

      <div className = "contenedorBotonesGuardar">
        <div>
          <Link to = '/admin/productos'>
            <input className = "boton" type= "button" value = "Regresar" />
          </Link>
        </div>
        <div>
          <Link to = '/admin/productos'>
            <button className = "boton" type = "button">Guardar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ModificarProducto
