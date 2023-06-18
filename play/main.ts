import { createApp } from "vue";
import App from "./app.vue";

import Mist from '@mist-vue/components';

const app = createApp(App);

app.use(Mist)
app.mount("#app");
