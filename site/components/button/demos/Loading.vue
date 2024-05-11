<docs>
您可以使用 `loading` 插槽或 `loadingIcon` 属性自定义您的 loading 图标

ps: `loading` 插槽优先级高于 `loadingIcon` 属性
</docs>

<script setup lang="ts">
import { MButton } from 'mist-vue'
</script>

<template>
  <div>
    <MButton type="primary" loading>Loading</MButton>
    <MButton type="primary" loading-icon="circle-notch" loading
    >Loading</MButton
    >
    <MButton type="primary" loading>
      <template #loading>
        <m-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </MButton>
  </div>
</template>
