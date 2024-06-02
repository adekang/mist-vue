<script lang="ts" setup>
import { MAlert } from 'mist-vue'
</script>

<template>
  <div style="max-width: 600px">
    <MAlert title="Success Alert" type="success" effect="dark" />
    <MAlert title="Info Alert" type="info" effect="dark" />
    <MAlert title="Warning Alert" type="warning" effect="dark" />
    <MAlert title="Error Alert" type="danger" effect="dark" />
  </div>
</template>
