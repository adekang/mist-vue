import type { ExtractPropTypes, PropType } from 'vue'

type InputType = 'text' | 'number' | 'password'

export const inputProps = {
  type: {
    type: String as PropType<InputType>,
    default: 'text',
  },
} as const
export type InputProps = ExtractPropTypes<typeof inputProps>
