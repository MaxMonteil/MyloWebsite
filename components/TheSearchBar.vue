<template>
  <form
    class="flex w-full max-w-2xl mx-auto gap-2"
    @submit.prevent="$emit('submit', query)"
  >
    <input
      id="search"
      v-model="query"
      placeholder="Search workouts"
      type="text"
      class="w-full pl-4 border rounded-lg focus:ring-2 ring-green-dark focus:outline-none border-gray shadow-sm placeholder-gray-dark"
    >

    <button class="w-10 h-10 p-2 rounded-lg text-green-dark bg-green-lighter focus:outline-none focus:ring-2 ring-green-dark shadow-sm">
      <SearchIcon
        size="24"
        labelledby="search"
      />
    </button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      query: '',
    }
  },
}
</script>
