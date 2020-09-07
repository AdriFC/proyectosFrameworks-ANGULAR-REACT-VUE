<template>
  <div class="general">
   
    <div class="center">
      <section id="content">
        <h1 class="subheader">Películas</h1>

        <div class="favorita" v-if="favorita">La película marcada es: <h3>{{favorita.title}}</h3></div>

        <!--LISTADO ARTÍCULOS-->
        <div id="articles">
          
          <div v-for="pelicula in peliculas" v-bind:key="pelicula.title">
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
  data() {
    return {
      favorita: null,
      peliculas: [
        {
          title: "Titanic",
          year: 1997,
          image: "https://pics.filmaffinity.com/Titanic-321994924-large.jpg",
        },
        {
          title: "La comunidad",
          year: 2000,
          image:
            "https://pics.filmaffinity.com/La_comunidad-194113063-large.jpg",
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