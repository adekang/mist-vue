function toKebabCase(str) {
  return str
    // 匹配所有大写字母和单词（包括由非字母字符分隔的）
    .match(/[A-Z]{2,}(?=[A-Z][a-z]|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g)
    // 转换为小写
    .map(x => x.toLowerCase())
    // 使用短横线连接
    .join('')
}

function getSideEffects(partialName: string) {
  return [
    // "element-plus/lib/theme-chalk/base.css",
    `mist-vue/es/src/${partialName}/style/index.css`,
  ]
}

// import 'mist-vue/es/src/button/style/index.css'
function resolveComponent(name: any, options: any) {
  if (options.exclude && name.match(options.exclude))
    return
  if (!name.match(/^M[A-Z]/))
    return
  const partialName = toKebabCase(name.slice(1))
  return {
    // from: `mist-vue/es/src/${partialName}`,
    name,
    from: 'mist-vue',
    sideEffects: getSideEffects(partialName, options),
  }
}

function MistResolver(options = {}) {
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
        if (name.startsWith('M')) {
          const options2 = await resolveOptions()
          return resolveComponent(name, options2)
        }
      },
    },
  ]
}

export default MistResolver as any
