import { upperFirst } from './utils'

// 创建组件核心文件模板
export default function genCoreTemplate(name: string) {
  const compName = `M${upperFirst(name)}`
  const propsTypeName = `${upperFirst(name)}Props`
  const propsName = `${name}Props`
  const propsFileName = `${name}-type`
  const className = `m-${name}`

  return `\
import { defineComponent } from 'vue'
import { ${propsName} } from './${propsFileName}'
import type { ${propsTypeName} } from './${propsFileName}'

export default defineComponent({
  name: '${compName}',
  props: ${propsName},
  setup(props: ${propsTypeName}) {
    return () => {
      return (
        <div class="${className}"></div>
      )
    }
  },
}) 
`
}
