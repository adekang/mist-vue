<script lang="ts" setup>
import { ref } from 'vue'
import { MButton, MTooltip } from 'mist-vue'

const disabled = ref(false)
</script>

<template>
  <MTooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
  >
    <MButton @click="disabled = !disabled"
      >click to {{ disabled ? "active" : "close" }} tooltip function</MButton
    >
  </MTooltip>
</template>
