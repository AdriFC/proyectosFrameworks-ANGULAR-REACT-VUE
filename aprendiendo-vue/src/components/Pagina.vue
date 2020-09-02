<template>
  <section id="content">
    <h2 class="subheader">Página de pruebas</h2>
    <h3>{{id_desde_url}}</h3>
    <button @click="actualizarNombre()">Actualizar nombre</button>
    <button @click="redirigirAlBlog()">Redirigir</button>
    <h4>{{nombre}}</h4>
  </section>
</template>

<script>
export default {
  name: "Pagina",
  mounted() {
    this.id_desde_url = this.$route.params.id;
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Adrián FC",
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "Adrián Fraga Cortés";
      console.log(this.nombre);
    },
    redirigirAlBlog(){
      this.$router.push('/blog');
    }
  },
};
</script>