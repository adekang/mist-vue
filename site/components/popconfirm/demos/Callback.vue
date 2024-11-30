<script setup lang="ts">
import {MPopconfirm, MButton} from 'mist-vue'
</script>

<template>
  <m-popconfirm
    width="220"
    confirm-button-text="Delete"
    cancel-button-text="No,Thanks"
    icon="trash"
    icon-color="#626aef"
    title="Are you sure to delete this item?"
  >
    <m-button>Delete</m-button>
  </m-popconfirm>
</template>
