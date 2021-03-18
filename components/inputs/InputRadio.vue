<template functional>
  <component
    :is="props.tag"
    :ref="data.ref"
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
  >
    <label
      v-for="label in props.labels"
      :key="label.value || label"
      class="relative px-3 py-1 rounded cursor-pointer"
      :class="
        (label.value || label) === props.modelValue
          ? props.theme === 'dark'
            ? 'bg-green-darker shadow text-white'
            : 'bg-green shadow text-green-darker'
          : 'bg-transparent text-gray-dark'
      "
    >
      <slot :label="label">
        {{ label.text || label }}
      </slot>
      <input
        :ref="data.ref"
        type="radio"
        class="sr-only"
        :value="label.value || label"
        :checked="(label.value || label) === props.modelValue"
        v-on="{ ...listeners, input: (e) => listeners.input(e.target.value) }"
      />
    </label>
  </component>
</template>

<script>
export default {
  name: 'InputRadio',
  model: {
    prop: 'modelValue',
  },
  props: {
    labels: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'div',
    },
    theme: {
      type: String,
      default: 'light',
    },
  },
}
</script>
