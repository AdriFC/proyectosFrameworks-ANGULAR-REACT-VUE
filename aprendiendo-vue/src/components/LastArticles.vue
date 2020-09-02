<template>
  <section id="content">
    <h2 class="subheader">últimos artículos</h2>
    <!--LISTADO ARTÍCULOS-->
    <div id="articles">
      <article class="article-item" id="article-template">
        <div class="image-wrap">
          <img
            src="https://media.tacdn.com/media/attractions-content--1x-1/0a/b0/c9/b4.jpg"
            alt="Toronto"
          />
        </div>
        <h2>Artículo de prueba</h2>
        <span class="date">Hace 5 minutos</span>
        <a href="#">Leer más</a>
        <div class="clearfix"></div>
      </article>

      <!--AÑADIR ARTÍCULOS VIA JS-->
    </div>
  </section>
</template>

<script>
export default {
    name: 'LastArticles'
}
</script>>