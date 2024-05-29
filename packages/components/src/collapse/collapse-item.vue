<script setup lang="ts">
import { computed, inject } from 'vue'
import MIcon from '../Icon/Icon.vue'
import type { CollapseItemProps } from './types'
import { COLLAPSE_CTX_KEY } from './constants.ts'
import transitionEvents from './transitionEvents.ts'

defineOptions({
  name: 'MCollapseItem',
})

const props = defineProps<CollapseItemProps>()
const ctx = inject(COLLAPSE_CTX_KEY, null)
const isActive = computed(() => {
  return ctx?.activeNames.value.includes(props.name)
})

function handleClick() {
  if (props.disabled)
    return
  if (ctx)
    ctx.handleItemClick(props.name)
}
</script>

<template>
  <div
    class="m-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="m-collapse-item__header"
      :id="`item-headm-${name}`"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      @click="handleClick"
    >
      <span class="m-collapse-item__title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <MIcon icon="angle-right" class="header-angle"/>
    </div>
    <transition name="slide" v-on="transitionEvents">
      <div class="m-collapse-item__wapper" v-show="isActive">
        <div class="m-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
@import './style/collapse.scss';
</style>
