import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs-extra'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames: () => 'mist-vue.css',
        dir: '../mist-vue/dist',
        exports: 'named',
      },
    },
    lib: {
      entry: 'src/styles.ts',
      formats: ['es'],
      fileName: () => 'mist-ui-style.js',
    },
  },
  plugins: [
    {
      name: 'remove:mist-ui-style.js',
      closeBundle() {
        const tovPath = fileURLToPath(new URL('../mist-vue/dist', import.meta.url))
        const styleFilePath = path.resolve(tovPath, 'mist-ui-style.js')
        fs.removeSync(styleFilePath)
      },
    },
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
})
