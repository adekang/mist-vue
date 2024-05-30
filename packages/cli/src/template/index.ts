import { upperFirst } from './utils'

export default function genIndexTemplate(name: string) {
  const compName = upperFirst(name)
  return `\
import { withInstall } from '../_utils'
import _${compName} from './${name}'

export const M${compName} = withInstall(_${compName})

export * from './types'

// 默认导出
export default M${compName}
`
}
