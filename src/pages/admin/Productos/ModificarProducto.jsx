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
            <label>Descripción del producto</label>
            <div className = "contenedorDeDatos">
                <input type = "text" className = "dato" id = "descripcion" required/>
            </div>
          </li>

          <li>
            <label>Valor Unitario</label>
            <div className = "contenedorDeDatos">
                <input type = "number" min = "0" className = "dato" id = "valor_unitario" required/>
            </div>
          </li>

          <li>
            <label>¿Disponible?</label>
            <div className = "contenedorDeDatos">
                <select required name="disponibilidad" id="esta_disponible">
                      <option disabled value={0} selected>Seleccione una opción</option>
                      <option value = "si">Sí</option>
                      <option value = "no">No</option>
                </select>
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
            <input className = "boton" type = "button" value = "Guardar" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ModificarProducto
