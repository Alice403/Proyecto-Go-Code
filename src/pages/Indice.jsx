import React from 'react'
import { Link } from 'react-router-dom'

const Indice = () => {
  return (
    <div>
        Página principal
        <br>
        </br>
          <Link to = '/admin'>
        <button className = 'boton'>
          Ir al panel administrativo
        </button>
          </Link>
    </div>
  )
}

export default Indice
