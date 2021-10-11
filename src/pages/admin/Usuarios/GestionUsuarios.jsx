import {React, useEffect,useState,useRef} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {nanoid} from 'nanoid';
import axios from 'axios';
import {obtenerUsuarios} from 'utils/get';
import Logo from 'images/logo_cuadernia.png';
import { Dialog, Tooltip } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
// import {Header} from 'src/components/Header.jsx';

const GestionUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  useEffect(() => {
    if (ejecutarConsulta) {
      obtenerUsuarios(setUsuarios, setEjecutarConsulta);
    }
  },[ejecutarConsulta]);

  return (
    <div>
      <Helmet>
          <title>Gestionar Usuarios</title>
      </Helmet>
      <div>
      <header>
        <ul className="encabezado">
          <li>
          <img className = "logoCuadernia" src = {Logo} alt="Logo Cuadernia"></img>
          </li>
          <li>
              <div className="tituloPagina">GESTIÓN DE USUARIOS</div>
          </li>
        </ul>
      </header>
    </div>

      <ul className="cuerpo">
        <li>
          <div className = "contenedorBotonAgregar">
            <Link to = '/admin/usuarios/editar'>
            <input className = "botonAgregar boton" type= "button" 
            value = "Agregar Usuario" />
            </Link> 
          </div>
        </li>

        <li>
          <div className= "contenedorTabla">
            <Tabla listaUsuarios={usuarios} // TABLA DE USUARIOS
            setEjecutarConsulta={setEjecutarConsulta}/>
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

const Tabla = ({ listaUsuarios, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

  useEffect(() => {
    setUsuariosFiltrados(
      listaUsuarios.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaUsuarios]);

  return (
    <div>
      <div>
        <table className ="tabla" id="tablaUsuarios">
          <thead className = "campos">
            <th scope="col">ID Usuario</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Tipo de usuario</th>
            <th scope="col">Estado del usuario</th>
            <th scope="col">Edición</th>
          </thead>
          <tbody>
            {usuariosFiltrados.map((usuario) => {
              return (
                <Fila
                  key={nanoid()}
                  usuario={usuario}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })} 
          </tbody>
        </table>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder='Buscar'
          className='buscador' //CSS
        />
      </div>
      <div className='oculto'>
        {usuariosFiltrados.map((el) => {
          return (
            <div className=''>
              <span>{el.nombre}</span>
              <span>{el.apellidos}</span>
              <span>{el.tipo_usuario}</span>
              <span>{el.estado_usuario}</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}

const Fila = ({ usuario, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
    _id: usuario._id,
    nombre: usuario.nombre,
    apellidos: usuario.apellidos,
    tipo_usuario: usuario.tipo_usuario,
    estado_usuario: usuario.estado_usuario,
  });

  const actualizarUsuario = async () => {
    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/usuario/${usuario._id}/`,
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevoUsuario },
    };
    
  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      toast.success('Usuario modificado con éxito');
      setEdit(false);
      setEjecutarConsulta(true);
    })
    .catch(function (error) {
      toast.error('Error modificando el usuario');
      console.error(error);
    });
  };

  const eliminarUsuario = async () => {
    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/usuarios/eliminar/',
      headers: { 'Content-Type': 'application/json' },
      data: { id: usuario._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Usuario eliminado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando el usuario');
      });
    setOpenDialog(false);
  };
  
  return(
    <tr>
      {edit ? (
        <>
          <td>{infoNuevoUsuario._id}</td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoUsuario.name}
              onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, name: e.target.value })}
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoUsuario.brand}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, brand: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoUsuario.model}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, model: e.target.value })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{usuario._id.slice(20)}</td>
          <td>{usuario.name}</td>
          <td>{usuario.brand}</td>
          <td>{usuario.model}</td>
        </>
      )}
      <td>
      <div className=''>
        {edit ? (
          <>
            <Tooltip title='Confirmar Edición' arrow>
              <i
                onClick={() => actualizarUsuario()}
                className=''
              />
            </Tooltip>
            <Tooltip title='Cancelar edición' arrow>
              <i
                onClick={() => setEdit(!edit)}
                className=''
              />
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title='Editar Vehículo' arrow>
              <i
                onClick={() => setEdit(!edit)}
                className='fas fa-pencil-alt'
              />
            </Tooltip>
            <Tooltip title='Eliminar Vehículo' arrow>
              <i
                onClick={() => setOpenDialog(true)}
                className='fas fa-trash'
              />
            </Tooltip>
          </>
        )}
      </div>
        <Dialog open={openDialog}>
          <div className=''>
            <h1 className=''>
              ¿Está seguro de querer eliminar el usuario?
            </h1>
            <div className=''>
              <button
                onClick={() => eliminarUsuario()}
                className=''
              >
                Sí
              </button>
              <button
                onClick={() => setOpenDialog(false)}
                className=''
              >
                No
              </button>
            </div>
          </div>
        </Dialog>
      </td>
    </tr>
  );
};

export default GestionUsuarios