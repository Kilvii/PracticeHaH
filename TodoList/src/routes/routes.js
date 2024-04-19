import { createWebHistory, createRouter } from 'vue-router'

import App from '@/App.vue'
import Objects from '@/views/Objects.vue'

const routes = [
    { path: '/' , redirect: '/objects' },
    { path: '/objects', component: Objects },
    { path: '/objects/new', component: Objects }, 
    { path: '/objects/:id', component: Objects },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;