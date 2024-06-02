<script setup>
import { MAlert } from 'mist-vue'

function handleClose() {
  alert('Alert is closed')
}
</script>

<template>
  <div class="basic block">
    <MAlert title="Unclosable alert" type="success" :closable="false"/>
    <MAlert title="Alert with callback" type="warning" @close="handleClose"/>
  </div>
</template>
