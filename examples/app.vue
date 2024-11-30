<script setup lang="ts">
import { MAlert, MCollapse, MCollapseItem } from '@mist-vue/components/src'
import { ref } from 'vue'

const a = ref([1])
</script>

<template>
  <MCollapse v-model="a">
    <MCollapseItem title="title1" name="1">
      <div>content1</div>
    </MCollapseItem>
    <MCollapseItem title="title2" name="2">
      <div>content2</div>
    </MCollapseItem>
  </MCollapse>

  <hr>

  <MAlert title="title" description="description" type="success" closeable />
</template>
