import 'styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importaciones de todos los layouts (bases de pagina)
//import Publico from 'layouts/Publico';
import Privado from 'layouts/Privado';

//Importaciones de las páginas
import React, {useState} from 'react';
import Indice from 'pages/Indice';
import Autenticacion from 'pages/auth/Autenticacion';
import Registro from 'pages/auth/Registro';
import MenuInicio from 'pages/admin/MenuInicio';
import AdminProductos from 'pages/admin/Productos/AdminProductos';
import ModificarProducto from 'pages/admin/Productos/ModificarProducto';
import GestionVentas from 'pages/admin/Ventas/GestionVentas';
import ModificarVenta from 'pages/admin/Ventas/ModificarVenta';
import GestionUsuarios from 'pages/admin/Usuarios/GestionUsuarios';
import RegistrarUsuario from 'pages/admin/Usuarios/RegistrarUsuario';
import {Auth0Provider} from '@auth0/auth0-react';
import { UserContext } from 'context/userContext';

function App() {
  const [userData, setUserData] = useState({});
  return (
  <Auth0Provider
  domain = 'go-code.us.auth0.com'
  clientId='hDmKjJ6hxt8cer7N0tYl6vMN02ZJ8ord'
  redirectUri= 'https://cuadernia.herokuapp.com/admin'
  audience= 'api-autenticacion-cuadernia'
  >

    <div className='App'>
      <UserContext.Provider value = {{userData,setUserData}}>
      <Router>
        <Switch> 
          <Route path = {['/autenticacion', '/registro']}>
              <Switch>
                <Route path = '/autenticacion'>
                  <Autenticacion/>
                </Route>
                <Route path = '/registro'>
                  <Registro/>
                </Route>
              </Switch>
          </Route>
          <Route path = {['/admin/productos', '/admin/productos/editar', '/admin',
            '/admin/ventas', '/admin/ventas/editar','admin/usuarios','admin/usuarios/editar']}>
            <Privado>
              <Switch>
                <Route path = '/admin/productos/editar'>
                  <ModificarProducto/>
                </Route>
                <Route path = '/admin/productos'>
                  <AdminProductos/>
                </Route>

                <Route path = '/admin/ventas/editar'>
                  <ModificarVenta/>
                </Route>
                <Route path = '/admin/ventas'>
                  <GestionVentas/>
                </Route>
                
                <Route path = '/admin/usuarios/editar'>
                  <RegistrarUsuario/>
                </Route>
                <Route path = '/admin/usuarios'>
                  <GestionUsuarios/>
                </Route> 
                <Route path = '/admin'>
                  <MenuInicio/>
                </Route>
              </Switch>
            </Privado>
          </Route>
        
          <Route path = {['/']}>
              <Switch>
                <Route path = '/'>
                  <Indice/>
                </Route>
              </Switch>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  </Auth0Provider>
  );
}

export default App;