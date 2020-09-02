<template>
    <div>
        <hr/>
        <h1>Este es mi COMPONENTE</h1>
        <h2>{{subtitulo}}</h2>
        <hr/>
    </div>
</template>

<script>
export default {
    name: 'MiComponente',
    data(){
        return{
            subtitulo: 'Soy el subtítulo de mi componente'
        }
    }
}
</script>