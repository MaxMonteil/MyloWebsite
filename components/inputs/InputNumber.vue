<template functional>
  <input
    :ref="data.ref"
    type="number"
    :min="props.min"
    :max="props.max"
    class="text-lg text-center rounded outline-none focus:shadow"
    :class="[
      props.theme === 'white' ? 'bg-white text-black' : '',
      props.theme === 'gray' ? 'bg-gray text-black' : '',
      props.theme === 'green' ? 'bg-green text-green-darker' : '',
      props.theme === 'green-darker' ? 'bg-green-darker text-green-dark' : '',
      props.wide ? 'w-20' : '',
      data.class,
      data.staticClass,
    ]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    :disabled="props.disabled"
    onFocus="this.select()"
    v-on="{
      ...listeners,
      input: listeners.input
        ? (e) => listeners.input($options.clamp(e, props))
        : () => {},
      change: listeners.change
        ? (e) => listeners.change($options.clamp(e, props))
        : () => {},
    }"
  />
</template>

<script>
export default {
  name: 'InputNumber',
  props: {
    theme: {
      type: String,
      default: 'white',
      validator(type) {
        return ['white', 'gray', 'green', 'green-darker'].includes(type)
      },
    },
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
    wide: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  clamp(event, { max, min }) {
    const value = parseFloat(event.target.value)
    return Math.min(max, Math.max(min, isNaN(value) ? 0 : value))
  },
}
</script>
