<template>
    <div >
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/deportes/14">Deportes</router-link>
            </li>
            <li v-for="num in numeros" :key="num">
                <router-link :to="'/doble/' + num">{{ num }}</router-link>
            </li>
          
        </ul>
    </div>
</template>

<script>
    
    export default {
        name:"MenuComponent",
        data() {
            return {
                numeros: [1,2,3,4]
            }
        },
    }
</script>

<style>
    ul#menu li {
        display:inline;
    }
</style>