import { defineComponent, toRefs } from 'vue'
import { inputProps } from './input-types'

export default defineComponent({
  name: 'MInput',
  props: inputProps,
  setup(props) {
    const { type } = toRefs(props) // toRefs  解构成响应式的数据
    return () => {
      return (<input class={`m-input m-input--${type.value}`}/>)
    }
  },
})
