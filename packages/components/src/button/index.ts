import { withInstall } from '../_util'
import _Button from './button.vue'

// app.use 注册
// 具名导出
export const Button = withInstall(_Button)

// 默认导出
export default Button
// export { default as MButton } from './button.vue';
