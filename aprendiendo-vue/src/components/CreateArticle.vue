<template>
    <div class="general">
    
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear artículo</h1>
        
        <!--Formulario-->
        <form class="mid-form" v-on:submit.prevent="save()">

            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" name="title" v-model="article.title" />
            </div>

            <div class="form-group">
                <label for="content">Contenido</label>
                <textarea type="text" name="title" v-model="article.content"></textarea>
            </div>

            <div class="form-group">
                <label for="image">Imagen</label>
                <input type="file" name="image" />
            </div>

            <div class="clearfix"></div>

            <input type="submit" value="Guardar" class="btn btn-success" />

        </form>


      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>

import Sidebar from './Sidebar.vue';
/* import Global from './Global'; */
import Article from '../models/Article';
/* import axios from 'axios'; */
/* import { required, minLength } from 'vuelidate/lib/validators'; */

export default {
    name: 'CreateArticle',
    components: {
        
        Sidebar
    },
    data(){
        return{
            article: new Article('', '', null, '')
        }
    },
    mounted(){
        console.log(this.article);
    },
    methods: {
        save(){
            console.log(this.article);
        }
    }
}
</script>