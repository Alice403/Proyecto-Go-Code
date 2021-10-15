import React from 'react'
import Logo from 'images/logo_cuadernia.png';
import Cuadernia from 'images/AzulClaro.png';
import Cuaderno from 'images/inicio.jpg';
import Cuaderno2 from 'images/inicio2.jpg';
import Cuaderno3 from 'images/inicio3.jpg';
import { useAuth0 } from "@auth0/auth0-react";

<title>Cuadernia</title>

  
const Indice = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div className = 'cuerpoIndice'>
         
            <section className="panelLog">

            <i  className="fas fa-shopping-cart"></i>
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
                    <li> <img className = "tituloCuadernia" src = {Cuadernia} alt="LetreroCuadernia"></img></li>
                    <li><h2>Escribe tus sueños y hazlos realidad</h2></li>
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
                <li><button className="botonTipoCuaderno">Tipo de cuaderno</button></li>
                <li><button className="botonRayado">Tipo de Rayado</button></li>
                <li><button className="botonPortada">Portada</button></li>
                <li><button className="botonNumero">Numero de Hojas</button></li>
                <li><button className="botonPrecio">Precio</button></li>
              </ul>
            </div>

            <div>
              <ul>
                <li><h4>CUADERNO PERSONALIZADO 1</h4></li>
                <li><img className = "CuadernoInicio" src = {Cuaderno} alt="Cuaderno1"></img></li>
              </ul>
            </div>

            <div>
              <ul>
                <li><h4>CUADERNO PERSONALIZADO 2</h4></li>
                <li><img className = "CuadernoInicio" src = {Cuaderno2} alt="Cuaderno2"></img></li>
              </ul>
            </div>
            
            <div>
              <ul>
                <li><h4>CUADERNO PERSONALIZADO 3</h4></li>
                <li><img className = "CuadernoInicio" src = {Cuaderno3} alt="Cuaderno3"></img></li>
              </ul>
            </div>
            </section>




    </div>
    
  )
}

export default Indice
