import type { Ref } from 'vue'
import type { MInnerTreeNode } from '../tree-type'
import type { IUseCheck, IUseCore } from './use-tree-type'

export function useCheck(innerData: Ref<MInnerTreeNode[]>, { getChildren }: IUseCore): IUseCheck {
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

  return { toggleCheckedNode }
}
