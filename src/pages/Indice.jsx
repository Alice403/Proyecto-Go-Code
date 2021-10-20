import React from 'react'
import Logo from 'images/logo_cuadernia.png';
import Cuadernia from 'images/AzulClaro.png';
import Cuaderno from 'images/inicio.jpg';
import Cuaderno2 from 'images/inicio2.jpg';
import Cuaderno3 from 'images/inicio3.jpg';
import { useAuth0 } from "@auth0/auth0-react";
 
const Indice = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  const cerrarSesion = () =>{
    logout({ returnTo: window.location.origin });
    localStorage.setItem('token', null);
  }
  
  return (
    <div className = 'cuerpoIndice'>
      <section className="panelLog">
        <i  className="fas fa-shopping-cart"></i>
        <button className = "botonIn"onClick= {() => loginWithRedirect()}>Iniciar sesión</button>
        <button className = "botonOut" onClick={() => cerrarSesion()}>Cerrar sesión</button>

        <div className="contenedorNavBar">
          <div>INICIO</div>
          <div>TIENDA</div>
          <div>SERVICIOS</div>
          <div>CONTACTO</div>
        </div>
      </section>

      <section className = 'cuerpoInicio'>
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
            </ul>
          </div>
          <div>
          <img className = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"></img>
          </div>
        </div>

        <h2 className = 'textoIntermedio'>Escribe tus sueños y hazlos realidad</h2>
        <div className="contenedorCuaderno">
          <div>
            <ul className = 'barraOpciones'>
              <li><button className="botonTipoCuaderno botonCuaderno">Tipo de cuaderno</button></li>
              <li><button className="botonRayado botonCuaderno">Tipo de Rayado</button></li>
              <li><button className="botonPortada botonCuaderno">Portada</button></li>
              <li><button className="botonNumero botonCuaderno">Numero de Hojas</button></li>
              <li><button className="botonPrecio botonCuaderno">Precio</button></li>
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
        </div>
      </section>
    </div>
    
  )
}

export default Indice