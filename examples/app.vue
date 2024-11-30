<script setup lang="ts">
import { MButton, MTooltip }  from '@mist-vue/components/src'
</script>

<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <MTooltip
        trigger="click"
        class="box-item"
        content="Top Left prompts info"
        placement="top-start"
      >
        <MButton>top-start</MButton>
      </MTooltip>
      <MTooltip
        class="box-item"
        content="Top Center prompts info"
        placement="top"
      >
        <MButton>top</MButton>
      </MTooltip>
      <MTooltip
        class="box-item"
        content="Top Right prompts info"
        placement="top-end"
      >
        <MButton>top-end</MButton>
      </MTooltip>
    </div>
    <div class="row">
      <MTooltip
        class="box-item"
        content="Left Top prompts info"
        placement="left-start"
      >
        <MButton>left-start</MButton>
      </MTooltip>
      <MTooltip
        class="box-item"
        content="Right Top prompts info"
        placement="right-start"
      >
        <MButton>right-start</MButton>
      </MTooltip>
    </div>
    <div class="row">
      <MTooltip
        class="box-item"
        content="Left Center prompts info"
        placement="left"
      >
        <MButton class="mt-3 mb-3">
          left
        </MButton>
      </MTooltip>
      <MTooltip
        class="box-item"
        content="Right Center prompts info"
        placement="right"
      >
        <MButton>right</MButton>
      </MTooltip>
    </div>
    <div class="row">
      <MTooltip
        class="box-item"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <MButton>left-end</MButton>
      </MTooltip>
      <MTooltip
        class="box-item"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <MButton>right-end</MButton>
      </MTooltip>
    </div>
    <div class="row center">
      <MTooltip
        class="box-item"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <MButton>bottom-start</MButton>
      </MTooltip>
      <MTooltip
        class="box-item"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <MButton>bottom</MButton>
      </MTooltip>
      <MTooltip
        class="box-item"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <MButton>bottom-end</MButton>
      </MTooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}

.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tooltip-base-box .center {
  justify-content: center;
}

.tooltip-base-box .box-item {
  margin: 10px;
}
</style>
