<template>
  <main class="flex flex-col max-w-6xl px-6 mx-auto gap-6">
    <!-- SEARCH -->
    <!-- <section> -->
    <!--   <TheSearchBar @submit="search" /> -->
    <!-- </section> -->

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
    <section class="flex flex-col divide-y space-y-8 divide-green-lighter">
      <!-- RECOMMENDED WORKOUTS -->
      <WorkoutsList
        :list="recommendedWorkouts"
        :pending="$fetchState.pending"
      >
        Recommended Workouts
      </WorkoutsList>

      <!-- ALL WORKOUTS -->
      <WorkoutsList
        class="pt-8"
        :list="allWorkouts"
        :pending="$fetchState.pending"
      >
        All Workouts
      </WorkoutsList>

      <section class="flex flex-col items-center pt-8 border-none">
        <button
          v-if="!reachedEnd"
          class="flex justify-center w-full max-w-2xl px-6 py-2 text-lg font-medium rounded-lg focus:ring-2 ring-green-dark focus:outline-none text-green-dark bg-green-lighter shadow-sm"
          @click="loadNextPage"
        >
          <LoadingSpinner
            v-show="isLoading"
            class="w-7 h-7 border-green-dark"
          />
          <span v-show="!isLoading">Load more</span>
        </button>

        <div
          v-else
          class="w-full max-w-2xl p-4 text-center rounded-lg bg-gray"
        >
          <h3 class="text-xl font-semibold text-indigo-darker">You've reached the end!</h3>
          <p class="mt-2 text-indigo">Still couldn't find the workout you wanted? Check back later or create it yourself! Once you share it, it will appear here for others.</p>

          <a
            href="https://app.mylo.fit/register"
            class="inline-block px-6 py-2 mt-5 text-lg font-medium text-white focus:outline-none focus:ring-2 ring-green-light rounded-md bg-green-dark"
          >
            Start making a plan
          </a>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { collection, query, orderBy, limit, where, startAfter, getDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '~/plugins/firebase.js'

// Not a data property because the doc is circular and can't be serialized by Nuxt
let lastFetchedDoc = null
const PAGE_SIZE = 25

const addWorkouts = (array, doc) => {
  const workout = doc.data().data
  if (Object.keys(workout.exercises).length === 0) return

  workout.publicId = doc.id
  array.push(workout)
}

export default {
  name: 'WorkoutsPage',
  data: () => ({
    recommendedWorkouts: [],
    allWorkouts: [],
    isLoading: false,
    reachedEnd: false,
  }),
  async fetch () {
    const qRecommended = query(
      collection(db, 'shared'),
      where('data.creatorId', '==', this.$config.OFFICIAL_ACCOUNT),
      orderBy('data.name'),
      limit(PAGE_SIZE),
    )

    const qAll = query(
      collection(db, 'shared'),
      where('data.creatorId', '!=', this.$config.OFFICIAL_ACCOUNT),
      orderBy('data.creatorId'),
      orderBy('data.name'),
      limit(PAGE_SIZE),
    )

    const [recommendedSnapshot, allSnapshot] = await Promise.all([getDocs(qRecommended), getDocs(qAll)])

    recommendedSnapshot.forEach(doc => addWorkouts(this.recommendedWorkouts, doc))
    allSnapshot.forEach(doc => addWorkouts(this.allWorkouts, doc))

    if (allSnapshot.docs.length < PAGE_SIZE) this.reachedEnd = true
  },
  head: {
    title: 'Mylo | Free Workouts',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Discover completely free workouts that you can easily add to your own workout schedule in Mylo.',
      },
    ],
  },
  methods: {
    async loadNextPage () {
      if (this.reachedEnd) return

      try {
        this.isLoading = true

        // this is only actually used when lastFetchedDoc is null which happens on first load only
        // because fetch() can't set the value to a non data property in the server.
        const lastWorkoutId = this.allWorkouts[PAGE_SIZE - 1].publicId

        const nextPageQuery = query(
          collection(db, 'shared'),
          where('data.creatorId', '!=', this.$config.OFFICIAL_ACCOUNT),
          orderBy('data.creatorId'),
          orderBy('data.name'),
          startAfter(lastFetchedDoc ?? await getDoc(doc(db, 'shared', lastWorkoutId))),
          limit(PAGE_SIZE),
        )

        const nextPage = await getDocs(nextPageQuery)
        nextPage.forEach(doc => addWorkouts(this.allWorkouts, doc))
        lastFetchedDoc = nextPage.docs[PAGE_SIZE - 1] ?? null

        if (nextPage.docs.length < PAGE_SIZE) this.reachedEnd = true
      } catch (e) {
        console.log(e)
      } finally {
        this.isLoading = false
      }
    },
    search (query) {
    },
  },
}
</script>

