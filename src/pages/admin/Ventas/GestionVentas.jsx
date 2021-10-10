import {React, useEffect,useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import Logo from 'images/logo_cuadernia.png';
import { Helmet } from 'react-helmet';
import { nanoid } from 'nanoid';
import axios from 'axios';

const GestionVentas = () => {
  const [ventas, setVentas] = useState([]);
  return (
    <div>
      <Helmet>
          <title>Gestionar Ventas</title>
      </Helmet>

    <header>
      <ul className = "encabezado">
        <li>
          <img className = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"></img>
        </li>

        <li>
            <div className = "tituloPagina">GESTIÓN DE VENTAS</div>
        </li>
      </ul>
    </header>

      <ul className = "cuerpo">
        <li>
          <div className = "contenedorBotonAgregar">
            <Link to = '/admin/ventas/editar'>
              <input className = "botonAgregar boton" type= "button" 
              value = "Agregar Venta" />
            </Link>
          </div>
        </li>
        
        <li>
          <div className = "contenedorTabla">
            <table className = "tabla" id="tablaVentas">
              <thead className = "campos">
                <th>ID Venta</th>
                <th>ID Producto</th>
                <th>Cantidad</th>
                <th>Valor unitario</th>
                <th>Valor total</th>
                <th>Fecha de venta</th>
                <th>ID del cliente</th>
                <th>Nombre del cliente</th>
                <th>Vendedor</th>
                <th>Estado de la venta</th>
                <th>Edición</th>
              </thead>
              <tbody>
                {/* {ventasFiltrados.map((vehiculo) => {
                  return (
                    <FilaVehiculo
                      key={nanoid()}
                      vehiculo={vehiculo}
                      setEjecutarConsulta={setEjecutarConsulta}
                    />
                  );
                })} */}
              </tbody>
            </table>
          </div>
        </li>

        <li>
          <div className = "contenedorBotonesSalir">
            <div>
              <Link to = '/admin'>
              <input className = "boton" type= "button" 
              value = "Salir de la Aplicación"/>
              </Link>
            </div>
            <div>
              <Link to = '/'>
                <i className="fas fa-home fa-3x botonHome">
                {/* Si quieres con personita fa-house-user */}
                </i>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default GestionVentas
