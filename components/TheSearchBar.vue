<template>
  <div class="flex gap-2">
    <input
      id="search"
      placeholder="Search"
      type="search"
      class="w-full h-10 px-4 border rounded-lg focus:ring-2 ring-green-light focus:border-green-dark focus:outline-none border-gray shadow-sm placeholder-gray-dark"
      autocomplete="off"
      autocorrect="off"
      autocapitalize="none"
      spellcheck="false"
      aria-label="Search through available public workouts"
      :value="value"
      @keyup.enter="$emit('submit', value)"
      @input="$emit('input', $event.target.value)"
    >

    <button
      v-if="withSearchButton"
      class="w-10 h-10 p-2 rounded-lg text-green-dark bg-green-lighter focus:outline-none focus:ring-2 ring-green-dark shadow-sm"
      @click="$emit('submit', value)"
    >
      <SearchIcon
        size="24"
        labelledby="search"
      />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    withSearchButton: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    isLoading: {
      handler (v) { this.$emit('loading', v) },
      immediate: true,
    },
  },
}
</script>

<style scoped>
#search::-webkit-search-cancel-button{
  position: relative;
  cursor: pointer;
  -webkit-appearance: none;
  background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/regular/times.svg) no-repeat 50% 50%;
  opacity: .3;
  height: 20px;
  width: 20px;
  border-radius: 10px;
}
</style>
