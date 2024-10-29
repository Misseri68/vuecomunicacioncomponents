<template>
    <div>
        <h1>Padre numeros</h1><br/>
        <h2>Suma total: {{ suma }}</h2><br/>
        <button @click="generarNumero">Nuevo numero</button>
        <ul v-for="num in numeros" :key="num">
            <HijoNumero :numero="num" v-on:sumarNumero="sumarNumero"/>
        </ul>
    </div>
</template>

<script>
import HijoNumero from './HijoNumero.vue';

    export default {
        name:"PadreNumeros",
        components: {
            HijoNumero
        },
        data() {
            return {
                numeros: [],
                suma: 0
            }
        },
        methods: {
            generarNumero(){
                var numRandom = parseInt(Math.random()*100 +1);
                this.numeros.push(numRandom);
                console.log(this.numeros); 
            },

            sumarNumero(num){
                this.suma = this.suma + num;
            }
        }
    }
</script>

<style>
    ul{
        padding-left: 0px;
    }
</style>
