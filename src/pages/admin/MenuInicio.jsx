import React from 'react';
import {Link} from 'react-router-dom';
import Logo from 'images/logo_cuadernia.png';
import {Helmet} from 'react-helmet';
import { useAuth0 } from "@auth0/auth0-react";

const MenuInicio = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <Helmet>
        <title>Admin Cuadernia</title>
      </Helmet>

      <div className="contenedorLogo">
        <img className="logo" src = {Logo} alt="Logo de Cuadernia"/>
      </div>

      <ul className = "listaBotonesMenu">
        <div className = "contenedorBotonesMenu">
          <li>
            <Link to='/admin/ventas'>
              <input className = "botonMenu boton1" type= "button" 
              value = "Administrar ventas"/>
            </Link>
          </li>
          <li>
            <Link to='/admin/productos'>
              <input className = "botonMenu boton2" type= "button" 
              value = "Administrar productos"/>
            </Link>
          </li>
          <li>
            <Link to='/admin/usuarios'>
              <input className = "botonMenu boton3" type= "button" 
              value = "Administrar usuarios"/>
            </Link>
          </li>
        </div>
      </ul>

      <div className="contenedorBotonesSalir">
      <button className = "botonOut2" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar sesión</button>
      <Link to = '/'>
        <i className="fas fa-home fa-3x botonSalir">

        </i>
      </Link>
      </div>

    </div>
  )
}

export default MenuInicio

