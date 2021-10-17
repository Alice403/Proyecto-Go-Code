import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { obtenerDatosUsuarios } from 'utils/get';
=======
import ReactLoading from 'react-loading';
import { useAuth0 } from '@auth0/auth0-react';
>>>>>>> 1d40a2d1e4b9c29c1278c0a5496a561ae971f293

const Privado = ({ children }) => {
  const {isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
  
  useEffect(()=> {
    const fetchAuth0Token = async () => {
      // 1. Pedir token a auth0
      const accessToken = await getAccessTokenSilently({
        audience :'api-autenticacion-cuadernia',
      });
      // 2. Recibir token the auth0
      localStorage.setItem('token',accessToken);
      // 3. Enviarle token al backend
      /*Cambio realizado 16 OCT 21*/ 
      console.log(accessToken);
      await obtenerDatosUsuarios(
        (response)=>{
        console.log('response', response);
        },
        (err)=>{
          console.log("err",err);
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  },[isAuthenticated,getAccessTokenSilently]);


  if (isLoading) return(
  <div className = 'paginaCarga'>
    <ReactLoading type={'spin'} color={'#2a8674'} height={150} width={150} />
    <div className= 'textoCarga'>Cargando...</div>
  </div>);

  return isAuthenticated ? (
    <div className = 'contenedorLayoutPrivado'>
      {children}
    </div>
  ) : (
    <div>
      <div>No estás autorizado para ver este sitio.</div>
      <Link to='/'>
        <button className = 'boton'>Llévame al home</button>
      </Link>
    </div>
  );
};

export default Privado;