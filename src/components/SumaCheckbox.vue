<template>
    <div>
        <h1>Ejemplo Checkbox</h1>
        <h3>{{ total }}</h3>
        <button @click="generarCheckbox" style="margin-bottom: 2em;">Generar Checkbox</button>
        <form>
            <div v-for="valor in valores" :key="valor">
                <input type="checkbox" :value="valor" v-model="seleccionadas" v-on:change="sumarValores"> 
                <label>{{ valor }}</label>
            </div>
        </form>

    </div>
</template>

<script>
export default {
    name: "SumaCheckbox",
    data() {
        return {
            valores: [],
            seleccionadas: [],
            total: 0
        }
    },
    methods: {
        generarCheckbox() {
            var num = parseInt(Math.random() * 100 + 1);
            this.valores.push(num)
        },

        sumarValores(){
            this.total = 0;
            for(var valor of this.seleccionadas){
                this.total += parseInt(valor)
            }
        }
    }
}
</script>
