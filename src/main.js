import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/styles/main.scss'
import { Icon } from '@iconify/vue' 
import router from './router'

const app = createApp(App)
app.use(router)
app.component('Icon', Icon)
app.mount('#app')