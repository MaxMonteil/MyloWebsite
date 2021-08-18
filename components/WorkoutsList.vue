<template>
  <section class="flex flex-col gap-4">
      <h2 class="text-2xl font-semibold text-indigo-darker"><slot /></h2>

      <ul class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <li
          v-for="workout in list"
          :key="workout.id"
        >
          <WorkoutCard :workout="workout" />
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
}
</script>

