import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    emptyOutDir: false,
    // 压缩
    minify: false,
    lib: {
      entry: 'src/index.ts',
    },
    rollupOptions: {
      // 忽略打包vue文件
      external: [
        'vue',
        /\.less|\.scss/,
        '@mist-vue/utils',
        'lodash-es',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@floating-ui/vue',
      ],
      output: [
        {
          // 打包格式
          format: 'es',
          // 打包后文件名
          entryFileNames: '[name].js',
          // 让打包目录和我们目录对应
          preserveModules: true,
          preserveModulesRoot: './src',
          exports: 'named',
          // 配置打包根目录
          dir: '../mist-vue/es',
        },
      ],
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: './src',
      outDir: ['../mist-vue/es'],
      exclude: ['**/__test__/**'],
    }),
    // {
    //   // 将所有输出文件中的 .scss 换成 .css
    //   name: 'style',
    //   generateBundle(config, bundle) {
    //     // 这里可以获取打包后的文件目录以及代码code
    //     const keys = Object.keys(bundle)
    //     for (const key of keys) {
    //       const bundler: any = bundle[key as any]
    //       // rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
    //       this.emitFile({
    //         type: 'asset',
    //         fileName: key, // 文件名名不变
    //         source: bundler.code.replace(/\.scss/g, '.css'),
    //       })
    //     }
    //   },
    // },
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
})
