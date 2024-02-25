# 开始

**安装**

```vue
pnpm add mist-vue
```

## 按需导入
您需要使用额外的插件来导入要使用的组件。

### 自动导入

首先你需要安装`unplugin-vue-components` 和 `unplugin-auto-import`这两款插件
```vue
npm install -D unplugin-vue-components unplugin-auto-import
```

然后把下列代码插入到你的 Vite

**Vite**

```vue
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import MistResolver from 'mist-vue/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [MistResolver()],
    }),
    Components({
      resolvers: [MistResolver()],
    }),
  ],
})
```

## 全局配置

完整引入：

```vue
import { createApp } from 'vue'
import Mist from 'mist-vue'
import 'mist-vue/dist/index.css'

import App from './App.vue'

const app = createApp(App)
app.use(Mist)
```

