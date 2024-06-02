<script lang="ts" setup>
import { MAlert } from 'mist-vue'
</script>

<template>
  <div style="max-width: 600px">
    <MAlert title="Success alert" type="success" center show-icon />
    <MAlert title="Info alert" type="info" center show-icon />
    <MAlert title="Warning alert" type="warning" center show-icon />
    <MAlert title="Error alert" type="danger" center show-icon />
  </div>
</template>
