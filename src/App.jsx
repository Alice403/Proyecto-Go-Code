import './styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Importaciones de todos los layouts (bases de pagina)
import privado from './layouts/privado' //Layout del panel administración
import publico from './layouts/publico' //Layout de la página principal
// import layoutAut from '/.layouts/autenticacion' //Layout de autenticación

//Importaciones de las páginas
import Indice from './pages/Indice'

import Autenticacion from './pages/Autenticacion/Autenticacion'
import Registro from './pages/Autenticacion/Registro'

import menu_inicio from './pages/Administracion/menu_inicio';
import admin_productos from './pages/Administracion/Productos/admin_productos'
import modificar_productos from './pages/Administracion/Productos/modificar_productos'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch> 
          <Route path = {['admin','admin/productos', 'admin/productos/editar',
          'admin/ventas', 'admin/ventas/editar', 'usuarios','usuarios/editar']}>
            {/* <privado> LAYOUT MODIFICAR */} 
              <Switch>
                <Route path = 'admin'>
                  <menu_inicio/>
                </Route>
                <Route path = 'admin/productos'>
                  <admin_productos/>
                </Route>
                <Route path = 'admin/productos/editar'>
                  <modificar_productos/>
                </Route>
              </Switch>
            {/* </privado> */}
          </Route>
          <Route path = {['/']}>
            {/* <publico> */}
            <Switch>
              <Route path = '/'>
                <Indice/>
              </Route>
            </Switch>
            {/* </publico> */}
          </Route>
          <Route path = {['autenticacion', 'registro']}>
            {/* <layoutAut> */}
              <Switch>
                <Route path = 'autenticacion'>
                  <Autenticacion/>
                </Route>
                <Route path = 'registro'>
                  <Registro/>
                </Route>
              </Switch>
            {/* </layoutAut> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;