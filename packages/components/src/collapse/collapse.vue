<script setup lang="ts">
import { provide, ref, watch, watchEffect } from 'vue'
import { debugWarn } from '../_utils'
import type { CollapseEmits, CollapseItemName, CollapseProps } from './types'
import { COLLAPSE_CTX_KEY } from './constants.ts'

defineOptions({
  name: 'MCollapse',
})

const props = defineProps<CollapseProps>()

const emits = defineEmits<CollapseEmits>()

const COMPONENT_NAME = 'MCollapse' as const

const activeNames = ref(props.modelValue)

watchEffect(() => {
  if (props.accordion && activeNames.value.length > 1)
    debugWarn(COMPONENT_NAME, 'Accordion mode should have one active name')
})

function handleItemClick(item: CollapseItemName) {
  let _activeNames = [...activeNames.value]

  if (props.accordion) {
    _activeNames = [_activeNames[0] === item ? '' : item]
    updateActiveNames(_activeNames)
    return
  }
  const index = _activeNames.indexOf(item)
  if (index > -1)
    _activeNames.splice(index, 1)
  else
    _activeNames.push(item)

  updateActiveNames(_activeNames)
}

function updateActiveNames(newNames: CollapseItemName[]) {
  activeNames.value = newNames
  emits('update:modelValue', newNames)
  emits('change', newNames)
}

watch(() => props.modelValue, (newNames) => {
  updateActiveNames(newNames)
})
provide(COLLAPSE_CTX_KEY, {
  activeNames,
  handleItemClick,
})
</script>

<template>
  <div class="m-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
