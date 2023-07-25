import { ref, unref } from 'vue'
import type { Ref } from 'vue'

import type { MTreeNode } from '../tree-type'
import { generateInnerTree } from '../utils'
import { useCore } from './useCore'
import { useToggle } from './useToggle'
import { useCheck } from './useCheck'
import { useOperate } from './useOperate'
import type { TreeUtils } from './use-tree-type'

export function useTree(node: Ref<MTreeNode[]> | MTreeNode[]): TreeUtils {
  const innerData = ref(generateInnerTree(unref(node)))

  const core = useCore(innerData)
  const plugins = [useToggle, useCheck, useOperate]
  const pluginMethods = plugins.reduce((acc, plugin) => {
    return { ...acc, ...plugin(innerData, core) }
  }, {})
  return {
    innerData,
    ...pluginMethods,
    ...core,
  } as TreeUtils
}
