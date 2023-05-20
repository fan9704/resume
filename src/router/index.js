import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "../views/IndexView.vue";

const routes = [
    {
        path: '/',
        name: 'IndexView',
        component: IndexView
    }
]

const router = createRouter({
    history: createWebHistory('/resume'),
    routes
})

export default router