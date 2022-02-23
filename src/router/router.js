import Main from '@/pages/Main'
import PostPage from '@/pages/PostPage'
import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/posts',
        component: PostPage,
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router;