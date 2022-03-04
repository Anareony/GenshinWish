import Main from '@/pages/Main'
import Characters from '@/pages/Characters'
import CharacterPage from '@/pages/CharacterPage'
import Wishcounter from '@/pages/WishCounter'
import Calculator from '@/pages/Calculator'
import PostPage from '@/pages/PostPage'
import { createWebHashHistory, createRouter } from 'vue-router'

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
    routes,
    history: createWebHashHistory()
})

export default router;