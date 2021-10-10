import {React, useEffect,useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import Logo from 'images/logo_cuadernia.png';
import {Helmet} from "react-helmet";
import { nanoid } from 'nanoid';
import axios from 'axios';

const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
  
  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerProductos(setProductos, setEjecutarConsulta);
    }
  }, [ejecutarConsulta]);

  useEffect(() => { 
    //obtener lista de vehículos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]); 
  
  return (
    <div>
      <Helmet>
          <title>Administrador de Productos</title>
      </Helmet>
      
    <header>
      <ul className = "encabezado">
        <li>
            <img className = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"/>
        </li>
        <li>
            <div className = "tituloPagina">ADMINISTRADOR DE PRODUCTOS</div>
        </li>
      </ul>
    </header>

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
          <TablaProductos listaProductos={productos} 
          setEjecutarConsulta = {setEjecutarConsulta} /> 
          {/* AQUI IBA LA TABLA ANTERIOR PERO PARA ADAPTACION SE PUSO EN ARROW FUNCTION */}
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

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => { //BOTON DE BUSQUEDA
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]); //BOTON DE BUSQUEDA

  return (
      <div> 
        <table className = "tabla" id="tablaProductos">
          <thead className = "campos">
              <th>ID Producto</th>
              <th>Descripción del producto</th>
              <th>Valor Unitario</th>
              <th>¿Disponible?</th>
              <th>Edición</th>
          </thead>
          <tbody>
            {productosFiltrados.map((producto) => {
              return (
                <FilaProducto
                  key={nanoid()}
                  producto={producto}
                  setEjecutarConsulta={setEjecutarConsulta}/>
              );
            })}
          </tbody>
        </table>
      <div>
        <input //BOTON DE BUSQUEDA
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'/> 
      </div>
      <div>
        {productosFiltrados.map((el) => {
          return (
            <div>
              <span>{el.name}</span>
              <span>{el.brand}</span>
              <span>{el.model}</span>
            </div>
          );
        })}
      </div>  
    </div>
  );
};

const FilaProducto = ({ producto, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false); //PARA EDITAR
  const [openDialog, setOpenDialog] = useState(false); //COONFIRM.ELIMINAR
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    _id: producto._id,
    descripcion_producto: producto.descripcion_producto,
    valor_unitario: producto.valor_unitario,
    disponibilidad: producto.disponibilidad,
  });

  const actualizarProducto = async () => {
    //enviar la info al backend
    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/productos/${producto._id}/`, //DUDA
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevoProducto },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Producto modificado con éxito');
        setEdit(false); //DUDAS
        setEjecutarConsulta(true); //DUDAS
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
      headers: { 'Content-Type': 'application/json' },
      data: { id: producto._id }, //DUDAS id o _id
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

  return (
    <tr>
      {edit ? (
        pass //ESTO ES DE EDITAR
        // <>
        //   <td>{infoNuevoProducto._id}</td>
        //   <td>
        //     <input
        //       className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
        //       type='text'
        //       value={infoNuevoProducto.name}
        //       onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, name: e.target.value })}
        //     />
        //   </td>
        //   <td>
        //     <input
        //       className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
        //       type='text'
        //       value={infoNuevoProducto.brand}
        //       onChange={(e) =>
        //         setInfoNuevoProducto({ ...infoNuevoProducto, brand: e.target.value })
        //       }
        //     />
        //   </td>
        //   <td>
        //     <input
        //       className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
        //       type='text'
        //       value={infoNuevoProducto.model}
        //       onChange={(e) =>
        //         setInfoNuevoProducto({ ...infoNuevoProducto, model: e.target.value })
        //       }
        //     />
        //   </td>
        // </>
      ) : (
        <>
          <td>{producto._id.slice(20)}</td>
          <td>{producto.name}</td>
          <td>{producto.brand}</td>
          <td>{producto.model}</td>
        </>
      )}
      <td>
        <div className='flex w-full justify-around'>
          {edit ? (
            <>
              <Tooltip title='Confirmar Edición' arrow>
                <i
                  onClick={() => actualizarProducto()}
                  className='fas fa-check text-green-700 hover:text-green-500'
                />
              </Tooltip>
              <Tooltip title='Cancelar edición' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title='Editar Vehículo' arrow>
                <i
                  onClick={() => setEdit(!edit)}
                  className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                />
              </Tooltip>
              <Tooltip title='Eliminar Vehículo' arrow>
                <i
                  onClick={() => setOpenDialog(true)}
                  className='fas fa-trash text-red-700 hover:text-red-500'
                />
              </Tooltip>
            </>
          )}
        </div>
        {/* BOTÓN CONFIRMACION */}
        <Dialog open={openDialog}>
          <div className='p-8 flex flex-col'>
            <h1 className='text-gray-900 text-2xl font-bold'>
              ¿Está seguro de querer eliminar el vehículo?
            </h1>
            <div className='flex w-full items-center justify-center my-4'>
              <button
                onClick={() => eliminarProducto()}
                className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
        {/* BOTÓN CONFIRMACION */}
      </td>
    </tr>
  );
};

export default AdminProductos;