<docs>
---
title: 带有复选框的树组件
---

请设置 `checkable` 属性为 `true`。
</docs>

<script setup lang="ts">
import { MTree } from 'mist-vue'
import { ref } from 'vue'
import 'mist-vue/es/src/tree/style/index.css'

const data = ref([{
  id: '1',
  label: 'js',
  children: [
    {
      id: '1001',
      label: 'vue',
      children: [
        { id: '100101', label: 'vue2' },
        { id: '100102', label: 'vue3' },
      ],
    },
    { id: '1002', label: 'react' },
  ],
},
{
  id: '2',
  label: 'webpack',
  checked: true,
},
{
  id: '3',
  label: 'css',
  children: [
    { id: '3001', label: 'sass' },
    { id: '3002', label: 'less' },
    { id: '3003', label: 'stylus' },
  ],
},
])
</script>

<template>
  <div>
    <MTree :data="data" checkable/>
  </div>
</template>

<style scoped></style>
