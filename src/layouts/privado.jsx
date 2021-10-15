import React from 'react';
// import FooterPrivado from 'components/FooterPrivado';
// import HeaderPrivado from 'components/HeaderPrivado';

const Privado = ({children}) => {
  return (
    <div className = 'contenedorLayoutPrivado'>
        <main>{children}</main>
    </div>
  );
};

export default Privado;
