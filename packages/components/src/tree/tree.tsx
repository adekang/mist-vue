import { defineComponent, toRefs } from 'vue'
import { treeProps } from './tree-type'
import type { TreeProps } from './tree-type'
import { useTree } from './composables/useTree'
import './style/tree.scss'

const NODE_HEIGHT = 24
const NODE_INDENT = 24

export default defineComponent({
  name: 'MTree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data, checkable } = toRefs(props)
    const { expandedTree, toggleNode, getChildren, toggleCheckedNOde } = useTree(data)
    return () => {
      return (
                <div class="m-tree">
                    <div>
                        {
                            expandedTree.value.map(treeNode => <div class="m-tree--node" style={{
                              paddingLeft: `${(treeNode.level - 1) * NODE_INDENT}px`,
                            }}>
                                {/* 参照线 */}
                                {
                                    !treeNode.isLeaf && treeNode.expanded && <span class="m-tree--node_vline" style={{
                                      height: `${(getChildren(treeNode).length) * NODE_HEIGHT}px`,
                                      left: `${(treeNode.level - 1) * NODE_INDENT + 12}px`,
                                      top: `${NODE_HEIGHT}px`,
                                    }}></span>
                                }
                                {
                                    treeNode.isLeaf
                                      ? <span style={{ display: 'inline-block', width: '24px' }}> </span>
                                      : <svg
                                            onClick={() => {
                                              toggleNode(treeNode)
                                            }}
                                            style={{
                                              width: '18px',
                                              height: '18px',
                                              display: 'inline-block',
                                              transform: treeNode.expanded ? 'rotate(90deg)' : '',
                                            }}
                                            viewBox="0 0 1024 1024"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M384 192v640l384-320.064z"
                                            ></path>
                                        </svg>
                                }
                                {/* 复选框 */}
                                {
                                    checkable.value && <input type="checkbox" v-model={treeNode.checked}
                                                              onChange={() => toggleCheckedNOde(treeNode)}/>
                                }
                                {treeNode.label}
                            </div>)
                        }
                    </div>
                </div>
      )
    }
  },
})
