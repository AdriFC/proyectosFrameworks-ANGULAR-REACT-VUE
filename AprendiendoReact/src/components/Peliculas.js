import React, { Component } from "react";
import Pelicula from "./Pelicula";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Peliculas extends Component {
  state = {};

  cambiarTitulo = () => {
    var { peliculas } = this.state;

    peliculas[0].titulo = "Oceano azul profundo";

    this.setState({
      peliculas: peliculas,
    });
  };

  favorita = (pelicula, indice) => {
    console.log("FAVORITA MARCADA");
    console.log(pelicula, indice);
    this.setState({
      favorita: pelicula,
    });
  };

  componentWillMount() {
    //alert("Se va a montar el componente");
    this.setState({
      peliculas: [
        {
          titulo: "Deep blue sea",
          image:
            "https://www.cineycine.com/archivos/2013/11/deepbluesea_poster.jpg",
        },
        {
          titulo: "American Beauty",
          image:
            "https://images-na.ssl-images-amazon.com/images/I/81xzunZU%2B4L._SL1400_.jpg",
        },
        {
          titulo: "La comunidad",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/La_comunidad_film.jpg/220px-La_comunidad_film.jpg",
        },
      ],
      nombre: "Adrián Fraga Cortés",
      favorita: {},
    });
  }

  componentDidMount() {
    //alert("Ya se montó el componente");
  }

  componentWillUnmount() {
    //alert("Me voy a desmontar");
  }

  render() {
    var pStyle = {
      background: "green",
      color: "white",
      padding: "10px",
    };

    return (
      <React.Fragment>
        <Slider title="Peliculas" size="slider-small" />
        <div className="center">
          <div id="content" className="Peliculas">
            <h2 className="subheader">Listado de peliculas</h2>
            <p>Selección de las películas favoritas de {this.state.nombre}</p>
            <p>
              <button onClick={this.cambiarTitulo}>
                Cambiar título deep blue sea
              </button>
            </p>

            {this.state.favorita.titulo ? (
              <p className="favorita" style={pStyle}>
                <strong>La película favorita es: </strong>
                <span>{this.state.favorita.titulo}</span>
              </p>
            ) : (
                <p>NO HAY PELÍCULA FAVORITA</p>
              )}

            {/** Crear componente película */}

            <div id="articles">
              {this.state.peliculas.map((pelicula, i) => {
                return (
                  <Pelicula
                    key={i}
                    pelicula={pelicula}
                    indice={i}
                    marcarFavorita={this.favorita}
                  />
                );
              })}
            </div>
          </div>
          <Sidebar blog="false" />
        </div>
      </React.Fragment>
    );
  }
}

export default Peliculas;
