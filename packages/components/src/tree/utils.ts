import type { MInnerTreeNode, MTreeNode } from './tree-type'

export function generateInnerTree(tree: MTreeNode[],
  level = 0, // 当前层级
  path = [] as MInnerTreeNode, // 递归过程的路径
): MInnerTreeNode[] {
  level++
  return tree.reduce((prev, cur) => {
    // 判断cur是否有children,有就递归
    const o = { ...cur } as MInnerTreeNode
    o.level = level

    // 记录调用栈，计算parentID
    if (path.length > 0 && path[path.length - 1].level >= level) {
      // 子 =》父的过程
      while (path.length && path[path.length - 1].level >= level) {
        // 当一个子节点递归结束之后 清空同一级别的调用栈
        path.pop()
      }
    }
    // 父 =》 子
    path.push(o)
    // 获取parentNode
    const parentNode = path[path.length - 2]
    if (parentNode)
      o.parentId = parentNode.id

    if (o.children) {
      const children = generateInnerTree(o.children, level, path)
      delete o.children
      return prev.concat(o, children)
    }
    else {
      o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as MInnerTreeNode[])
}
