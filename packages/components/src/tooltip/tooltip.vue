<script setup lang="ts">
import type { CSSProperties, Ref } from 'vue'
import type { ButtonInstance } from '../button'
import type { TooltipEmits, TooltipInstance, TooltipProps } from './types'
import { arrow, computePosition, flip, offset, shift } from '@floating-ui/vue'

import { bind, debounce, type DebouncedFunc } from 'lodash-es'
import { computed, ref, watch, watchEffect } from 'vue'
import { useClickOutside } from '../_hooks'
import useEvenstToTiggerNode from './useEvenstToTiggerNode.ts'

defineOptions({
  name: 'MTooltip',
})
const props = withDefaults(defineProps<_TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  strategy: 'absolute',
  transition: 'fade',
  showTimeout: 0,
  hideTimeout: 200,
  showArrow: true,
})

const emits = defineEmits<TooltipEmits>()

interface _TooltipProps extends TooltipProps {
  virtualRef?: HTMLElement | ButtonInstance | void
  virtualTriggering?: boolean
}

const visible = ref(false)

const events: Ref<Record<string, EventListener>> = ref({})
const outerEvents: Ref<Record<string, EventListener>> = ref({})
const dropdownEvents: Ref<Record<string, EventListener>> = ref({})

const containerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
const arrowRef = ref<HTMLElement>()
const _triggerNode = ref<HTMLElement>()
const floatingStyles = ref<CSSProperties>({
  position: 'absolute',
  left: '0',
  top: '0',
})
const arrowStyles = ref<CSSProperties>({})
const placement = ref(props.placement)

const triggerNode = computed(() => {
  if (props.virtualTriggering) {
    return (
      // @tips any 为了 fix 一个初始设计上的小失误 （后续重构 "虚拟目标节点" 时解决）
      ((props.virtualRef as ButtonInstance)?.ref as any)
      ?? (props.virtualRef as HTMLElement)
      ?? _triggerNode.value
    )
  }
  return _triggerNode.value as HTMLElement
})

const popperOptions = computed(() => ({
  strategy: props.strategy,
  placement: props.placement,
  middleware: [shift(), flip(), offset(10), arrow(({ element: arrowRef }))],
}))

const openDelay = computed(() =>
  props.trigger === 'hover' ? props.showTimeout : 0,
)

const closeDelay = computed(() =>
  props.trigger === 'hover' ? props.hideTimeout : 0,
)

const triggerStrategyMap: Map<string, () => void> = new Map()
triggerStrategyMap.set('hover', () => {
  events.value.mouseenter = openFinal
  outerEvents.value.mouseleave = closeFinal
  dropdownEvents.value.mouseenter = openFinal
})
triggerStrategyMap.set('click', () => {
  events.value.click = togglePopper
})
triggerStrategyMap.set('contextmenu', () => {
  events.value.contextmenu = (e) => {
    e.preventDefault()
    openFinal()
  }
})

let openDebounce: DebouncedFunc<() => void> | void
let closeDebounce: DebouncedFunc<() => void> | void

function openFinal() {
  closeDebounce?.cancel()
  openDebounce?.()
}

function closeFinal() {
  openDebounce?.cancel()
  closeDebounce?.()
}

function togglePopper() {
  visible.value ? closeFinal() : openFinal()
}

function setVisible(val: boolean) {
  if (props.disabled)
    return
  visible.value = val
  emits('visibleChange', val)
}

function attachEvents() {
  if (props.disabled || props.manual)
    return
  triggerStrategyMap.get(props.trigger)?.()
}

function resetEvents() {
  events.value = {}
  outerEvents.value = {}
  dropdownEvents.value = {}
  attachEvents()
}

if (!props.manual)
  attachEvents()

const show: TooltipInstance['show'] = openFinal

const hide: TooltipInstance['hide'] = function () {
  openDebounce?.cancel()
  setVisible(false)
}

useClickOutside(containerNode, () => {
  emits('clickOutside')
  if (props.trigger === 'hover' || props.manual)
    return
  visible.value && closeFinal()
})

async function updatePosition() {
  if (triggerNode.value && popperNode.value) {
    const { x, y, placement: place, middlewareData, strategy } = await computePosition(
      triggerNode.value,
      popperNode.value,
      popperOptions.value,
    )
    placement.value = place
    floatingStyles.value = {
      position: strategy,
      left: `${x}px`,
      top: `${y}px`,
    }
    if (!props.showArrow)
      return
    const { arrow } = middlewareData
    arrowStyles.value = {
      left: `${arrow?.x}px`,
      top: `${arrow?.y}px`,
    }
  }
}

watch(
  visible,
  (val) => {
    if (!val) {
      window.onresize = null
      window.onscroll = null
      return
    }
    updatePosition()
    // 这里注意应该还要做一下debounce的处理
    window.onresize = debounce(updatePosition, 250)
    window.onscroll = debounce(updatePosition, 250)
  },
  { flush: 'post' },
)

watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      events.value = {}
      outerEvents.value = {}
      dropdownEvents.value = {}
      return
    }
    attachEvents()
  },
)

watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger === oldTrigger)
      return
    resetEvents()
  },
)

watch(
  () => props.disabled,
  (val, oldVal) => {
    if (val === oldVal)
      return
    openDebounce?.cancel()
    visible.value = false
    emits('visibleChange', false)
    resetEvents()
  },
)

watchEffect(() => {
  openDebounce = debounce(bind(setVisible, null, true), openDelay.value)
  closeDebounce = debounce(bind(setVisible, null, false), closeDelay.value)
})

useEvenstToTiggerNode(props, triggerNode, events, () => {
  openDebounce?.cancel()
  setVisible(false)
})

defineExpose<TooltipInstance>({
  show,
  hide,
})
</script>

<template>
  <div ref="containerNode" class="m-tooltip" v-on="outerEvents">
    <div
      v-if="!virtualTriggering"
      ref="_triggerNode"
      class="m-tooltip__trigger"
      v-on="events"
    >
      <slot />
    </div>
    <slot v-else name="default" />

    <transition :name="transition">
      <div
        v-if="visible"
        ref="popperNode"
        :data-popper-placement="placement"
        :style="floatingStyles"
        class="m-tooltip__popper"
        v-on="dropdownEvents"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div v-if="showArrow" id="arrow" ref="arrowRef" data-popper-arrow :style="arrowStyles" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import "./style/index.scss";
</style>
