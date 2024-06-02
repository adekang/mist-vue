---
title: Collapse
description: Collapse 组件文档

---

# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响

<demo src="./demos/Basic.vue"></demo>

## 手风琴模式

通过 `accordion` 属性来设置是否以手风琴模式显示。

<demo src="./demos/Accordion.vue"></demo>

## 自定义面板标题

通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。

<demo src="./demos/CustomTitle.vue"></demo>

## 禁用状态

通过 `disabled` 属性来设置 CollapseItem 是否禁用。

<demo src="./demos/Disabled.vue"></demo>

## Collapse API

### Props

| Name      | Description        | Type                 | Default |
| --------- | ------------------ | -------------------- | ------- |
| v-model   | 当前展开项的 name  | `CollapseItemName[]` | []      |
| accordion | 是否开启手风琴模式 | `boolean`            | false   |

### Events

| Name   | Description    | Type                                 |
| ------ | -------------- | ------------------------------------ |
| change | 切换面板时触发 | `(name: CollapseItemName[]) => void` |

### Slots

| Name    | Description | Sub Component |
| ------- | ----------- | ------------- |
| default | 默认插槽    | CollapseItem  |

## CollapseItem API

### Props

| Name     | Description | Type               | Default |
| -------- | ----------- | ------------------ | ------- |
| name     | 唯一标识符  | `CollapseItemName` | -       |
| title    | 面板标题    | `string`           | ""      |
| disabled | 是否禁用    | `boolean`          | false   |

### Slots

| Name    | Description                 |
| ------- | --------------------------- |
| default | 默认插槽 ,CollapseItem 内容 |
| title   | CollapseItem 的标题         |

::: tip
ps: 上面提到的 `CollapseItemName` 类型，可以理解为 `string | number` 类型。
:::
