import Main from '@/pages/Main'
import Characters from '@/pages/Characters'
import CharacterPage from '@/pages/CharacterPage'
import Wishcounter from '@/pages/WishCounter'
import Calculator from '@/pages/Calculator'
import PostPage from '@/pages/PostPage'
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/characters',
        component: Characters,
    },
    {
        path: '/characters/:name',
        component: CharacterPage,
    },
    {
        path: '/wishcounter',
        component: Wishcounter,
    },
    {
        path: '/calculator',
        component: Calculator,
    },
    {
        path: '/todo',
        component: PostPage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;