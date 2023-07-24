import type { ExtractPropTypes, PropType } from 'vue'

export const treeProps = {
  data: {
    type: Array as PropType<MTreeNode[]>,
    required: true,
  },
} as const
export type TreeProps = ExtractPropTypes<typeof treeProps>

export interface MTreeNode {
  label: string
  id: string
  children?: MTreeNode[]

  selected?: boolean // 点击选中
  expanded?: boolean // 是否展开
  checked?: boolean // 是否选中

  disableSelect?: boolean // 是否禁用选中
  disableCheck?: boolean // 是否禁用选中
  disableToggle?: boolean // 是否禁用展开

}

export interface MInnerTreeNode extends MTreeNode {
  parentId?: string // 父节点id
  level: number // 层级
  isLeaf: boolean // 是否叶子节点
}
