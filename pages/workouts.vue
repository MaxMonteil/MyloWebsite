<template>
  <main class="flex flex-col max-w-6xl px-6 mx-auto gap-6">
    <!-- SEARCH -->
    <section>
      <TheSearchBar @submit="search" />
    </section>

    <!-- RECOMMENDED WORKOUTS -->
    <section class="flex flex-col gap-4">
      <h2 class="text-3xl font-semibold">Recommended Workouts</h2>

      <a href="https://app.mylo.fit/s/workout/r-bwf-recommended-routine-Fm4ZOG1m">r/bwf Recommended Routine</a>
    </section>

    <!-- ALL WORKOUTS -->
    <section class="flex flex-col gap-4">
      <h2 class="text-3xl font-semibold">All Workouts</h2>

      <a href="https://app.mylo.fit/s/workout/r-bwf-recommended-routine-Fm4ZOG1m">r/bwf Recommended Routine</a>
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: 'Mylo - Free Workouts',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Discover 100s of completely free workouts that you can easily add to your workout schedule in Mylo.',
      },
    ],
  },
  methods: {
    search (query) {
      if (!query) return

      console.log(query)
    },
  },
}
</script>

