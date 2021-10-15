import axios from 'axios';

export const obtenerProductos = async (setProductos) => {
  const options = { method: 'GET', url: 'http://localhost:5000/productos' };
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
  const options = { method: 'GET', url: 'http://localhost:5000/ventas/' };
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
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/' };
  await axios
    .request(options)
    .then(function (response) {
      setUsuarios(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

