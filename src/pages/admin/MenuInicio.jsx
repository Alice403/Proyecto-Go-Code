import React from 'react';
import {Link} from 'react-router-dom';
import logo from 'media/logo_cuadernia.png';

const MenuInicio = () => {
  return (
    <div>
      <section className="botones">
        <div className="contenedor-logo">
          <img className="logo" src = {logo} alt="Logo de Cuadernia"/>
        </div>
        <ul>
          <div className="containerMainButton">
          <div>
              <Link to = '/admin/ventas'>
              <input className = "mainButton button1" type= "button" 
              value = "Administrar ventas"/>
              </Link>
            </div>
          </div>
          <div className="containerMainButton">
          <div>
              <Link to = '/admin/productos'>
              <input className = "mainButton button2" type= "button" 
              value = "Administrar productos"/>
              </Link>
            </div>
          </div>
          <div className="containerMainButton">
          <div>
              <Link to = '/admin/usuarios'>
              <input className = "mainButton button3" type= "button" 
              value = "Administrar usuarios"/>
              </Link>
            </div>
          </div>
        </ul>
      </section>
    </div>
  )
}

export default MenuInicio

