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
                <label>Nombres</label>
                <div className = "contenedorDeDatos">
                  <input type = "text" className = "dato" id = "nombre" required/>
                </div>
              </li>
        
              <li>
                <label>Apellidos</label>
                <div className = "contenedorDeDatos">
                  <input type = "text" className = "dato" id = "apellido" required/>
                </div>
              </li>
        
              <li>
                <label> Tipo de usuario</label>
                <div className = "contenedorDeDatos">
                    <select required name="tipo usuario" id="tipo">
                      <option disabled value={0} selected>Seleccione una opción</option>
                      <option value = "vendedor">Vendedor</option>
                      <option value = "administrador">Administrador</option>
                    </select>
                </div>
              </li>

              <li>
                <label> Estado del usuario</label>
                <div className = "contenedorDeDatos">
                    <select required name="estado usuario" id="estado">
                      <option disabled value={0} selected>Seleccione una opción</option>
                      <option value = "autorizado">Autorizado</option>
                      <option value = "no_autorizado">No autorizado</option>
                      <option value = "pendiente">Pendiente</option>
                    </select>
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
            <input className = "boton" type = "button" value = "Guardar"/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegistrarUsuario
