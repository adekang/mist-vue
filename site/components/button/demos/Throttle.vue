<script setup lang="ts">
import { MButton } from 'mist-vue'

function handleBtnClick() {
  console.log('click')
}
</script>

<template>
  <p>
    <MButton @click="handleBtnClick"> with throttle</MButton>
    <MButton :use-throttle="false" @click="handleBtnClick">
      without throttle
    </MButton
    >
  </p>
</template>
