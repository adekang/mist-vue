<script setup lang="ts">
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import { computed } from 'vue'

defineOptions({
  name: 'MIcon',
  inheritAttrs: false,
})

const props = defineProps<IconProps>()

const filterProps = computed(() => omit(props, ['type', 'color']))
const customStyles = computed(() => ({ color: props.color ?? null }))
</script>

<template>
  <i
    class="m-icon"
    :class="{ [`m-icon--${type}`]: type }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <FontAwesomeIcon v-bind="filterProps" />
  </i>
</template>
