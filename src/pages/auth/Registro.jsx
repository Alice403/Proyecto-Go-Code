import React from 'react'
import Logo from 'images/logo_cuadernia.png';
import logo_google from "images/logo_google_opt.png";
import 'styles/styles-autenticacion.css'

const Registro = () => {
  return (
  <div>
    <section className="login">
      <section className="login__container">
      <h2 > Registrarse </h2>
      <img className = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"></img>
            <form class="login__container--form" action="">
                Nombre de usuario:
                <input class="input" type="text" id="NewUser"/>
                Contraseña:
                <input class="input" type="password" id="NewPassword"/>
                Correo:
                <input class="input" type="email" id="NewEmail"/>
                <button class="button" onclick="msg1();">Regístrate</button>
            </form>
            <section class="login__container--social-media">
                <div><img src = {logo_google} alt="Logo google"></img><a href="#">Regístrate con Google</a></div>
            </section>
            <p class="login__container--register">¿Ya tienes cuenta? <a href="./inicio.html">Inicia sesión</a></p>
      </section>
    </section>
  </div>
  )
}

export default Registro
