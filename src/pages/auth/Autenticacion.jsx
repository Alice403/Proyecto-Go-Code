import React from 'react'
import Logo from 'images/logo_cuadernia.png';
import logo_google from "images/logo_google_opt.png";
import 'styles/styles-autenticacion.css'

const Autenticacion = () => {
  return (
  <div>
    <section className="login">
      <section className="login__container">
        <h2 > Iniciar sesión </h2>
        <img className = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"></img>
            <form className="login__container--form" action="">
                Usuario:
                <input className="input" type="text" id="UserInput"/> 
                Contraseña:
                <input className="input" type="password" id="UserPassword"/>
                <button className="button" onclick="msg();">Ingresar</button>
                <div className="login__container--remember">
                    <a href="#"> ¿Olvidó su contraseña? </a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src = {logo_google} alt="Logo google"></img><a href="#">Inicia sesión con Google</a></div>
            </section>
            <p className="login__container--register">¿No tienes ninguna cuenta? <a href="./registro.html">Regístrate</a></p>
        </section>
    </section>
  </div>
  )
}

export default Autenticacion
