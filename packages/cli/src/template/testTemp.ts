import { upperFirst } from './utils'

export default function genTestTemplate(name: string) {
  return `\
import { describe, test } from 'vitest'
import { render } from '@testing-library/vue'
import M${upperFirst(name)} from '../${name}'

describe('${name} test', () => {
  test('${name} init render', async () => {
    const { getByRole } = render(M${upperFirst(name)})
    getByRole('${name}')
  })
})
`
}
