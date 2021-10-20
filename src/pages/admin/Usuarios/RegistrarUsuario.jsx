import {React, useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import HeaderPrivado from 'components/HeaderPrivado';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const getToken = ()=>{
  return `Bearer ${localStorage.getItem('token')} `; 
}

const RegistrarUsuario = () => {
  const form = useRef(null);
  const [borrarDatos, setBorrarDatos] = useState(false)

  useEffect(() => {
    if (borrarDatos){
      document.getElementById("nombre_id").value = '';
      document.getElementById("apellido_id").value = '';
      document.getElementById("tipo").value = '';
      document.getElementById("estado").value = '';
      setBorrarDatos(!borrarDatos)
    }
  },[borrarDatos]);

  const submitForm = async (e) => {
    e.preventDefault();
    const datos_formulario = new FormData(form.current);

    const nuevoUsuario = {};
    datos_formulario.forEach((value, key) => {
    nuevoUsuario[key] = value;
    });
    console.log(nuevoUsuario)
  
    const options = {
      method: 'POST',
      url: 'https://hidden-cliffs-11953.herokuapp.com/usuarios/registro',
      headers: { 'Content-Type': 'application/json',Authorization: getToken() },
      data: {
        nombre: nuevoUsuario.nombre, 
        apellidos: nuevoUsuario.apellidos, 
        tipo_usuario: nuevoUsuario.tipo_usuario,
        estado_usuario: nuevoUsuario.estado_usuario},
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setBorrarDatos(!borrarDatos)
        toast.success('Usuario agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un usuario');
      });
  }

  return (
    <div>
      <HeaderPrivado titulo = {'Registrar Usuario'.toUpperCase()}/>

      <div className = "contenedorFormulario">
        <form id = "formulario" ref={form} onSubmit={submitForm}> 
          <ul className = "listaFormulario">

        {/* <li></li> ELEMENTO PARA AGREGAR LAS ID (INMUTABLE) */}

            <li>
              <label>Nombres</label>
              <div className = "contenedorDeDatos">
                <input name = "nombre"
                type = "text" className = "dato" id = "nombre_id" required/>
              </div>
            </li>
      
            <li>
              <label>Apellidos</label>
              <div className = "contenedorDeDatos">
                <input name = "apellidos"
                  type = "text" className = "dato" id = "apellido_id" required/>
              </div>
            </li>
      
            <li>
              <label> Tipo de usuario</label>
              <div className = "contenedorDeDatos">
                  <select name="tipo_usuario" 
                  id="tipo" required>
                    <option disabled value= '' selected>Seleccione una opción</option>
                    <option value = "Vendedor">Vendedor</option>
                    <option value = "Administrador">Administrador</option>
                  </select>
              </div>
            </li>

            <li>
              <label> Estado del usuario</label>
              <div className = "contenedorDeDatos">
                  <select name="estado_usuario" 
                  id="estado" required>
                    <option disabled value= '' selected>Seleccione una opción</option>
                    <option value = "Autorizado">Autorizado</option>
                    <option value = "No autorizado">No autorizado</option>
                    <option value = "Pendiente">Pendiente</option>
                  </select>
              </div>
            </li>
          </ul>
        </form>
      </div>

      <div className = "contenedorBotonesGuardar">
        <div>
          <Link to = '/admin/usuarios'>
            <input className = "boton" type= "button" value = "Regresar" />
          </Link>
        </div>
        <div>
          <button className = "boton" form = "formulario" 
          type = 'submit'>Guardar</button>
        </div>
      </div>

      <ToastContainer position='bottom-center' autoClose={4000} />
    </div>
  )
}

export default RegistrarUsuario
