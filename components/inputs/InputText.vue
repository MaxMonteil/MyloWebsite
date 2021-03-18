<template functional>
  <label
    class="text-sm font-medium leading-none"
    :class="props.labelGreen ? 'text-green-darker' : 'text-white'"
  >
    {{ props.label }}
    <input
      :ref="data.ref"
      :type="props.type"
      class="block w-full mt-2 rounded outline-none focus:shadow"
      :class="[
        data.class,
        data.staticClass,
        props.large
          ? 'text-3xl text-black pl-4 py-1'
          : 'text-lg text-black pl-2 py-1',
        props.fontNormal ? 'font-normal' : 'font-medium',
        props.makeGray ? 'bg-gray' : 'bg-white',
      ]"
      :style="[data.style, data.staticStyle]"
      v-bind="data.attrs"
      v-on="{ ...listeners, input: (e) => listeners.input(e.target.value) }"
    />
  </label>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    label: {
      type: String,
      required: true,
    },
    labelGreen: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: 'text',
      validator(type) {
        return ['text', 'email', 'password'].includes(type)
      },
    },
    large: {
      type: Boolean,
      default: false,
    },
    fontNormal: {
      type: Boolean,
      default: false,
    },
    makeGray: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
