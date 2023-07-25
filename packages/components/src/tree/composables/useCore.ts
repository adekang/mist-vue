import type { Ref } from 'vue'
import { computed } from 'vue'
import type { MInnerTreeNode } from '../tree-type'
import type { IUseCore } from './use-tree-type'

export function useCore(innerData: Ref<MInnerTreeNode[]>): IUseCore {
  const getChildren = (node: MInnerTreeNode, recursive = true) => {
    const result = []
    const startIndex = innerData.value.findIndex(item => item.id === node.id)

    for (let i = startIndex + 1; i < innerData.value.length && node.level < innerData.value[i].level; i++) {
      if (recursive)
        result.push(innerData.value[i])
      else if (node.level === innerData.value[i].level - 1)
        result.push(innerData.value[i])
    }
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
  // 计算参考线高度
  const getChildrenExpanded = (node: MInnerTreeNode) => {
    const result: MInnerTreeNode[] = []
    // 找到node在列表中的索引
    const startIndex = expandedTree.value.findIndex(item => item.id === node.id)
    for (
      let i = startIndex + 1;
      i < expandedTree.value.length && node.level < expandedTree.value[i].level;
      i++
    )
      result.push(expandedTree.value[i])

    // 找到它后面所有的子节点(level比当前节点大)
    return result
  }

  const getIndex = (node: MInnerTreeNode) => {
    if (!node)
      return -1
    return innerData.value.findIndex(item => item.id === node.id)
  }
  return {
    expandedTree,
    getChildren,
    getChildrenExpanded,
    getIndex,
  }
}
