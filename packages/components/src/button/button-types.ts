import type { ExtractPropTypes, PropType } from 'vue'

export type MButtonTypes =
    | 'default'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'

export type ButtonSize = 'large' | 'medium' | 'small'
// 属性对象
export const buttonProps = {
  type: {
    type: String as PropType<MButtonTypes>,
    default: 'primary',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
} as const // as const 不可以动态的修改buttonProps，只能读取

// 属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
