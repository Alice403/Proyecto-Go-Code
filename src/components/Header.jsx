import React from 'react'
import Logo from 'images/logo_cuadernia.png';

const Header = (Titulo) => {
  return (
    <div>
      <header>
        <ul className="encabezado">
          <li>
          <img className = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"></img>
          </li>
          <li>
              <div className="tituloPagina">{Titulo}</div>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
