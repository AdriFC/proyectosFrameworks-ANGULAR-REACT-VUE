import React, { Component } from "react";
import MiComponente from "./MiComponente";


class SeccionPruebas extends Component {
  render() {
    return (
      <section id="content">
        <h2 class="subheader">últimos artículos</h2>
        <p>Hola bienvenido al curso de React</p>
        <section className="componentes">
          <MiComponente />
          <MiComponente />
          
        </section>
      </section>
    );
  }
}

export default SeccionPruebas;
