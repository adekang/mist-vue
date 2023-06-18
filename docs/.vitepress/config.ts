import {defineConfig} from 'vitepress'
import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import VitePluginVitepressDemo from 'vite-plugin-vitepress-demo'
import {getSidebar} from './config/siderbar'
import {getNav} from './config/nav'

export default defineConfig({
    title: 'Mist-Vue',
    vite: {
        plugins: [
            vueJsxPlugin(),
            VitePluginVitepressDemo({
                glob: ['**/demos/**/*.vue']
            })
        ],
        server: {
            port: 4000
        }
    },
    themeConfig: {
        sidebar: getSidebar(),
        nav: getNav(),
        socialLinks: [{icon: 'github', link: 'https://github.com'}]
    }
})
