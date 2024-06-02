<script lang="ts" setup>
import { computed, ref } from 'vue'
import MIcon from '../Icon/Icon.vue'
import { typeIconMap } from '../_utils'
import type { AlertEmits, AlertInstance, AlertProps } from './types.ts'

defineOptions({
  name: 'MAlert',
})

const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  type: 'info',
  closable: false,
})
const emits = defineEmits<AlertEmits>()
const slots = defineSlots()
const visible = ref(true)
const iconName = computed(() => typeIconMap.get(props.type) ?? 'circle-info')
const withDescription = computed(() => props.description || slots.default)

function close() {
  visible.value = false
  emits('close')
}

function open() {
  visible.value = true
}

defineExpose<AlertInstance>({
  open,
  close,
})
</script>

<template>
  <transition name="m-alert-fade">
    <div
      v-show="visible"
      class="m-alert"
      role="alert"
      :class="{
        [`m-alert__${type}`]: type,
        [`m-alert__${effect}`]: effect,
        'text-center': center,
      }"
    >
      <MIcon
        v-if="showIcon"
        class="m-alert__icon"
        :class="{ 'big-icon': withDescription }"
        :icon="iconName"
      />
      <div class="m-alert__content">
        <span
          class="m-alert__title"
          :class="{ 'with-desc': withDescription }"
          :style="{ display: center && !showIcon ? 'flow' : 'inline' }"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="m-alert__description">
          <slot>{{ description }}</slot>
        </p>
        <div class="m-alert__close" v-if="closable">
          <MIcon @click.stop="close" icon="xmark"/>
        </div>
      </div>
    </div>
  </transition>
</template>
