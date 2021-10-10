import React from 'react';
import {Link} from 'react-router-dom';
import Logo from 'images/logo_cuadernia.png';
import {Helmet} from 'react-helmet';

const GestionUsuarios = () => {
  return (
    <div>
      <Helmet>
          <title>Gestionar Usuarios</title>
      </Helmet>
        <header>
            <ul className="encabezado">
                <li>
                <img className = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"></img>
                </li>
                <li>
                    <div className="tituloPagina">GESTIÓN DE USUARIOS</div>
                </li>
            </ul>
        </header>

        <ul className="cuerpo">
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
                            <th scope="col">ID Usuario</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellidos</th>
                            <th scope="col">Tipo de usuario</th>
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
                      <i className="fas fa-home fa-3x botonHome">
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

export default GestionUsuarios
