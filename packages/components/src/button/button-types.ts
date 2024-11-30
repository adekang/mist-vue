// import type { ExtractPropTypes, PropType } from 'vue'
//
// export type MButtonTypes =
//     | 'default'
//     | 'primary'
//     | 'success'
//     | 'info'
//     | 'warning'
//     | 'danger'
//
// export type ButtonSize = 'large' | 'medium' | 'small'
// // 属性对象
// export const buttonProps = {
//   type: {
//     type: String as PropType<MButtonTypes>,
//     default: 'primary',
//   },
//   size: {
//     type: String as PropType<ButtonSize>,
//     default: 'medium',
//   },
//   disabled: {
//     type: Boolean,
//     default: false,
//   },
//   block: {
//     type: Boolean,
//     default: false,
//   },
// } as const // as const 不可以动态的修改buttonProps，只能读取
//
// // 属性类型
// export type ButtonProps = ExtractPropTypes<typeof buttonProps>

import type { Component, ComputedRef, Ref } from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'default' | 'large' | 'small'

export interface ButtonProps {
  tag?: string | Component
  type?: ButtonType
  size?: ButtonSize
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  autofocus?: boolean
  nativeType?: NativeType
  icon?: string
  loading?: boolean
  loadingIcon?: string
  useThrottle?: boolean
  throttleDuration?: number
}

export interface ButtonGroupProps {
  size?: ButtonSize
  type?: ButtonType
  disabled?: boolean
}

export interface ButtonGroupContext {
  size?: ButtonSize
  type?: ButtonType
  disabled?: boolean
}

export interface ButtonEmits {
  (e: 'click', value: MouseEvent): void
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>
  disabled: ComputedRef<boolean>
  size: ComputedRef<ButtonSize | ''>
  type: ComputedRef<ButtonType | ''>
}
