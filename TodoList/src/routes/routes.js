import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', redirect: '/objects' },
    { path: '/objects', component: page('Objects') },
    { path: '/objects/new', component: page('Objects') },
    { path: '/objects/:id', component: page('Objects') },
]

function page(path) {
    return () => import(`../views/${path}.vue`).then(m => m.default || m)
}

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;