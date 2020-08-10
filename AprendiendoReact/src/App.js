//Componente principal

import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//Importar componentes
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola bienvenido al curso de React
        </p>
        <section className="componentes">
        <MiComponente/>
        <Peliculas/>
      </section>
      </header>
      
    </div>
  );
}

export default App;
