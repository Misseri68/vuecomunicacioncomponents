<template>
    <div>
        <h4>{{ nombredeporte }}</h4>
        <button @click="seleccionarFavorito(nombredeporte)">Favorito</button>
    </div>
</template>

<script>
    export default {
        name: "HijoDeporte",
        props: [ "nombredeporte"],
        methods: {
            seleccionarFavorito(){
                console.log("Yo soy tu hijo");
                this.$emit("seleccionarFavoritoParent", this.nombredeporte);
            }
        }
    }
</script>

