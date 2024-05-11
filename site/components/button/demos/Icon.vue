<script setup lang="ts">
import { MButton } from 'mist-vue'
</script>

<template>
  <div>
    <MButton type="primary" icon="edit" />
    <MButton type="primary" icon="share" />
    <MButton type="primary" icon="trash" />
    <MButton type="primary" icon="search">Search</MButton>
    <MButton type="primary">
      Upload<m-icon icon="upload" style="margin-left: 8px" />
    </MButton>
  </div>
</template>
