import React from 'react';
import {Link} from 'react-router-dom';
import Logo from 'media/logo_cuadernia.png';

const ModificarVenta = () => {
  return (
    <div>
      <header>
      <ul class = "encabezado">
        <li>
          <img class = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"/>
        </li>
        <li>
            <div class = "tituloPaginaFormulario">EDITAR PRODUCTOS</div>
        </li>
      </ul>
    </header>


  <div className = "contenedorFormulario">
    <ul className = "formulario">
      <li>
        <div class = "contenedorDeDatos">
          <label> Identificador de la venta
          <input type = "number" id = "IDventa" required/>
          </label>
        </div>
      </li>

      <li>
        <div class = "contenedorDeDatos">
          <label> Fecha de la venta
            <input type = "text" id = "fechaventa" required/>
          </label>
        </div>
      </li>

      <li>
        <div class = "contenedorDeDatos">
          <label> ID del producto
            <input type = "text" id = "IDproducto" required/>
          </label>
        </div>
      </li>

      <li>
        <div class = "contenedorDeDatos">
          <label> Descripción del producto
            <input type = "text" id = "descripcion" required/>
          </label>
        </div>
      </li>

      <li>
        <div class = "contenedorDeDatos">
          <label> Cantidad
          <input type = "number" id = "cantidad" required/>
          </label>
        </div>
      </li>

      <li>
        <div class = "contenedorDeDatos">
          <label> Precio unitario
          <input type = "number" id = "preciou" required/>
          </label>
        </div>
      </li>

      <li>
        <div class = "contenedorDeDatos">
          <label> Precio total
          <input type = "number" id = "preciot" required/>
          </label>
        </div>
      </li>

      <li>
        <div class = "contenedorDeDatos">
          <label> ID del cliente
          <input type = "number" id = "IDcliente" required/>
          </label>
        </div>
      </li>

      <li>
        <div class = "contenedorDeDatos">
          <label> Nombre del cliente
            <input type = "text" id = "nombrecliente" required/>
          </label>
        </div>
      </li>

      <li>
        <div class = "contenedorDeDatos">
          <label> Vendedor
            <input type = "text" id = "vendedor" required/>
          </label>
        </div>
      </li>

      <li>
        <div class = "contenedorDeDatos">
          <label>  Estados de la venta
            <input type = "text" id = "estadov" required/>
          </label>
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
            <button className = "boton" type = "button">Guardar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ModificarVenta
