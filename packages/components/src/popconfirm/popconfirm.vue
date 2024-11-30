<script setup lang="ts">
import type { TooltipInstance } from '../tooltip'
import type { PopconfirmEmits, PopconfirmProps } from './types.ts'
import { computed, ref } from 'vue'
import { addUnit } from '../_utils/style.ts'
import MButton from '../button/button.vue'
import MIcon from '../Icon/Icon.vue'
import MTooltip from '../tooltip/tooltip.vue'

defineOptions({
  name: 'MPopconfirm',
})
const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: '',
  confirmButtonType: 'primary',
  icon: 'question-circle',
  iconColor: '#f90',
  hideAfter: 200,
  width: 150,
})
const emits = defineEmits<PopconfirmEmits>()
const style = computed(() => ({ width: addUnit(props.width) }))
const tooltipRef = ref<TooltipInstance>()

function hidePopper() {
  tooltipRef.value?.hide()
}

function confirm(e: MouseEvent) {
  emits('confirm', e)
  hidePopper()
}

function cancel(e: MouseEvent) {
  emits('cancel', e)
  hidePopper()
}
</script>

<template>
  <MTooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
    <template #content>
      <div class="m-popconfirm" :style="style">
        <div class="m-popconfirm__main">
          <MIcon v-if="!hideIcon && icon" :icon="icon" :color="iconColor" />
          {{ title }}
        </div>
        <div class="m-popconfirm__action">
          <MButton
            size="small"
            class="m-popconfirm__cancel"
            :type="cancelButtonType"
            @click="cancel"
          >
            {{ cancelButtonText ?? 'Cancel' }}
          </MButton>
          <MButton
            size="small"
            class="m-popconfirm__confirm"
            :type="confirmButtonType"
            @click="confirm"
          >
            {{ confirmButtonText ?? 'Confirm' }}
          </MButton>
        </div>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default" />
    </template>
  </MTooltip>
</template>
