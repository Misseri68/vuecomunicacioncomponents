<template>
    <div>
        <h3>{{ comic.titulo }}</h3>
        <h4 :class="{
            rojo: comic.year <= 2000,
            verde: comic.year > 2000
        }">{{ comic.year }}</h4>
        <img :src="comic.imagen"/>
        <button @click="seleccionarFavorito">Seleccionar Favorito</button>
        <button @click="eliminarComic">Eliminar comic</button>
    </div>
</template>

<script>
    export default {
        name:"ComicComponent",
        props: ["comic", "index"],
        methods: {
            seleccionarFavorito(){
                this.$emit("seleccionarFavorito", this.comic)
            },

            eliminarComic(){
                this.$emit("deleteComic", this.index)
            }
        }
    }
</script>

<style>
@import './../assets/css/estiloscomic.css';
  
</style>