import linter from '@antfu/eslint-config'

export default linter({
  type: 'lib',
  vue: true,
  typescript: true,
  rules: {
    'no-console': 'off',
    'ts/explicit-function-return-type': 'off',
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
