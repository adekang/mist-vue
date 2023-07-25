import type { ExtractPropTypes, PropType } from 'vue'
import type { MInnerTreeNode } from '../tree-type'
import { treeProps } from '../tree-type'

export const treeNodeProps = {
  ...treeProps,
  treeNode: {
    type: Object as PropType<MInnerTreeNode>,
    required: true,
  },
  lineadle: {
    type: Boolean,
    default: false,
  },
  checkable: {
    type: Boolean,
    default: false,
  },
} as const
export type TreeNodeProps = ExtractPropTypes<typeof treeNodeProps>

export interface TreeUtils {
  toggleNode: (node: MInnerTreeNode) => void
  getChildren: (node: MInnerTreeNode, recursive?: boolean) => MInnerTreeNode[]
  toggleCheckedNode: (node: MInnerTreeNode) => void
  getChildrenExpanded: (node: MInnerTreeNode) => MInnerTreeNode[]
  append: (parent: MInnerTreeNode, node: MInnerTreeNode) => void
  remove: (parent: MInnerTreeNode) => void
}
