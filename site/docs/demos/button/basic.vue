<docs>
---
title: 基础按钮
---

Hello World This is Test Docs block code in `button.vue`.
</docs>

<script setup lang="ts">
import { MButton, MInput } from 'mist-vue'
</script>

<template>
  <div>
    <MButton type="warning">
      基础按钮
    </MButton>
    <MButton type="primary">
      基础按钮
    </MButton>
    <MInput type="number" />
  </div>
</template>

<style scoped></style>
