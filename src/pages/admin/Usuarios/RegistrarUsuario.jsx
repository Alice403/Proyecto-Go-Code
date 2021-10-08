import React from 'react';
import {Link} from 'react-router-dom';
import Logo from 'media/logo_cuadernia.png';

const RegistrarUsuario = () => {
  return (
    <div>
      <header>
            <ul className ="encabezado">
                <li>
                  <img className = "logoCuadernia" src= {Logo} alt="Logo Cuadernia"/>
                </li>
                <li>
                    <div className="tituloPaginaFormulario">REGISTRO DE USUARIO</div>
                </li>
            </ul>
        </header>

        <div className = "contenedorFormulario">
            <ul className = "formulario">
              <li>
                <div className = "contenedorDeDatos">
                  <label> ID usuario
                    <input type = "number" id = "ID" required/>
                  </label>
                </div>
              </li>
        
              <li>
                <div class = "contenedorDeDatos">
                  <label> Nombre del usuario
                    <input type = "text" id = "nombre" required/>
                  </label>
                </div>
              </li>
        
              <li>
                <div class = "contenedorDeDatos">
                  <label> Apellido del usuario
                    <input type = "text" id = "apellido" required/>
                  </label>
                </div>
              </li>
        
              <li>
                <div class = "contenedorDeDatos">
                  <label> Tipo de usuario
                    <select name="tipo usuario" id="tipo">
                        <option value="vendedor">Vendedor</option>
                        <option value="administrador">Administrador</option>
                    </select>
                  </label>
                </div>
              </li>

              <li>
                <div class = "contenedorDeDatos">
                  <label> Estado del usuario
                    <select name="estado usuario" id="estado">
                        <option value="autorizado">Autorizado</option>
                        <option value="no autorizado">No autorizado</option>
                        <option value="pendiente">Pendiente</option>
                    </select>
                  </label>
                </div>
              </li>
            </ul>
          </div>

          <div className = "contenedorBotonesGuardar">
        <div>
          <Link to = '/admin/usuarios'>
            <input className = "boton" type= "button" value = "Regresar" />
          </Link>
        </div>
        <div>
          <Link to = '/admin/usuarios'>
            <button className = "boton" type = "button">Guardar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegistrarUsuario
