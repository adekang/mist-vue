import { createApp } from 'vue'
import Mist from '@mist-vue/components/src'
import App from './app.vue'
import '@mist-vue/components/src/styles'

const app = createApp(App)

app.use(Mist)
app.mount('#app')
