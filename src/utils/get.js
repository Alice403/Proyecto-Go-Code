// CONSULTAS GET DE LA BASE DE DATOS
import axios from 'axios';

const getToken = ()=>{
  return `Bearer ${localStorage.getItem('token')} `; 
}

export const obtenerProductos = async (setProductos, setEjecutarConsulta = () => {}) => {
  const options = { method: 'GET', url: 'http://localhost:5000/productos' , headers: { Authorization: getToken()
  }};
  await axios
    .request(options)
    .then(function (response) {
      setProductos(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};

export const obtenerVentas = async (setVentas, setEjecutarConsulta = () => {}) => {
  const options = { method: 'GET', url: 'http://localhost:5000/ventas/' ,headers: { Authorization: getToken()
}};
  await axios
    .request(options)
    .then(function (response) {
      setVentas(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};

export const obtenerUsuarios = async (setUsuarios, setEjecutarConsulta = () => {}) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/' ,headers: { Authorization: getToken()
}};
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

/*Cambio realizado 16 OCT 21*/ 
export const obtenerDatosUsuarios = async (setUsuarios, setEjecutarConsulta = () => {}) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/self' ,headers: { Authorization: getToken() // 3. Enviarle el token al backend 
}};
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