<script setup lang="ts">
import { MButton, MInput, MTree } from '@mist-vue/components'
import { ref } from '@vue/runtime-core'

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
  <h1>启动测试</h1>
  <MButton type="primary">
    测试一
  </MButton>
  <MButton type="warning">
    测试二
  </MButton>
  <h1>input测试</h1>
  <MInput type="number" />

  <h1>MTree</h1>
  <MTree :data="data">
    1111
  </MTree>
</template>
