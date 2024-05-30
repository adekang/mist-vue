import { upperFirst } from './utils'

export default function genTestTemplate(name: string) {
  return `\
import { describe, expect, it, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import M${upperFirst(name)} from '../${name}'

describe('${name} test', () => {
  const onClick = vi.fn()
  test('${name} init render', async () => {
    // your code
  })
})
`
}
