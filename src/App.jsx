import 'styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Titulos from 'components/Titulos';

//Importaciones de todos los layouts (bases de pagina)
import Publico from 'layouts/Publico';
import PrivateRoute from 'layouts/PrivateRoute';
// import LayoutAut from 'layouts/LayoutAut';
// import LayoutMenu from 'layouts/LayoutMenu';

//Importaciones de las páginas
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

function App() {
  return (
  <Auth0Provider
  domain = 'go-code.us.auth0.com'
  clientId='hDmKjJ6hxt8cer7N0tYl6vMN02ZJ8ord'
  redirectUri={window.location.origin}>

    <div className='App'>
      <Router>
        <Switch> 
          <Route path = {['/autenticacion', '/registro']}>
            {/* <LayoutAut> */}
              <Switch>
                <Route path = '/autenticacion'>
                  <Autenticacion/>
                </Route>
                <Route path = '/registro'>
                  <Registro/>
                </Route>
              </Switch>
            {/* </LayoutAut> */}
          </Route>
          <Route path = {['/admin/productos', '/admin/productos/editar', '/admin',
            '/admin/ventas', '/admin/ventas/editar','admin/usuarios','admin/usuarios/editar']}>
            <PrivateRoute>
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
            </PrivateRoute>
          </Route>
        
          <Route path = {['/']}>
            <Publico>
              <Switch>
                <Route path = '/'>
                  <Indice/>
                </Route>
              </Switch>
            </Publico>
          </Route>
        </Switch>
      </Router>
    </div>
  </Auth0Provider>
  );
}

export default App;