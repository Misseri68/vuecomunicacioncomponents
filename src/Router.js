import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PadreDeportes from "./components/PadreDeportes.vue";
import NumeroDoble from "./components/NumeroDoble.vue";

const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/deportes/:id?", component: PadreDeportes},
    {path: "/doble/:numero?", component: NumeroDoble}
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router