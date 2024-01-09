<template>
  <section class="border border-gray-200 bg-white p-2 rounded-lg flex flex-col gap-2">
    <nav class="flex justify-between p-2 capitalize bg-gray-50 border border-gray-200 rounded-lg h-[72px]">
      <label
        v-for="(_, date) of schedule"
        :key="date"
        class="
          relative px-2 py-1 text-center cursor-pointer transition-colors duration-75 rounded-md w-12 bg-gray-50 text-gray-600

          has-[:checked]:text-green-600 has-[:checked]:bg-green-100 has-[:checked]:border has-[:checked]:border-green-200 has-[:checked]:shadow-sm
        "
      >
        {{ toWeekday(date, { weekday: 'short' }) }}
        <span class="inline-block text-xl font-black leading-none">
          {{ toWeekday(date, { day: '2-digit' }) }}
        </span>

        <input
          v-model="currentDay"
          type="radio"
          class="sr-only"
          :value="date"
          :checked="date === currentDay"
          :name="`${date}`"
        >
      </label>
    </nav>

    <WorkoutCard
      v-for="(workout, i) in schedule[currentDay]"
      :key="i"
      :workout="workout"
    />
  </section>
</template>

<script setup lang="ts">
interface Workout {
  name: string
  routines: string[]
}

const toWeekday = (date: string, options: Intl.DateTimeFormatOptions) => new Date(date).toLocaleDateString('en-US', options)

const currentDay = ref('2024-01-01')

const schedule: Record<string, Workout[]> = {
  '2024-01-01': [
    { name: 'Stronglifts 5x5', routines: ['Workout A'] },
    { name: 'Boxing', routines: [] },
  ],
  '2024-01-02': [
    { name: 'Jogging', routines: ['Warmup', 'Run 5k'] },
    { name: 'Yoga Class', routines: [] },
  ],
  '2024-01-03': [
    { name: 'Stronglifts 5x5', routines: ['Workout B'] },
    { name: 'Boxing', routines: ['Sparring'] },
  ],
  '2024-01-04': [
    { name: 'Jogging', routines: ['Warmup', 'Run 5k'] },
  ],
  '2024-01-05': [
    { name: 'Stronglifts 5x5', routines: ['Workout A'] },
    { name: 'Boxing', routines: [] },
  ],
  '2024-01-06': [
    { name: 'Sprint Training', routines: [] },
  ],
  '2024-01-07': [
    { name: 'Meditation', routines: [] },
  ],
}
</script>
