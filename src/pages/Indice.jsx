import React from 'react'
import Logo from 'images/logo_cuadernia.png';
import Cuaderno from 'images/inicio.jpg';
import { useAuth0 } from "@auth0/auth0-react";

<title>Cuadernia</title>

  
const Indice = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div>
         
            <section className="panelLog">

            <i className="fas fa-shopping-cart"></i>
            <button className = "botonIn"onClick= {() => loginWithRedirect()}>Log In</button>
            <button className = "botonOut" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>

            </section>

            <section>
                <div className="contenedorNavBar">
                    <div></div>
                    <div></div>
                    <div>INICIO</div>
                    <div>TIENDA</div>
                    <div>SERVICIOS</div>
                    <div>CONTACTO</div>
                    <div></div>
                    <div></div>
                </div>

            </section>

            <section>
              <div className="contenedorLogoPrincipal">
                <div className="contenedorTienda">
                  <ul>
                    <li><h1>TIENDA</h1></li>
                    <li>¿Quieres comprar?</li>
                  </ul>
                </div>

                <div>
                 <ul>
                    <li><h1 className="tituloCuadernia">CUADERNIA</h1></li>
                    <li>Escribe tus sueños y hazlos realidad</li>
                  </ul>
                </div>

                <div>
                <img className = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"></img>
                </div>

              </div>

            </section>

            <section className="contenedorCuaderno">
            <div>
              <ul>
                <li><button className="botonIndice">Tipo de cuaderno</button></li>
                <li><button className="botonIndice">Tipo de Rayado</button></li>
                <li><button className="botonIndice">Portada</button></li>
                <li><button className="botonIndice">Numero de Hojas</button></li>
                <li><button className="botonIndice">Precio</button></li>
              </ul>
            </div>

            <div>
              <ul>
                <li>CUADERNO PERSONALIZADO 1</li>
                <li><img className = "CuadernoInicio" src = {Cuaderno} alt="Cuaderno1"></img></li>
              </ul>
            </div>

            <div>
              <ul>
                <li>CUADERNO PERSONALIZADO 2</li>
                <li><img className = "CuadernoInicio" src = {Cuaderno} alt="Cuaderno1"></img></li>
              </ul>
            </div>
            
            <div>
              <ul>
                <li>CUADERNO PERSONALIZADO 3</li>
                <li><img className = "CuadernoInicio" src = {Cuaderno} alt="Cuaderno1"></img></li>
              </ul>
            </div>
            </section>




    </div>
    
  )
}

export default Indice
