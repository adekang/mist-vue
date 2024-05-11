import type { App } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import * as components from './components'

export * from './components'

library.add(fas)
export default {
  install: (app: App) => {
    for (const c in components)
      app.use(components[c as keyof typeof components])
  },
}
