<template>
    <section id="content">
    <h2 class="subheader">{{titulo}}</h2>
    
        <hr/>
        <h1>Este es mi COMPONENTE</h1>
        <h2>{{subtitulo}}</h2>
        <hr/>

        <h2>Reactividad</h2>
        <input type="text" v-model="nombre"/>
        {{nombre}}

        <pre>
            {{$data}}
        </pre>

        <h2>Directivas condicionales</h2>
        <input type="number" v-model="edad"/>
        Mi edad es: <strong>{{edad}}</strong>

        <p style="color:red; font-weight:bold" v-if="edad && edad >= 18">Eres mayor de edad!!</p>

    </section>
</template>

<script>
export default {
    name: 'MiComponente',
    data(){
        return{
            titulo: 'Mi Componente',
            subtitulo: 'Soy el subtítulo de mi componente',
            nombre: '',
            edad: 18
        }
    }
}
</script>