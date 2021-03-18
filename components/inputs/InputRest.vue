<template functional>
  <label class="text-sm font-medium text-white">
    Rest
    <span class="block mt-2 text-base font-normal">
      <component
        :is="injections.components.InputNumber"
        :type="props.type"
        :max="300"
        :min="0"
        :wide="false"
        class="w-12 pr-1 text-right"
        v-bind="data.attrs"
        v-on="listeners"
      />
      s
    </span>
  </label>
</template>

<script>
import InputNumber from '@/components/inputs/InputNumber'

export default {
  name: 'InputRest',
  inject: {
    components: {
      default: {
        InputNumber,
      },
    },
  },
}
</script>
