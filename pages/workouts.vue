<template>
  <main class="flex flex-col max-w-6xl px-6 mx-auto gap-6">
    <!-- SEARCH -->
    <section>
      <TheSearchBar @submit="search" />
    </section>

    <!-- INTRO -->
    <section class="w-full max-w-2xl p-4 mx-auto rounded-lg text-indigo-dark bg-green-lighter">
      <h2 class="text-2xl font-semibold text-indigo-darker">How it works</h2>
      <ul>
        <li>You can add any of these workouts to your own schedule <span class="text-green-darker">for Free!</span></li>
        <li>Modify them as much as you want or start training directly.</li>
        <li>To add a workout here, create it in Mylo then just share it!</li>
      </ul>
    </section>

    <!-- WORKOUTS GRID -->
    <section class="divide-y space-y-8 divide-green-lighter">
      <!-- RECOMMENDED WORKOUTS -->
      <WorkoutsList :list="recommendedWorkouts">Recommended Workouts</WorkoutsList>

      <!-- ALL WORKOUTS -->
      <WorkoutsList :list="allWorkouts" class="pt-8">All Workouts</WorkoutsList>
    </section>
  </main>
</template>

<script>
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '~/plugins/firebase.js'

const OFFICIAL_ACCOUNT = 'HU-qJL80h_hUVGJ0Y7ec'

export default {
  data: () => ({
    recommendedWorkouts: [],
    allWorkouts: [],
  }),
  async fetch () {
    const qRecommended = query(collection(db, 'shared'), where('data.creatorId', '==', OFFICIAL_ACCOUNT))
    const qAll = query(collection(db, 'shared'), where('data.creatorId', '!=', OFFICIAL_ACCOUNT))

    const [recommendedSnapshot, allSnapshot] = await Promise.all([getDocs(qRecommended), getDocs(qAll)])
    const addWorkouts = (array, doc) => array.push(doc.data().data)

    recommendedSnapshot.forEach(doc => addWorkouts(this.recommendedWorkouts, doc))
    allSnapshot.forEach(doc => addWorkouts(this.allWorkouts, doc))
  },
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

