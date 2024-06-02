<script setup lang="ts">
import { MButton, MButtonGroup, MIcon } from 'mist-vue'
</script>

<template>
  <p>
    <MButtonGroup disabled>
      <MButton type="primary" icon="arrow-left">Previous Page</MButton>
      <MButton type="primary">
        Next Page
        <MIcon icon="arrow-right" style="margin-left: 8px"/>
      </MButton>
    </MButtonGroup>
  </p>
  <p>
    <MButtonGroup type="warning" size="small">
      <MButton type="primary" icon="edit" round/>
      <MButton type="primary" icon="share"/>
      <MButton type="primary" icon="trash" round/>
    </MButtonGroup>
  </p>
</template>
