import type { ComputedRef, Ref } from 'vue'
import type { MInnerTreeNode } from '../tree-type'

export interface IUseCore {
  expandedTree: ComputedRef<MInnerTreeNode[]>
  getChildren: (node: MInnerTreeNode, recursive?: boolean) => MInnerTreeNode[]
  getChildrenExpanded: (node: MInnerTreeNode) => MInnerTreeNode[]
  getIndex: (node: MInnerTreeNode) => number

}

export interface IUseToggle {
  toggleNode: (node: MInnerTreeNode) => void

}

export interface IUseCheck {
  toggleCheckedNode: (node: MInnerTreeNode) => void
}

export interface IUseOperate {
  append: (parent: MInnerTreeNode, node: MInnerTreeNode) => void
  remove: (parent: MInnerTreeNode) => void
}

export type TreeUtils = {
  innerData: Ref<MInnerTreeNode[]>
} & IUseCore & IUseToggle & IUseOperate & IUseCheck
