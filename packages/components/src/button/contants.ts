import type { InjectionKey } from 'vue'
import type { ButtonGroupContext } from './button-types.ts'

export const BUTTON_GROUP_CTX_Key: InjectionKey<ButtonGroupContext> = Symbol('BUTTON_GROUP_CTX_Key')
