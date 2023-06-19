<script lang="ts" setup>
import './style/index.less'
import { computed } from 'vue'

defineOptions({ name: 'MButton' })
const buttonProps = defineProps<ButtonProps>()

interface ButtonProps {
  type?: string
}

const buttonStyle = computed(() => {
  return { [`m-button--${buttonProps.type}`]: buttonProps.type }
})
</script>

<template>
  <button class="m-button" :class="buttonStyle">
    <slot />
  </button>
</template>
