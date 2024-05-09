import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))
export default defineConfig({
  plugins: [
    vueJsx(),
    vue(),
  ],
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: '../mist-vue/dist',
        exports: 'named',
        globals: {
          vue: 'vue',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd'],
      fileName: () => 'mist-vue.js',
      name: 'MistUI',
    },
  },
})
