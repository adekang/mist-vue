<docs>
---
title: 基础按钮
---

Hello World This is Test Docs block code in `button.vue`.
</docs>

<script setup lang="ts">
import { MButton } from 'mist-vue'
import 'mist-vue/dist/mist-vue.css'
</script>

<template>
  <div>
    <MButton type="warning" size="large">
      基础按钮
    </MButton>
    <MButton type="primary">
      基础按钮
    </MButton>
  </div>
</template>

<style scoped></style>
