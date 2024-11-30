<script lang="ts" setup>
import { MAlert } from 'mist-vue'
</script>

<template>
  <h2>通过 slot 传入内容</h2>
  <div style="max-width: 600px">
    <MAlert type="success" closable>
      Success alert
    </MAlert>
    <MAlert type="info" closable>
      Info alert
    </MAlert>
    <MAlert type="warning" closable>
      Warning alert
    </MAlert>
    <MAlert type="danger" closable>
      Error alert
    </MAlert>
  </div>
  <h2>通过 prop 传入内容</h2>
  <div style="max-width: 600px">
    <MAlert type="success" title="Success alert" closable />
    <MAlert type="info" title="Info alert" closable />
    <MAlert type="warning" title="Warning alert" closable />
    <MAlert type="danger" title="Error alert" closable />
  </div>
</template>
