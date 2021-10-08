import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'media/logo_cuadernia.png';

const GestionUsuarios = () => {
  return (
    <div>
        <header>
            <ul class="encabezado">
                <li>
                <img class = "logoCuadernia" src = {logo} alt="Logo Cuadernia"></img>
                </li>
                <li>
                    <div class="tituloPagina">GESTIÓN DE USUARIOS</div>
                </li>
            </ul>
        </header>

        <ul class="cuerpo">
            <li>
                <div className = "contenedorBotonAgregar">
                  <Link to = '/admin/usuarios/editar'>
                  <input className = "botonAgregar boton" type= "button" 
                  value = "Agregar Usuario" />
                  </Link> 
                </div>
            </li>
            <li>
                <div className= "contenedorTabla">
                    <table className ="tabla" id="tablaUsuarios">
                        <tr className = "campos">
                            <th scope="col">Usuario</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Tipo de Usuario</th>
                            <th scope="col">Estado del usuario</th>
                            <th scope="col">Edición</th>
                        </tr>
                        <tbody></tbody>
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

export default GestionUsuarios
