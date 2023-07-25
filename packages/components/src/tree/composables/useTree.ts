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

  const toggleCheckedNode = (node: MInnerTreeNode) => {
    //   避免初始化没有node checked  为undefined
    // node.checked = !node.checked
    //  父到子的选中
    getChildren(node).forEach((item) => {
      item.checked = node.checked
    })

    // 子到父的选中
    const parentNode = innerData.value.find(item => item.id === node.parentId)
    if (!parentNode)
      return
    // 获取兄弟节点
    const siblingNodes = getChildren(parentNode, false)
    const checkedSiblingNodes = siblingNodes.filter(item => item.checked)
    parentNode.checked = checkedSiblingNodes.length === siblingNodes.length
  }

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
  return {
    innerData,
    expandedTree,
    toggleNode,
    getChildren,
    toggleCheckedNode,
    getChildrenExpanded,
  }
}
