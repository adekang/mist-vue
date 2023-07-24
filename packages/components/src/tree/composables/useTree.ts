import { computed, ref, unref } from 'vue'
import type { Ref } from '@vue/runtime-core'

import type { MInnerTreeNode, MTreeNode } from '../tree-type'
import { generateInnerTree } from '../utils'

export function useTree(node: Ref<MTreeNode[]> | MTreeNode[]) {
  const innerData = ref(generateInnerTree(unref(node)))

  const toggleNode = (node: MInnerTreeNode) => {
    // 在原始的列表中获取节点并处理
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur)
      cur.expanded = !cur.expanded
  }

  const getChildren = (node: MInnerTreeNode) => {
    const result = []
    const startIndex = innerData.value.findIndex(item => item.id === node.id)

    for (let i = startIndex + 1; i < innerData.value.length && node.level < innerData.value[i].level; i++)
      result.push(innerData.value[i])
    return result
  }

  const expandedTree = computed(() => {
    let excludedNodes: MInnerTreeNode[] = []
    const result: MInnerTreeNode[] = []

    for (const item of innerData.value) {
      if (excludedNodes.includes(item))
        continue
      if (item.expanded !== true)
        excludedNodes = getChildren(item)

      result.push(item)
    }

    return result
  })

  return {
    innerData,
    expandedTree,
    toggleNode,
    getChildren,
  }
}
