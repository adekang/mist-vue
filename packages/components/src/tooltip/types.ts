import type { Options, Placement } from '@popperjs/core'

export interface TooltipProps {
  content?: string
  trigger?: 'hover' | 'click' | 'contextmenu'
  placement?: Placement
  manual?: boolean
  disabled?: boolean
  popperOptions?: Partial<Options>
  transition?: string
  showTimeout?: number
  hideTimeout?: number
}

export interface TooltipEmits {
  (e: 'visibleChange', value: boolean): void
  (e: 'clickOutside'): void
}

export interface TooltipInstance {
  show(): void
  hide(): void
}
