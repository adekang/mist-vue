import { defineComponent, provide, toRefs } from 'vue'
import { treeProps } from './tree-type'
import type { TreeProps } from './tree-type'
import { useTree } from './composables/useTree'
import './style/tree.scss'
import MTreeNode from './components/tree-node'

export default defineComponent({
  name: 'MTree',
  props: treeProps,
  setup(props: TreeProps, { slots }) {
    const { data } = toRefs(props)
    const treeData = useTree(data)
    provide('TREE_UTILS', {
      append: treeData.append,
      remove: treeData.remove,
      toggleNode: treeData.toggleNode,
      toggleCheckedNode: treeData.toggleCheckedNode,
      getChildren: treeData.getChildren,
      getChildrenExpanded: treeData.getChildrenExpanded,
    })
    return () => {
      return (
                <div class="m-tree">
                    <div>
                        {
                            treeData.expandedTree.value.map(treeNode =>
                                <MTreeNode {...props} treeNode={treeNode}>
                                    {{
                                      icon: slots.icon,
                                      content: slots.content,
                                    }}
                                </MTreeNode>,
                            )
                        }
                    </div>
                </div>
      )
    }
  },
})
