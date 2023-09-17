import { createRouter, createWebHistory } from 'vue-router'
import IndexLayout  from "../views/IndexLayout.vue";

const routes = [
    {
        path: '/',
        name: 'IndexLayout',
        component: IndexLayout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router