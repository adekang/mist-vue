import Mist from '@mist-vue/components/src'
import { createApp } from 'vue'
import App from './app.vue'
import '@mist-vue/components/src/styles'

const app = createApp(App)

app.use(Mist)
app.mount('#app')
