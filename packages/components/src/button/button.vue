<script lang="ts" setup>
import { computed } from 'vue'
import { buttonProps } from './button-types'

defineOptions({ name: 'MButton' })
const props = defineProps(buttonProps)

const buttonStyle = computed(() => {
  return { [`m-btn--${props.type}`]: props.type }
})
</script>

<template>
  <button class="m-btn" :class="buttonStyle">
    <slot />
  </button>
</template>
