import React from 'react';
import {link} from 'react-router-dom';
import 'styles/styles.css';

const GestionUsuarios = () => {
  return (
    <div>
      <body>
        <header>
            <ul class="encabezado">
                <li>
                    <img
                        class="logoCuadernia"
                        src="./media/logo_cuadernia.png"
                        alt="Logo Cuadernia"
                    />
                </li>
                <li>
                    <div class="tituloPagina">GESTIÓN DE USUARIOS</div>
                </li>
            </ul>
        </header>

        <ul class="cuerpo">
            <li>
                <div className = "contenedorBotonAgregar">
                    <input className = "botonAgregar boton" type= "button" 
                    onclick = "agregarUsuario();"  
                    value = "Agregar usuario" /> 
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
                            <th scope="col">Herramientas</th>
                        </tr>
                        <tbody></tbody>
                    </table>
                </div>
            </li>
            
            <li>
                <div className = "contenedorBotonesSalir">
                  <div>
                    <input className = "boton" type= "button" 
                    onclick = "location.href = ('./menu_inicio.html');" 
                    value = "Salir de la Aplicación"/>
                  </div>
                  <div>
                    <input className = "boton botonHome" type= "button" 
                    onclick = "location.href = ('./menu_inicio.html');"/> 
                  </div>
                </div>
              </li>
            </ul>

    
        <footer class="footer"></footer>
    </body>
    </div>
  )
}

export default GestionUsuarios
