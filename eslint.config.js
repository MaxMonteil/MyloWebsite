import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  overrides: {
    vue: {
      'vue/block-order': [
        'error',
        {
          order: ['template', 'script', 'style'],
        },
      ],
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 1 },
        multiline: { max: 1 },
      }],
      // this complains about reusable transition components with a slot
      'vue/require-toggle-inside-transition': 'off',
    },
  },
})
