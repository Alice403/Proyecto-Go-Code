import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Privado = ({ children }) => {
  const {isAuthenticated, isLoading, getAccessTokenSilently} = useAuth0();
  
  useEffect(()=> {
    const fetchAuth0Token = async () => {
      const accessToken = await getAccessTokenSilently({
        audience :'api-autenticacion-cuadernia',
      });
      localStorage.setItem('token',accessToken);
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  },[isAuthenticated,getAccessTokenSilently]);


  if (isLoading) return <div>Cargando...</div>;

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