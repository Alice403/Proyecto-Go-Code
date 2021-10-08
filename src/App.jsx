import 'styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importaciones de todos los layouts (bases de pagina)
//import privado from '/layouts/privado' Layout del panel administración
//import publico from '/layouts/publico' //Layout de la página principal
// import layoutAut from '/.layouts/autenticacion' //Layout de autenticación

//Importaciones de las páginas
import Indice from 'pages/Indice';

import Autenticacion from 'pages/auth/Autenticacion';
import Registro from 'pages/auth/Registro';
import MenuInicio from 'pages/admin/MenuInicio';

import AdminProductos from 'pages/admin/Productos/AdminProductos';
import ModificarProducto from 'pages/admin/Productos/ModificarProducto';
import GestionVentas from 'pages/admin/Ventas/GestionVentas';
import ModificarVenta from 'pages/admin/Ventas/ModificarVenta';
import GestionUsuarios from 'pages/admin/Usuarios/GestionUsuarios'
import RegistrarUsuario from 'pages/admin/Usuarios/RegistrarUsuario';

function App() {
  return (
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
          <Route path = {['/admin','/admin/productos', '/admin/productos/editar',
            '/admin/ventas', '/admin/ventas/editar','admin/usuarios','admin/usuarios/editar']}>
            {/* <Privado> LAYOUT MODIFICAR */} 
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
            {/* </Privado> */}
          </Route>
          <Route path = {['/']}>
            {/* <Publico> */}
            <Switch>
              <Route path = '/'>
                <Indice/>
              </Route>
            </Switch>
            {/* </Publico> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;