import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Privado = ({ children }) => {
  const {isAuthenticated, isLoading} = useAuth0();
  console.log(isAuthenticated);
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