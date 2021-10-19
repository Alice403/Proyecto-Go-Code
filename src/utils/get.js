import axios from 'axios';

export const obtenerProductos = async (setProductos) => {
  const options = { method: 'GET', url: 'http://localhost:5000/productos', 
  headers: { Authorization: getToken() } // Enviarle el token al backend 
};
const getToken = ()=>{
  return `Bearer ${localStorage.getItem('token')} `; 
}

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
  const options = { method: 'GET', url: 'http://localhost:5000/ventas/',headers:
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
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/',
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
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/self' ,
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