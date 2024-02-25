import { kebabCase } from 'unplugin-vue-components'

function getSideEffects(partialName, options) {
  return [
    // "element-plus/lib/theme-chalk/base.css",
    `mist-vue/es/src/${partialName}/style/index.css`,
  ]
}

// import 'mist-vue/es/src/button/style/index.css'
function resolveComponent(name, options) {
  console.log(name, options)
  if (options.exclude && name.match(options.exclude))
    return
  if (!name.match(/^M[A-Z]/))
    return
  const partialName = kebabCase(name.slice(1))
  return {
    // from: `mist-vue/es/src/${partialName}`,
    name,
    from: 'mist-vue',
    sideEffects: getSideEffects(partialName, options),
  }
}

export function MistResolver(options = {}) {
  console.log('插件运行了')
  let optionsResolved
  async function resolveOptions() {
    if (optionsResolved)
      return optionsResolved
    optionsResolved = Object.assign({
      ssr: false,
      // version: await getPkgVersion("element-plus", "2.2.2"),
      importStyle: 'css',
      directives: true,
      exclude: 0,
      // noStylesComponents: options.noStylesComponents || [],
      nightly: false,
    }, options)
    return optionsResolved
  }

  return [
    {
      type: 'component',
      resolve: async (name) => {
        console.log('name::', name)
        const options2 = await resolveOptions()
        return resolveComponent(name, options2)
      },
    },
  ]
}
