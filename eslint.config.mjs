import linter from '@antfu/eslint-config'

export default linter({
  vue: true,
  typescript: true,
  rules: {
    'ts/explicit-function-return-type': 'off',
    'vue/valid-v-slot': 'off',
  },
  ignores: [
    '**/fixtures',
    '**/cache',
    '**/lib',
    '**/es',
    '**/examples',
    '**/site',
  ],
})
