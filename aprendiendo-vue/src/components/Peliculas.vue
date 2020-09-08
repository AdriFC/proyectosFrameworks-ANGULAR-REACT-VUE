<template>
  <div class="general">
   
    <div class="center">
      <section id="content">
        <h1 class="subheader">Películas</h1>

        <div class="favorita" v-if="favorita">La película marcada es: <h3>{{favorita.title}}</h3></div>

        <!--LISTADO ARTÍCULOS-->
        <div id="articles">
          
          <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
            <Pelicula
             :pelicula="pelicula"
             @favorita="haLlegadoPeliculaFavorita"
             ></Pelicula>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>

import Sidebar from "./Sidebar.vue";
import Pelicula from "./Pelicula.vue";

export default {
  name: "Películas",
  components: {
    Pelicula,
    Sidebar
  },
  methods: {
    haLlegadoPeliculaFavorita(favorita){
      this.favorita = favorita;
    }
  },
  filters: {
    mayusculas(value){
      return value.toUpperCase();
    }
  },
  computed: {
    peliculasMayuscula(){
      var peliculasMod = this.peliculas;
      for (var i = 0; i<this.peliculas.length; i++){
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
      }
      return peliculasMod;
    }
  },
  data() {
    return {
      favorita: null,
      peliculas: [
        {
          title: "Titanic",
          year: 1997,
          image: "https://cdn.shopify.com/s/files/1/1416/8662/products/titanic_1997_french_advance_original_film_art_5000x.jpg?v=1569070569",
        },
        {
          title: "La comunidad",
          year: 2000,
          image:
            "https://i.pinimg.com/originals/d8/c0/38/d8c038b652959be4ff5c49074552443c.jpg",
        },
        {
          title: "Groove",
          year: 2000,
          image:
            "https://nrfmagazine.com/wp-content/uploads/2012/12/Groove-la-pel%C3%ADcula_NRFmagazine.jpg",
        },
      ],
    };
  },
};
</script>>