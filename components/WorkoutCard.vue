<template>
  <section class="bg-green-50 border-green-200 flex flex-col p-3 border rounded-lg shadow-sm gap-1">
    <h3 class="text-green-600 text-xl font-medium break-all line-clamp-1">
      {{ workout.name }}
    </h3>

    <ul
      v-if="workout.routines.length"
      class="text-green-700 text-lg"
    >
      <li
        v-for="name in workout.routines"
        :key="name"
        class="flex justify-between"
      >
        {{ name }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
interface Workout {
  name: string
  routines: string[]
}

defineProps<{ workout: Workout }>()
</script>
