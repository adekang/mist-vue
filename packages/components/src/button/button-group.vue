<script setup lang="ts">
import type { ButtonGroupProps } from './button-types.ts'
import { provide, reactive, toRef } from 'vue'
import { BUTTON_GROUP_CTX_Key } from './contants'

defineOptions({
  name: 'MButtonGroup',
})

const props = defineProps<ButtonGroupProps>()
provide(BUTTON_GROUP_CTX_Key, reactive({
  size: toRef(props, 'size'),
  type: toRef(props, 'type'),
  disabled: toRef(props, 'disabled'),
}))
</script>

<template>
  <div class="m-button-group">
    <slot />
  </div>
</template>
