<template functional>
  <label
    class="text-sm font-medium"
    :class="props.labelGreen ? 'text-green-darker' : 'text-white'"
  >
    {{ props.label }}
    <select
      :ref="data.ref"
      class="block pl-2 pr-6 mt-2 text-lg text-black bg-white bg-no-repeat rounded outline-none select focus:shadow"
      :class="[data.class, data.staticClass]"
      :style="[data.style, data.staticStyle]"
      v-bind="data.attrs"
      v-on="{ ...listeners, input: (e) => listeners.input(e.target.value) }"
    >
      <option disabled value="">-</option>
      <option
        v-for="option in props.values"
        :key="option.value || option"
        :value="option.value || option"
      >
        <slot :option="option">
          {{ option.value || option }}
        </slot>
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: 'InputSelect',
  props: {
    label: {
      type: String,
      required: true,
    },
    labelGreen: {
      type: Boolean,
      default: true,
    },
    values: {
      type: [Array, Object],
      required: true,
    },
  },
}
</script>

<style scoped>
.select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='%23000000' d='M7.443 9.057L5.229 6.843a.666.666 0 01.943-.942l2.214 2.214 2.199-2.199a.666.666 0 11.942.942l-3.142 3.143-.942-.944z'/%3E%3C/svg%3E");
  background-origin: border-box;
  background-position: top 35% right 0.5rem;
}
</style>
