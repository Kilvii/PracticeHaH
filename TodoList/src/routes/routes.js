import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/objects',
        component: layout('TodolistLayout'),
        children: [
            {
                path: '/objects/:id?', name: 'todolist.objects', component: page('Objects')
            },
            {
                path: '/visibility', name: 'todolist.visibility', component: page('Visibility')
            }
        ]
    },
]

function page(path) {
    return () => import(`../views/${path}.vue`).then(m => m.default || m)
}

function layout(path) {
    return () => import(`../layouts/${path}.vue`).then(m => m.default || m)
}

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;