import React from 'react';
import {Link} from 'react-router-dom';
import Logo from 'media/logo_cuadernia.png';

const MenuInicio = () => {
  return (
    <div>
      <section className="botones">
        <div className="contenedor-logo">
          <img className="logo" src = {Logo} alt="Logo de Cuadernia"/>
        </div>
        <ul>
          <div className="containerMainButton">
            <Link to='/admin/ventas'><button  className="mainButton button1">
              Administrar ventas</button>
            </Link>
          </div>
          <div className="containerMainButton">
            <Link to='/admin/productos'>
              <button  className="mainButton button2">
              Administrar productos</button>
            </Link>
          </div>
          <div className="containerMainButton">
            <Link to='/admin/usuarios'><button  className="mainButton button3">
              Administrar usuarios</button>
            </Link>
          </div>
        </ul>
      </section>
    </div>
  )
}

export default MenuInicio

