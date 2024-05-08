import { withInstall } from '@mist-vue/utils'
import _Button from './button.vue'

// app.use 注册
// 具名导出
export const MButton = withInstall(_Button)

// 默认导出
export default MButton
// export { default as MButton } from './button.vue';
