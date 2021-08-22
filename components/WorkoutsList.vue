<template>
  <div class="flex flex-col w-full gap-4">
    <h2 class="text-2xl font-semibold truncate text-indigo-darkest"><slot /></h2>

    <LoadingSpinner
      v-show="pending"
      class="self-center w-12 h-12 border-green-dark"
    />

    <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <li
        v-for="workout in list"
        :key="workout.id"
      >
        <WorkoutCard :workout="workout" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
    pending: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

