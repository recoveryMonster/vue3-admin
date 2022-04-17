import { createApp } from 'vue'
import App from './App'
import router from '@/router/index'
import '@/styles/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')
