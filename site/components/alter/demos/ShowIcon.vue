<script lang="ts" setup>
import { MAlert } from 'mist-vue'
</script>

<template>
  <div style="max-width: 600px">
    <MAlert title="Success alert" type="success" show-icon />
    <MAlert title="Info alert" type="info" show-icon />
    <MAlert title="Warning alert" type="warning" show-icon />
    <MAlert title="Error alert" type="danger" show-icon />
  </div>
</template>
