# 生成样式

```vue
<script setup lang="ts">
import { useClassnames } from '_utils'
import { ref } from 'vue'

const { c, cm, ce } = useClassnames('button')
const testRef = ref(false)
function handleClick() {
  testRef.value = !testRef.value
}

// m-button--primary
// Block m-button
// Element __
// Modifier --lg
</script>

<template>
  <div :class="c('primary')">
    {{ c(cm('primary')) }}
    <button @click="handleClick">
      按钮
    </button>
  </div>
</template>
```
