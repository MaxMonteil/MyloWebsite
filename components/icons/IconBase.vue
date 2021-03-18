<template functional>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 16 16"
    :aria-labelledby="props.icon"
    role="presentation"
    class="inline-block align-top fill-current"
    :class="[data.class, data.staticClass]"
  >
    <title lang="en">{{ props.icon.replace(/-/g, ' ') }} icon</title>
    <component :is="injections.components[props.icon]" />
  </svg>
</template>

<script>
export default {
  inject: {
    components: {
      default: {
        dropdown: () => import('@/components/icons/IconDropdown'),
        plus: () => import('@/components/icons/IconPlus'),
        'x-mark': () => import('@/components/icons/IconXMark'),
      },
    },
  },
  props: {
    icon: {
      type: String,
      default: 'dropdown',
    },
    size: {
      type: [Number, String],
      default: 16,
    },
  },
}
</script>
