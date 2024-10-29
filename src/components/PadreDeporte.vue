<template>
    <div>
        <h1>Padre</h1>
        <h3 v-if="favorito!=null" > Deporte favorito: {{ favorito }}</h3>
        <ul v-for="sport in deportes" :key="sport">

            <HijoDeporte :nombredeporte="sport" v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>        
        </ul>
       
    </div>
</template>

<script>
import HijoDeporte from './HijoDeporte.vue';


    export default {
        name: "PadreDeporte",
        components: {
            HijoDeporte
        },
        methods: {
            seleccionarFavoritoParent(depFavorito) {
                console.log("recibido " + depFavorito)
                this.favorito = depFavorito;
                console.log("yo soy tu padre")
            }
        },
        data() {
            return {
                deportes: ["Surf", "Curling", "Lol", "Bolos", "Cartas"],
                favorito: null
            }
        },
     
    }
</script>

<style>
    ul{
        padding-left: 0;
    }
</style>