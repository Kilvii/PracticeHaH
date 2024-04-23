import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/objects',
    },
    { 
        path: '/objects',
        name: 'todolist',
        component: page('Objects'),
        children: [
            {
                path: 'new',
                name: 'todolist.create',
                component: { template: '<div>Create Todo Form</div>' },
            },
            {
                path: ':id',
                name: 'todolist.edit',
                component: { template: '<div>Edit Todo Form</div>' },
            }
        ]
    }
]

function page(path) {
    return () => import(`../views/${path}.vue`).then(m => m.default || m)
}

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;