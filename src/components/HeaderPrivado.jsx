import React from 'react'
import Logo from 'images/logo_cuadernia.png';

const HeaderPrivado = ({titulo}) => {
  return (
      <header>
        <ul className = "encabezado">
          <li>
              <img className = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"/>
          </li>
          <li>
              <div className = "tituloPagina">{titulo}</div>
          </li>
        </ul>
      </header>
  )
}

export default HeaderPrivado