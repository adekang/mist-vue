import { createApp } from 'vue'
import Mist from '@mist-vue/components'
import App from './app.vue'

const app = createApp(App)

app.use(Mist)
app.mount('#app')
