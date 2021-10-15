import {React, useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from 'images/logo_cuadernia.png';
import { Helmet } from 'react-helmet';
import {obtenerVentas} from 'utils/get';
import { Dialog, Tooltip } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import axios from 'axios';


const GestionVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    if (ejecutarConsulta) {
      obtenerVentas(setVentas);
      setEjecutarConsulta(false);
    }
  },[ejecutarConsulta]);

  return (
    <div>
      <Helmet>
          <title>Gestionar Ventas</title>
      </Helmet>
    <div>
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
    </div>

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
            <Tabla listaVentas = {ventas}
             setEjecutarConsulta = {setEjecutarConsulta}/>
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
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
  )
}

const Tabla = ({listaVentas,setEjecutarConsulta}) => {
  const [busqueda, setBusqueda] = useState('');
  const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

  useEffect(() => {
    setVentasFiltradas(
      listaVentas.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaVentas]);

  return (
    <div>
      <div>
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
            {ventasFiltradas.map((venta) => {
              return (
                <Fila
                  key={nanoid()}
                  venta={venta}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })} 
          </tbody>
        </table>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder='Buscar venta'
          className='buscador' //CSS
        />
      </div>
      <div className=''>
        {ventasFiltradas.map((el) => {
          return (
            <div className='oculto'>
              <span>{el.cantidad}</span>
              <span>{el.valor_unitario}</span>
              <span>{el.valor_total}</span>
              <span>{el.fecha_venta}</span>
              <span>{el.id_cliente}</span>
              <span>{el.nombre_cliente}</span>
              <span>{el.vendedor}</span>
              <span>{el.estado_venta}</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}                    

const Fila = ({ venta, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevaVenta, setInfoNuevaVenta] = useState({
    _id: venta._id,
    id_producto : venta._id,
    cantidad: venta.cantidad,
    valor_unitario: venta.valor_unitario,
    valor_total: venta.valor_total,
    fecha_venta: venta.fecha_venta,
    id_cliente: venta.id_cliente,
    nombre_cliente: venta.nombre_cliente,
    vendedor: venta.vendedor,
    estado_venta: venta.estado_venta,
  });

  const actualizarVenta = async () => {
    const options = {
      method: 'PATCH',
      url: 'http://localhost:5000/ventas/editar/', 
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevaVenta},
    };
    
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      toast.success('Venta modificada con éxito');
      setEdit(false);
      setEjecutarConsulta(true);
    })
    .catch(function (error) {
      toast.error('Error modificando la venta');
      console.error(error);
    });
  };

  const eliminarVenta = async () => {
    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/ventas/eliminar/',
      headers: { 'Content-Type': 'application/json' },
      data: { id: venta._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Venta eliminada con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando la venta');
      });
    setOpenDialog(false);
  };
  
  return(
    <tr>
      {edit ? (
        <>
          <td>{infoNuevaVenta._id.slice(15)}</td>
          <td>{infoNuevaVenta._id.slice(15)}</td>
          <td>
            <input
              className = 'dato_editar'
              type= 'number'
              value={infoNuevaVenta.cantidad}
              onChange={(e) => setInfoNuevaVenta({ ...infoNuevaVenta, cantidad: e.target.value })}
            />
          </td>
          <td>
            <input
              className = 'dato_editar'
              type= 'number'
              value={infoNuevaVenta.valor_unitario}
              onChange={(e) =>
                setInfoNuevaVenta({ ...infoNuevaVenta, valor_unitario: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className = 'dato_editar'
              type= 'number'
              value={infoNuevaVenta.valor_total}
              onChange={(e) =>
                setInfoNuevaVenta({ ...infoNuevaVenta, valor_total: e.target.value })
              }
            />
          </td>

          <td>
            <input
              className = 'dato_editar'
              type= 'date'
              value={infoNuevaVenta.fecha_venta}
              onChange={(e) =>
                setInfoNuevaVenta({ ...infoNuevaVenta, fecha_venta: e.target.value })
              }
            />
          </td>

          <td>
            <input
              className = 'dato_editar'
              type= 'number'
              value={infoNuevaVenta.id_cliente}
              onChange={(e) =>
                setInfoNuevaVenta({ ...infoNuevaVenta, id_cliente: e.target.value })
              }
            />
          </td>

          <td>
            <input
              className = 'dato_editar'
              type= 'text'
              value={infoNuevaVenta.nombre_cliente}
              onChange={(e) =>
                setInfoNuevaVenta({ ...infoNuevaVenta, nombre_cliente: e.target.value })
              }
            />
          </td>

          <td>
            <input
              className = 'dato_editar'
              type= 'text'
              value={infoNuevaVenta.vendedor}
              onChange={(e) =>
                setInfoNuevaVenta({ ...infoNuevaVenta, vendedor: e.target.value })
              }
            />
          </td>

          <td>
            <select
              className = 'dato_editar'
              value={infoNuevaVenta.estado_venta}
                onChange={(e) =>
                setInfoNuevaVenta({ ...infoNuevaVenta, estado_venta: e.target.value })
                }>
              <option value = "En proceso">En proceso</option>
              <option value = "Entregada">Entregada</option>
              <option value = "Cancelada">Cancelada</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td>{venta._id.slice(15)}</td>
          <td>{venta._id.slice(15)}</td>
          <td>{venta.cantidad}</td>
          <td>{venta.valor_unitario}</td>
          <td>{venta.valor_total}</td>
          <td>{venta.fecha_venta}</td>
          <td>{venta.id_cliente}</td>
          <td>{venta.nombre_cliente}</td>
          <td>{venta.vendedor}</td>
          <td>{venta.estado_venta}</td>
        </>
      )}
      <td>
      <div className='contenedorEdicion'>
        {edit ? (
          <>
            <Tooltip title='Confirmar Edición' arrow>
              <i
                onClick={() => actualizarVenta()}
                className='fas fa-check botonConfirmar'
              />
            </Tooltip>
            <Tooltip title='Cancelar edición' arrow>
              <i
                onClick={() => setEdit(!edit)}
                className='fas fa-ban botonCancelar'
              />
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title='Editar venta' arrow>
              <i
                onClick={() => setEdit(!edit)}
                className='fas fa-pencil-alt botonEditar'
              />
            </Tooltip>
            <Tooltip title='Eliminar venta' arrow>
              <i
                onClick={() => setOpenDialog(true)}
                className='fas fa-trash botonEliminar'
              />
            </Tooltip>
          </>
        )}
      </div>
        <Dialog open={openDialog}>
          <div className=''>
            <h1 className='ventanaEliminar'>
              ¿Está seguro de querer eliminar la venta?
            </h1>
            <div className='contenedorEliminar'>
              <button
                onClick={() => eliminarVenta()}
                className='botonConfirmarEliminar'>
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className='botonCancelarEliminar'>
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
};

export default GestionVentas
