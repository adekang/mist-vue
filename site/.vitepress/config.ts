import { defineConfig } from 'vitepress'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'

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
    ],
  },
  themeConfig: {
    sidebar: getSidebar(),
    nav: getNav(),
    socialLinks: [{ icon: 'github', link: 'https://github.com/adekang/mist-vue' }],
  },
})
