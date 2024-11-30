import type { Placement, Strategy } from '@floating-ui/vue'

export interface TooltipProps {
  content?: string
  trigger?: 'hover' | 'click' | 'contextmenu'
  placement?: Placement
  strategy?: Strategy
  manual?: boolean
  disabled?: boolean
  transition?: string
  showTimeout?: number
  hideTimeout?: number
  showArrow?: boolean
}

export interface TooltipEmits {
  (e: 'visibleChange', value: boolean): void

  (e: 'clickOutside'): void
}

export interface TooltipInstance {
  show: () => void
  hide: () => void
}
