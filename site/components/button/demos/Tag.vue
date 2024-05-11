<docs>
---
title: icon
---

Hello World This is Test Docs block code in `button.vue`.
</docs>

<script setup lang="ts">
import { MButton } from 'mist-vue'
</script>

<script setup lang="ts">
</script>

<template>
  <MButton>button</MButton>
  <MButton tag="div" role="button" tabindex="0">div</MButton>
  <MButton
    type="primary"
    tag="a"
    href="https://github.com/EricWXY/eric-ui"
    target="_blank"
    rel="noopener noreferrer"
  >
    a
  </MButton>
</template>
