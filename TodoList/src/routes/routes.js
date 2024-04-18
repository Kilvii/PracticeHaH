import { createWebHistory, createRouter } from 'vue-router'

import App from '@/App.vue'

const routes = [
    { path: '/' , redirect: '/objects' },
    { path: '/objects', component: App },
    { path: '/objects/new', component: App }, 
    { path: '/objects/:id', component: App },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;