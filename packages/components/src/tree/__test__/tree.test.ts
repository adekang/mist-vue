import { describe, test } from 'vitest'
import { render } from '@testing-library/vue'
import MTree from '../tree'

describe('tree test', () => {
  test('tree init render', async () => {
    const { getByRole } = render(MTree)
    getByRole('tree')
  })
})
