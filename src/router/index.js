import { createRouter, createWebHistory } from 'vue-router'
import IndexLayout  from "../views/IndexLayout.vue";
import GalleryLayout from "@/views/GalleryLayout.vue";

const routes = [
    {
        path: '/',
        name: 'IndexLayout',
        component: IndexLayout
    },
    {
        path: '/gallery/',
        name: 'GalleryLayout',
        component:GalleryLayout
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router