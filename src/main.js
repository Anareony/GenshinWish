import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI/index'
import router from '@/router/router'
import store from '@/store/store'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

app
    .use(router)
    .use(store)
    .mount('#app')
