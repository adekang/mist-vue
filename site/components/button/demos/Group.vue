<script setup lang="ts">
import { MButton } from 'mist-vue'
</script>

<template>
  <p>
    <m-button-group disabled>
      <MButton type="primary" icon="arrow-left">Previous Page</MButton>
      <MButton type="primary">
        Next Page<m-icon icon="arrow-right" style="margin-left: 8px" />
      </MButton>
    </m-button-group>
  </p>
  <p>
    <m-button-group type="warning" size="small">
      <MButton type="primary" icon="edit" round />
      <MButton type="primary" icon="share" />
      <MButton type="primary" icon="trash" round />
    </m-button-group>
  </p>
</template>
