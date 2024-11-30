import type { Ref } from 'vue'
import type { MTreeNode } from '../tree-type'

import type { TreeUtils } from './use-tree-type'
import { ref, unref } from 'vue'
import { generateInnerTree } from '../utils'
import { useCheck } from './useCheck'
import { useCore } from './useCore'
import { useOperate } from './useOperate'
import { useToggle } from './useToggle'

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
