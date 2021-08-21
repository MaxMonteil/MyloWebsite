<template>
  <article class="p-3 border rounded-lg space-y-3 shadow-sm border-gray">
    <div class="space-y-2">
      <h3 class="text-xl font-medium line-clamp-2">{{ workout.name }}</h3>
      <p class="line-clamp-3 leading-6 text-indigo-dark">{{ workout.description }}</p>
    </div>
      <div class="flex justify-between text-green-dark">
        <p>{{ exerciseCount }}</p>
        <p>{{ workoutSchedule }}</p>
      </div>

    <a
      class="inline-block px-2 py-1 text-sm font-medium focus:outline-none focus:ring-2 ring-green-dark text-indigo-dark bg-indigo-lighter rounded-md"
      :href="publicLink"
    >
      See more
    </a>
  </article>
</template>

<script>
const WEEK = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

export default {
  props: {
    workout: {
      type: Object,
      required: true,
    },
  },
  computed: {
    exerciseCount () {
      const count = Object.keys(this.workout.exercises).length 
      return `${count} Exercise${count > 1 ? 's' : ''}`
    },
    workoutSchedule () {
      return WEEK.filter(day => this.workout.week[day].length > 0)
        .map(day => day.substring(0, 2))
        .join(' ') 
    },
    publicLink () {
      return `${this.$config.WORKOUT_URL}/${this.workout.publicId}`
    },
  },
}
</script>

