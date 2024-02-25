import { defineConfig } from 'vitepress'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import MistResolver from 'mist-vue/MistResolver'
import { getSidebar } from './config/siderbar'
import { getNav } from './config/nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/mist-vue/',
  outDir: './dist',
  title: 'Mist Vue',
  description: 'This is a vue component library',
  vite: {
    plugins: [
      vitepressDemo({
        glob: ['**/demos/*.vue'],
      }),
      AutoImport({
        resolvers: [MistResolver()],
      }),
      Components({
        resolvers: [MistResolver()],
      }),
    ],
  },
  themeConfig: {
    sidebar: getSidebar(),
    nav: getNav(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/adekang/mist-vue' }],
  },
})
