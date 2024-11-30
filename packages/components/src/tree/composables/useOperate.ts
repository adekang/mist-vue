import type { Ref } from 'vue'
import type { MInnerTreeNode } from '../tree-type'
import type { IUseCore, IUseOperate } from './use-tree-type'
import { ref } from 'vue'

export function useOperate(innerData: Ref<MInnerTreeNode[]>, { getIndex, getChildren }: IUseCore): IUseOperate {
  function randomId(): string {
    let id = ''
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < 9; i++)
      id += chars.charAt(Math.floor(Math.random() * chars.length))

    return id
  }

  const append = (parent: MInnerTreeNode, node: MInnerTreeNode): void => {
    const children = getChildren(parent, false)
    const lastChild = children[children.length - 1]

    let insertIndex = getIndex(parent) + 1
    if (lastChild)
      insertIndex = getIndex(lastChild) + 1

    parent.expanded = true
    parent.isLeaf = false

    const currentNode = ref({
      ...node,
      level: parent.level + 1,
      parentId: parent.id,
      isLeaf: true,
    })

    if (currentNode.value.id === undefined)
      currentNode.value.id = randomId()

    innerData.value.splice(insertIndex, 0, currentNode.value)
  }
  const remove = (node: MInnerTreeNode): void => {
    const childrenIds = getChildren(node).map(item => item.id)
    innerData.value = innerData.value.filter(item => item.id !== node.id && !childrenIds.includes(item.id))
  }

  return { append, remove }
}
