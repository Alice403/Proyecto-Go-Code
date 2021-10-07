import './styles/styles.css';
import logoCuadernia from './media/logo_cuadernia.png'

function App() {
  return (
    <div className='App'>     
      <section className="botones">
      <div className="contenedor-logo">
        <img className="logo" src= {logoCuadernia} alt="cuadernia"/>
    </div>
    <ul>
        <div className="containerMainButton">
            <a href="admin_ventas.html"><button  className="mainButton button1">Administrar ventas</button></a>
        </div>
        <div className="containerMainButton">
            <a href="admin_ventas.html"><button  className="mainButton button2">Administrar productos</button></a>
        </div>
        <div className="containerMainButton">
            <a href="gestion_usuarios.html"><button  className="mainButton button3">Administrar usuarios</button></a>
        </div>
    </ul>
      </section>
    </div>
  );
}

export default App;
