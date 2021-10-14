import React from 'react';
import PrivateRoute from 'components/PrivateRoute';

const privado = ({ children }) => {
  return (
    <PrivateRoute>
      <main>
            {children}
      </main>
    </PrivateRoute>
  );
};

export default privado;
