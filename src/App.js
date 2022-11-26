import './App.css';

function App() {
  return (<div className="container">
  <h1 className="title">
     Base de datos de pacientes UMAE <span aria-label="emoji" role="img">💉</span>
  </h1>
  <br></br>
  <h2>
    Bienvenido!
    </h2>
    <p>Ingrese su numero de paciente. </p>
  <input type="text" className="new-task"/>
  <br></br>
  <p>Correo electronico </p>
  <input type="text" className="new-task"/>
  <br></br>
  <p>Contraseña </p>
  <input type="text" className="new-task"/>
  <br></br>
  <br></br>
  <br></br>
  <button onclick="activateLasers()" link="https://github.com/Tatolrw/proyecto_nuevo">
  Iniciar Sesion
</button>

</div>

  );
}

export default App;
