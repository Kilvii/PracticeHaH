import { KeepAlive } from 'vue';
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {   
        path: '/login',
        name: 'auth',
        component: page('Auth'),
        beforeEnter() {
            if (localStorage.getItem('auth')) {
                router.push({ name: 'todolist.objects' });
            } 
        },
    },
    {
        path: '/objects',
        component: layout('TodolistLayout'),
        beforeEnter() {
            if (!localStorage.getItem('auth')) {
                router.push({ name: 'auth' });
            } 
        },
        children: [
            {
                path: '/objects/:id?', name: 'todolist.objects', component: page('Objects')
            },
            {
                path: '/visibility', name: 'todolist.visibility', component: page('Visibility')
            },
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