import { withInstall } from '../_utils'
import _Icon from './Icon.vue'

export * from './types.ts'

// app.use 注册
// 具名导出
export const Icon = withInstall(_Icon)
export const MIcon = withInstall(_Icon)

// 默认导出
export default Icon
// export { default as MButton } from './button.vue';
