import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MButton from '../button.vue'

describe('MButton.vue', () => {
  it('should render correctly with default slot', async () => {
    const wrapper = mount(MButton, {
      slots: {
        default: 'Click me!',
      },
    })
    expect(wrapper.text()).toBe('Click me!')
  })
})
