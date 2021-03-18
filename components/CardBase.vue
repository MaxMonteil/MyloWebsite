<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    class="flex flex-col rounded"
    :class="[
      props.noPadding ? 'p-0' : 'p-2',
      props.theme === 'green' ? 'bg-green text-green-darker' : '',
      props.theme === 'green-dark' ? 'bg-green-dark text-white' : '',
      props.theme === 'gray' ? 'bg-gray text-gray-darker' : '',
      props.theme === 'white'
        ? 'bg-white text-gray-darker border border-gray-dark'
        : '',
      props.theme === 'none' ? 'bg-white text-gray-darker' : '',
      data.class,
      data.staticClass,
    ]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'CardBase',
  props: {
    tag: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      default: 'green',
      validator(e) {
        return (e) =>
          e === 'green' ||
          e === 'green-dark' ||
          e === 'white' ||
          e === 'gray' ||
          e === 'none'
      },
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
