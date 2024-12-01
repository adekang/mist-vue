import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import { defineConfig } from 'vitepress'
import { getNav } from './config/nav'
import { getSidebar } from './config/siderbar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/mist-vue/',
  title: 'Mist Vue',
  description: 'This is a vue component library',
  vite: {
    plugins: [
      vitepressDemo({
        glob: ['**/demos/*.vue'],
      }),
    ],
  },
  themeConfig: {
    sidebar: getSidebar(),
    nav: getNav(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/adekang/mist-vue' }],
  },

})
