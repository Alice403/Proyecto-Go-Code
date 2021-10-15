
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import HeaderPrivado from 'components/HeaderPrivado';

const Privado = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Cargando...</div>;

  return isAuthenticated ? (
    <div className = 'contenedorLayoutPrivado'>
      <HeaderPrivado titulo = {'TITULODINAMICO'.toUpperCase()}/>
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