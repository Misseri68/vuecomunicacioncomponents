<template>
    <div>
        <ul style="list-style: none;">
            <li style="display:inline;">
                <router-link to="/">Home</router-link>
            </li>
            <li v-for="num in randoms" :key="num" style="padding-inline: 5px; display:inline;">
                <router-link :to="'/tabla/' + num">Tabla del {{ num }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MenuTablaMultiplicar",
    data() {
        return {
            randoms: []
        }
    },
    created() {

        var max = 5
        this.randoms = []
        for (let i = 0; i < max; i++) {
            this.randoms.push(parseInt(Math.random() * 100 + 1))

        }
    }
}
</script>
