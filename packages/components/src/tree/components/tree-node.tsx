import type { MInnerTreeNode } from '../tree-type'
import type { TreeNodeProps, TreeUtils } from './tree-node-type'
import { defineComponent, inject, ref, toRefs } from 'vue'
import { treeNodeProps } from './tree-node-type'

const NODE_HEIGHT = 24
const NODE_INDENT = 24
export default defineComponent({
  name: 'MTreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { checkable, operable, treeNode } = toRefs(props)
    const {
      append,
      remove,
      toggleNode,
      toggleCheckedNode,
      getChildrenExpanded,
    } = inject('TREE_UTILS') as TreeUtils

    const isVisible = ref(false)
    const toggleOperate = (): void => {
      isVisible.value = !isVisible.value
    }

    return () => (
      <div
        onMouseenter={toggleOperate}
        onMouseleave={toggleOperate}
        class="m-tree--node"
        style={{
          paddingLeft: `${(treeNode.value.level - 1) * NODE_INDENT}px`,
        }}
      >
        {/* 参照线 */}
        {
          !treeNode.value.isLeaf && treeNode.value.expanded && (
            <span
              class="m-tree--node_vline"
              style={{
                height: `${(getChildrenExpanded(treeNode.value).length) * NODE_HEIGHT}px`,
                left: `${(treeNode.value.level - 1) * NODE_INDENT + 12}px`,
                top: `${NODE_HEIGHT}px`,
              }}
            >
            </span>
          )
        }
        {
          treeNode.value.isLeaf
            ? <span style={{ display: 'inline-block', width: '18px' }} />
            : slots && slots.icon
              ? slots.icon({ nodeData: treeNode.value, toggleNode })
              : (
                  <svg
                    onClick={() => {
                      toggleNode(treeNode.value)
                    }}
                    style={{
                      width: '18px',
                      height: '18px',
                      display: 'inline-block',
                      transform: treeNode.value.expanded ? 'rotate(90deg)' : '',
                    }}
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M384 192v640l384-320.064z"
                    >
                    </path>
                  </svg>
                )
        }
        {/* 复选框 */}
        {
          checkable.value && (
            <input
              type="checkbox"
              v-model={treeNode.value.checked}
              onChange={() => toggleCheckedNode(treeNode.value)}
            />
          )
        }
        {slots && slots.content ? slots.content({ nodeData: treeNode.value }) : treeNode.value.label}
        {
          operable.value && isVisible.value && (
            <div class="m-tree--node_operate">
              <span
                class="m-tree--node_operate--item"
                onClick={() => {
                  append(treeNode.value, { label: '新增节点' } as MInnerTreeNode)
                }}
              >
                +
              </span>
              <span
                class="m-tree--node_operate--item"
                onClick={() => {
                  remove(treeNode.value)
                }}
              >
                x
              </span>
            </div>
          )
        }
      </div>
    )
  },
})
