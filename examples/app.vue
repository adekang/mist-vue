<script setup lang="ts">
import { MButton } from '@mist-vue/components/src'

function handleClick() {
  console.log('hello')
}
</script>

<template>
  <MButton type="warning" size="large" useThrottle @click="handleClick" loading>你好</MButton>
</template>
