import React from 'react'

const MenuInicio = () => {
  return (
    <div>
      <section className="botones">
        <div className="contenedor-logo">
          <img className="logo" alt="Logo de Cuadernia"/>
        </div>
        <ul>
          <div className="containerMainButton">
              <a href="admin_ventas.html"><button  className="mainButton button1">Administrar ventas</button></a>
          </div>
          <div className="containerMainButton">
              <a href="admin_ventas.html"><button  className="mainButton button2">Administrar productos</button></a>
          </div>
          <div className="containerMainButton">
              <a href="gestion_usuarios.html"><button  className="mainButton button3">Administrar usuarios</button></a>
          </div>
        </ul>
      </section>
    </div>
  )
}

export default MenuInicio

