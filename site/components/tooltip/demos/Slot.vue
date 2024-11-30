<script lang="ts" setup>
import { MButton, MTooltip } from 'mist-vue'
</script>

<template>
  <MTooltip placement="top">
    <template #content>
      multiple lines<br>second line
    </template>
    <MButton>Top center</MButton>
  </MTooltip>
</template>
