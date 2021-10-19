import React from 'react'

const Publico = ({children}) => {
  return (
    <div className = 'contenedorLayoutPublico'>
      <main>{children}</main>
    </div>
  );
};

export default Publico