import { describe, expect, it, vi } from 'vitest'
import { debugWarn, throwError } from '../../_utils'

describe('error', () => {
  it('throwError should be worked', () => {
    expect(() => {
      throwError('scope', 'msg')
    }).toThrowError('[scope]:msg')
  })
  it('debugWarn should be worked', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    debugWarn('scope', 'msg')
    debugWarn(new SyntaxError('custom error'))
    expect(warn.mock.calls).toMatchInlineSnapshot(`
      [
        [
          [ErUIError: [scope]:msg],
        ],
        [
          [SyntaxError: custom error],
        ],
      ]
    `)
  })
})
