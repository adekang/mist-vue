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
  <p>
    <MButton size="large">
      Large
    </MButton>
    <MButton>Default</MButton>
    <MButton size="small">
      Small
    </MButton>
    <MButton size="large" icon="search">
      Search
    </MButton>
    <MButton icon="search">
      Search
    </MButton>
    <MButton size="small" icon="search">
      Search
    </MButton>
  </p>
  <p>
    <MButton size="large" round>
      Large
    </MButton>
    <MButton round>
      Default
    </MButton>
    <MButton size="small" round>
      Small
    </MButton>
    <MButton size="large" icon="search" round>
      Search
    </MButton>
    <MButton icon="search" round>
      Search
    </MButton>
    <MButton size="small" icon="search" round>
      Search
    </MButton>
  </p>
  <p>
    <MButton size="large" icon="search" circle />
    <MButton icon="search" circle />
    <MButton size="small" icon="search" circle />
  </p>
</template>
