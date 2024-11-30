<script setup lang="ts">
import { MButton } from 'mist-vue'
</script>

<template>
  <p>
    <MButton>Default</MButton>
    <MButton type="primary">
      Primary
    </MButton>
    <MButton type="success">
      Success
    </MButton>
    <MButton type="info">
      Info
    </MButton>
    <MButton type="warning">
      Warning
    </MButton>
    <MButton type="danger">
      Danger
    </MButton>
  </p>
  <p>
    <MButton disabled>
      Default
    </MButton>
    <MButton type="primary" disabled>
      Primary
    </MButton>
    <MButton type="success" disabled>
      Success
    </MButton>
    <MButton type="info" disabled>
      Info
    </MButton>
    <MButton type="warning" disabled>
      Warning
    </MButton>
    <MButton type="danger" disabled>
      Danger
    </MButton>
  </p>
</template>
