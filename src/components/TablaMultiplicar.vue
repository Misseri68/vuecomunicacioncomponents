<template>
    <div class="container">
        <h1>Tabla de Multiplicar del {{ num }}</h1>
        <table border="1" cellpadding="5" cellspacing="0">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in 10" :key="i">
                    <td>{{ num }} x {{ i }}</td>
                    <td>{{ num * i }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TablaMultiplicar",
    data() {
        return {
            num: null
        }
    },
    mounted() {
        this.num = this.$route.params.num

    },
    watch: {
        '$route.params.num'(newVal, oldVal) {
            if (newVal != oldVal) {
                this.num = this.$route.params.num
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
}

table {
    margin-top: 20px;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    text-align: center;
}
</style>