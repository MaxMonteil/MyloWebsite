<template functional>
  <input
    type="number"
    :min="props.min"
    :max="props.max"
    class="text-lg text-center rounded outline-none focus:shadow"
    :class="[
      props.theme === 'white' ? 'bg-white text-black' : 'bg-gray text-black',
      data.class,
      data.staticClass,
    ]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    onFocus="this.select()"
    v-on="{
      ...listeners,
      change: (e) => listeners.change($options.clamp(e, props)),
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
    },
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
  },
  clamp(event, { max, min }) {
    const value = parseFloat(event.target.value)
    return Math.min(max, Math.max(min, isNaN(value) ? 0 : value))
  },
}
</script>
