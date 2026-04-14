import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'bootstrap'
import './assets/styles/main.scss'
import { Icon } from '@iconify/vue' 
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.component('Icon', Icon)
app.mount('#app')