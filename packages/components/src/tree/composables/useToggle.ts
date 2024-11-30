import type { Ref } from 'vue'
import type { MInnerTreeNode } from '../tree-type'
import type { IUseToggle } from './use-tree-type'

export function useToggle(innerData: Ref<MInnerTreeNode[] >): IUseToggle {
  const toggleNode = (node: MInnerTreeNode): void => {
    // 在原始的列表中获取节点并处理
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur)
      cur.expanded = !cur.expanded
  }

  return { toggleNode }
}
