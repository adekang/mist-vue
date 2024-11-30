<script setup lang="ts">
import type { ButtonInstance } from '../button'
import type { TooltipEmits, TooltipInstance, TooltipProps } from './types'
import { createPopper, type Instance } from '@popperjs/core'

import { bind, debounce, type DebouncedFunc } from 'lodash-es'
import { computed, onUnmounted, type Ref, ref, watch, watchEffect } from 'vue'
import { useClickOutside } from '../_hooks'
import useEvenstToTiggerNode from './useEvenstToTiggerNode.ts'

defineOptions({
  name: 'MTooltip',
})
const props = withDefaults(defineProps<_TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  showTimeout: 0,
  hideTimeout: 200,
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
const _triggerNode = ref<HTMLElement>()

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
  placement: props.placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
  ],
  ...props.popperOptions,
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

let popperInstance: null | Instance
function destroyPopperInstance() {
  popperInstance?.destroy()
  popperInstance = null
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

watch(
  visible,
  (val) => {
    if (!val)
      return

    if (triggerNode.value && popperNode.value) {
      popperInstance = createPopper(
        triggerNode.value,
        popperNode.value,
        popperOptions.value,
      )
    }
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

onUnmounted(() => {
  destroyPopperInstance()
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

    <transition :name="transition" @after-leave="destroyPopperInstance">
      <div
        v-if="visible"
        ref="popperNode"
        class="m-tooltip__popper"
        v-on="dropdownEvents"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <div id="arrow" data-popper-arrow />
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import "./style/index.scss";
</style>
