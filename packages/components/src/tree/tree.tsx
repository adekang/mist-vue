import { defineComponent, ref, toRefs } from 'vue'
import { treeProps } from './tree-type'
import type { TreeProps } from './tree-type'
import { generateInnerTree } from './utils'

export default defineComponent({
  name: 'MTree',
  props: treeProps,
  setup(props: TreeProps) {
    const { data } = toRefs(props)
    const innerData = ref(generateInnerTree(data.value))
    return () => {
      return (
                <div class="m-tree">l
                    {
                        innerData.value.map((treeNode) => {
                          return treeNode.label
                        })
                    }
                </div>
      )
    }
  },
})
