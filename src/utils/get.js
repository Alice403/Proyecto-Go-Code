import axios from 'axios';

const getToken = ()=>{
  return `Bearer ${localStorage.getItem('token')} `; 
}

export const obtenerProductos = async (setProductos) => {
  const options = { method: 'GET', url: 'https://hidden-cliffs-11953.herokuapp.com/productos/', 
  headers: { Authorization: getToken() } // Enviarle el token al backend 
};


/*Linea donde hubo un conflicto*/
  await axios
    .request(options)
    .then(function (response) {
      setProductos(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  
};

export const obtenerVentas = async (setVentas) => {
  const options = { method: 'GET', url: 'https://hidden-cliffs-11953.herokuapp.com/ventas/',headers:
   { Authorization: getToken() } // Enviarle el token al backend
  };
  await axios
    .request(options)
    .then(function (response) {
      setVentas(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const obtenerUsuarios = async (setUsuarios) => {
  const options = { method: 'GET', url: 'https://hidden-cliffs-11953.herokuapp.com/usuarios/',
  headers: { Authorization: getToken() } // Enviarle el token al backend
};
  await axios
    .request(options)
    .then(function (response) {
      setUsuarios(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

/*Cambio realizado 16 OCT 21*/ 
export const obtenerDatosUsuarios = async (setUsuarios, setEjecutarConsulta = () => {}) => 
{
  const options = { method: 'GET', url: 'https://hidden-cliffs-11953.herokuapp.com/usuarios/self/' ,
  headers: { Authorization: getToken() }// Enviarle el token al backend 
};
  await axios
    .request(options)
    .then(function (response) {
      setUsuarios(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};