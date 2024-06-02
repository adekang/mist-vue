<script lang="ts" setup>
import { MAlert } from 'mist-vue'
</script>

<template>
  <div style="max-width: 600px">
    <MAlert
      title="Success alert"
      type="success"
      description="More text description"
      show-icon
    />
    <MAlert
      title="Info alert"
      type="info"
      description="More text description"
      show-icon
    />
    <MAlert
      title="Warning alert"
      type="warning"
      description="More text description"
      show-icon
    />
    <MAlert
      title="Error alert"
      type="danger"
      description="More text description"
      show-icon
    />
  </div>
</template>
