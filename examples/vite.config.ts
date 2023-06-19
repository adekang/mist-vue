import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [vue(), DefineOptions(), vueJsx()],
})
