import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', redirect: '/objects'},
    { path: '/objects/:id?', name: 'todolist', component: page('Objects')},
]

function page(path) {
    return () => import(`../views/${path}.vue`).then(m => m.default || m)
}

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;