import {React, useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {nanoid} from 'nanoid';
import axios from 'axios';
import {obtenerUsuarios} from 'utils/get';
import HeaderPrivado from 'components/HeaderPrivado';
import { Dialog, Tooltip } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';

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
          <title>Administrar Usuarios</title>
      </Helmet>
      <HeaderPrivado titulo = {'Gestión de Usuarios'.toUpperCase()}/>

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
          placeholder='Buscar usuario'
          className='buscador' //CSS
        />
      </div>
      <div className=''>
        {usuariosFiltrados.map((el) => {
          return (
            <div className='oculto'>
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
      url: 'http://localhost:5000/usuarios/editar/', 
      headers: { 'Content-Type': 'application/json' },
      data: { ...infoNuevoUsuario},
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
          <td>{infoNuevoUsuario._id.slice(15)}</td>
          <td>
            <input
              className = 'dato_editar nombre'
              type= 'text'
              value={infoNuevoUsuario.nombre}
              onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, nombre: e.target.value })}
            />
          </td>
          <td>
            <input
              className = 'dato_editar apellido'
              type= 'text'
              value={infoNuevoUsuario.apellidos}
              onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, apellidos: e.target.value })
              }
            />
          </td>
          <td>
            <select
              className = 'dato_editar'
                value={infoNuevoUsuario.tipo_usuario}
                onChange={(e) =>
                setInfoNuevoUsuario({ ...infoNuevoUsuario, tipo_usuario: e.target.value })
                }>
              <option value = "Vendedor">Vendedor</option>
              <option value = "Administrador">Administrador</option>
            </select>
          </td>
          <td>
            <select 
              className='dato_editar'
              value={infoNuevoUsuario.estado_usuario}
                onChange={(e) =>
                  setInfoNuevoUsuario({ ...infoNuevoUsuario, estado_usuario: e.target.value })
                }>
              <option value = "Autorizado">Autorizado</option>
              <option value = "No Autorizado">No autorizado</option>
              <option value = "Pendiente">Pendiente</option>
            </select>
          </td>
        </>
      ) : (
        <>
          <td>{usuario._id.slice(15)}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.apellidos}</td>
          <td>{usuario.tipo_usuario}</td>
          <td>{usuario.estado_usuario}</td>
        </>
      )}
      <td>
      <div className='contenedorEdicion'>
        {edit ? (
          <>
            <Tooltip title='Confirmar Edición' arrow>
              <i
                onClick={() => actualizarUsuario()}
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
            <Tooltip title='Editar usuario' arrow>
              <i
                onClick={() => setEdit(!edit)}
                className='fas fa-pencil-alt botonEditar'
              />
            </Tooltip>
            <Tooltip title='Eliminar usuario' arrow>
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
              ¿Está seguro de querer eliminar el usuario?
            </h1>
            <div className='contenedorEliminar'>
              <button
                onClick={() => eliminarUsuario()}
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

export default GestionUsuarios