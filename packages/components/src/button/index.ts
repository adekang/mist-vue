import { withInstall } from '../_utils'
import _ButtonGroup from './button-group.vue'
import _Button from './button.vue'

export * from './button-types.ts'

// app.use 注册
// 具名导出
export const MButton = withInstall(_Button)
export const MButtonGroup = withInstall(_ButtonGroup)

// 默认导出
export default MButton
// export { default as MButton } from './button.vue';
