<template>
    <div>
        <select v-model="seleccionadas" multiple>
            <option v-for="(cadena, index) in cadenas" :key="index">{{ cadena }}</option>
        </select>
        <button @click="toggleMostrar()">Mostrar</button>
        <ul v-if="mostrar">
            <li v-for="seleccionada in seleccionadas" :key="seleccionada">{{ seleccionada }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SeleccionMultiple",
    data() {
        return {
            seleccionadas: [],
            cadenas: ["a", "b", "c", "d"],
            mostrar: false
        }
    },
    methods: {
      
        toggleMostrar(){
            this.mostrar = !this.mostrar
        }
    }
}
</script>
