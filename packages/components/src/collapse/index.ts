import { withInstall } from '../_utils'
import _CollapseItem from './collapse-item.vue'
import _Collapse from './collapse.vue'

export * from './types'

// app.use 注册
// 具名导出
export const MCollapse = withInstall(_Collapse)
export const MCollapseItem = withInstall(_CollapseItem)
