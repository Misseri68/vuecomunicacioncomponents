<template>
    <div>
        <h3>Hijo: {{ num }}</h3>
        <button @click="sumarNumero">Sumar</button>
    </div>
</template>

<script>
    export default {
        name: "HijoNumero",
        props: ["numero"],
        data() {
            return {
                num: this.numero
            }
        },
        methods: {
            sumarNumero(){
                this.$emit("sumarNumero", this.num)
            }
        }
    }
</script>

