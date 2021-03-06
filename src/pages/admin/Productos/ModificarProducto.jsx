import {React, useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import HeaderPrivado from 'components/HeaderPrivado';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const getToken = ()=>{
  return `Bearer ${localStorage.getItem('token')} `; 
}

const ModificarProducto = () => {
  const form = useRef(null);
  const [borrarDatos, setBorrarDatos] = useState(false)

  useEffect(() => {
    if (borrarDatos){
      document.getElementById("descripcion").value = '';
      document.getElementById("valor").value = '';
      document.getElementById("esta_disponible").value = '';
      setBorrarDatos(!borrarDatos)
    }
  },[borrarDatos]);

  const submitForm = async (e) => {
    e.preventDefault();
    const datos_formulario = new FormData(form.current);

    const nuevoProducto = {};
    datos_formulario.forEach((value, key) => {
    nuevoProducto[key] = value;
    });
    console.log(nuevoProducto)

    const options = {
      method: 'POST',
      url: 'https://hidden-cliffs-11953.herokuapp.com/productos/nuevo/',
      headers: { 'Content-Type': 'application/json',Authorization: getToken() },
      data: {
        descripcion_producto: nuevoProducto.descripcion_producto, 
        valor_unitario: nuevoProducto.valor_unitario, 
        disponibilidad: nuevoProducto.disponibilidad},
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setBorrarDatos(!borrarDatos)
        toast.success('Producto agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un producto');
      });
  }

  return (
    <div>
      <HeaderPrivado titulo = {'Registrar Producto'.toUpperCase()}/>

      <div className = "contenedorFormulario">
        <form id = "formulario" ref = {form} onSubmit={submitForm}> 
          <ul className = "listaFormulario">

        {/* <li></li> ELEMENTO PARA AGREGAR LAS ID (INMUTABLE) */}

            <li>
              <label>Descripción del producto</label>
              <div className = "contenedorDeDatos">
                  <input name = "descripcion_producto"
                  type = "text" className = "dato" id = "descripcion" 
                  required/>
              </div>
            </li>

            <li>
              <label>Valor Unitario</label>
              <div className = "contenedorDeDatos">
                  <input name = "valor_unitario"
                  type = "number" min = "0" className = "dato" id = "valor" 
                  required/>
              </div>
            </li>

            <li>
              <label>¿Disponible?</label>
              <div className = "contenedorDeDatos">
                  <select name="disponibilidad" 
                  id="esta_disponible" required>
                    <option disabled value= '' selected>Seleccione una opción</option>
                    <option value = "Sí">Sí</option>
                    <option value = "No">No</option>
                  </select>
              </div>
            </li>
          </ul>
        </form>
      </div>

      <div className = "contenedorBotonesGuardar">
        <div>
          <Link to = '/admin/productos'>
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
};

export default ModificarProducto