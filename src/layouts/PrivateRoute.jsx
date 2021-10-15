
import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
// import FooterPrivado from 'components/FooterPrivado';
import HeaderPrivado from 'components/HeaderPrivado';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  // if (false) return <div>Cargando...</div>;

  return isAuthenticated ? (
    <div className = 'contenedorLayoutPrivado'>
      
        <HeaderPrivado 
        titulo = {'TITULODINAMICO'.toUpperCase()}/>
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

export default PrivateRoute;
