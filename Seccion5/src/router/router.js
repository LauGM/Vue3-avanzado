import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        component: HomeView,
    },
    {
        path: '/login',
        component: () => import('../views/LoginView.vue'),
    },
    {
        path: '/register',
        component: () => import('../views/RegisterView.vue'),
    },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router