import {React, useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {obtenerProductos} from 'utils/get';
import { Dialog, Tooltip } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import axios from 'axios';
import HeaderPrivado from 'components/HeaderPrivado';

const getToken = ()=>{
  return `Bearer ${localStorage.getItem('token')} `; 
}

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  
  useEffect(() => {
    if (ejecutarConsulta) {
      obtenerProductos(setProductos, setEjecutarConsulta);
    }
  },[ejecutarConsulta]);

  return (
    <div>
      <Helmet>
          <title>Administrar Productos</title>
      </Helmet>
      <HeaderPrivado titulo = {'Administrador de Productos'.toUpperCase()}/>

      <ul className = "cuerpo">
        <li>
          <div className = "contenedorBotonAgregar">
            <Link to = '/admin/productos/editar'>
              <input className = "botonAgregar boton" type= "button" 
              value = "Agregar Producto" />
            </Link>
          </div>
        </li>
        
        <li>
          <div className = "contenedorTabla">
            <Tabla listaProductos={productos}
            setEjecutarConsulta={setEjecutarConsulta}/>
          </div>
        </li>
        
        <li>
          <div className = "contenedorBotonesSalir">
            <div>
              <Link to = '/admin'>
              <input className = "boton" type= "button" 
              value = "Regresar al menú"/>
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


const Tabla = ({ listaProductos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

  return (
    <div>
      <div>
        <table className ="tabla" id="tablaProductos">
          <thead className = "campos">
            <th scope="col">ID Producto</th>
            <th scope="col">Descripción del producto</th>
            <th scope="col">Valor unitario</th>
            <th scope="col">¿Disponible?</th>
            <th scope="col">Edición</th>
          </thead>

     
          
          <tbody>
            {productosFiltrados.map((producto) => {
              return (
                <Fila
                  key={nanoid()}
                  producto={producto}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })} 
          </tbody>
        </table>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder='Buscar producto'
          className='buscador' //CSS
        />
      </div>
      <div className=''>
        {productosFiltrados.map((el) => {
          return (
            <div className='oculto'>
              <span>{el.descripcion_producto}</span>
              <span>{el.valor_unitario}</span>
              <span>{el.disponibilidad}</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

const Fila = ({ producto, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    _id: producto._id,
    descripcion_producto: producto.descripcion_producto,
    valor_unitario: producto.valor_unitario,
    disponibilidad: producto.disponibilidad,
    
  });

  const actualizarProducto = async () => {
    const options = {
      method: 'PATCH',
      url: 'http://localhost:5000/productos/editar/', 
      headers: { 'Content-Type': 'application/json', Authorization: getToken()}, 
      data: { ...infoNuevoProducto},
    };
    
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      toast.success('Producto modificado con éxito');
      setEdit(false);
      setEjecutarConsulta(true);
    })
    .catch(function (error) {
      toast.error('Error modificando el producto');
      console.error(error);
    });
  };

  const eliminarProducto = async () => {
    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/productos/eliminar/',
      headers: { 'Content-Type': 'application/json',Authorization: getToken()},
      data: { id: producto._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Producto eliminado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando el producto');
      });
    setOpenDialog(false);
  };
  
  return(
    <tr>
      {edit ? (
        <>
          <td>{infoNuevoProducto._id.slice(15)}</td>
          <td>
            <input
              className = 'dato_editar '
              type= 'text'
              value={infoNuevoProducto.descripcion_producto}
              onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, descripcion_producto: e.target.value })}
            />
          </td>
          <td>
            <input
              className = 'dato_editar'
              type= 'text'
              value={infoNuevoProducto.valor_unitario}
              onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, valor_unitario: e.target.value })
              }
            />
          </td>
          <td>
            <select
              className = 'dato_editar'
                value={infoNuevoProducto.disponibilidad}
                onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, disponibilidad: e.target.value })
                }>
              <option value = "Sí">Sí</option>
              <option value = "No">No</option>
            </select>
          </td>
          
        </>
      ) : (
        <>
          <td>{producto._id.slice(15)}</td>
          <td>{producto.descripcion_producto}</td>
          <td>{producto.valor_unitario}</td>
          <td>{producto.disponibilidad}</td>

        </>
      )}
      <td>
      <div className='contenedorEdicion'>
        {edit ? (
          <>
            <Tooltip title='Confirmar Edición' arrow>
              <i
                onClick={() => actualizarProducto()}
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
            <Tooltip title='Editar Producto' arrow>
              <i
                onClick={() => setEdit(!edit)}
                className='fas fa-pencil-alt botonEditar'
              />
            </Tooltip>
            <Tooltip title='Eliminar Producto' arrow>
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
              ¿Está seguro de querer eliminar el producto?
            </h1>
            <div className='contenedorEliminar'>
              <button
                onClick={() => eliminarProducto()}
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

export default AdminProductos;

