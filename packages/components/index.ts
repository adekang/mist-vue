import type { App } from 'vue'
import * as components from './src/components'

export * from './src/components'

export default {
  install: (app: App) => {
    for (const c in components)
      app.use(components[c as keyof typeof components])
  },
}
