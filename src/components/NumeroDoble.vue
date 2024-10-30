<template>
    <div>
        <h1>Numero doble Routes</h1>
        <h3>{{ mensaje }}</h3>
        <h4>{{ doble }}</h4>
        <button v-on:click="()=>{this.$router.push('/')}">Hola</button>
    </div>
</template>

<script>
export default {
    name: "NumeroDoble",
    data() {
        return {
            mensaje: "",
            doble: 0
        }
    },
    watch: {
        '$route.params.numero'(nextVal, oldVal) {
            if (nextVal != oldVal) {
                this.mensaje = "Esto ha cambiado!!!" + this.$route.params.numero
                this.doble = nextVal*2;
                
            }
        }
    },
    mounted() {
        console.log("Param: " + this.$route.params.numero)
        let paramNumero = this.$route.params.numero;
        if (paramNumero == "") {
            console.log("Sin parámetros");
            this.mensaje = "Sin parámetros en Routing";
        } else {
            this.mensaje = "Parámetro recibido: " + paramNumero;
            this.doble = paramNumero*2

        }

    }
}
</script>

<style lang="scss" scoped></style>