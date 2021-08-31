<template>
  <main class="flex flex-col max-w-6xl px-6 mx-auto gap-6">
    <!-- SEARCH -->
    <section style="min-height: 68px;">
      <AisInstantSearchSsr>
        <AisConfigure :hits-per-page.camel="25" />

        <div class="flex flex-col w-full max-w-2xl mx-auto space-y-2">
          <ClientOnly>
            <AisPoweredBy class="self-end"/>
          </ClientOnly>

          <AisSearchBox>
            <template #default="{ currentRefinement, isSearchStalled, refine }">
              <TheSearchBar
                :is-loading="isSearchStalled"
                :with-search-button="false"
                :value="currentRefinement"
                @loading="isSearchLoading = $event"
                @input="refineSearch($event, refine)"
              />
            </template>
          </AisSearchBox>
        </div>

        <AisInfiniteHits class="flex flex-col items-start space-y-8">
          <template #default="{ items, refineNext, isLastPage }">
            <WorkoutsList
              v-show="items.length > 0 || query != ''"
              class="mt-8"
              :list="items"
              :is-loading="isSearchLoading"
            >
              <span><span class="text-indigo-light">Results for:</span> {{ query }}</span>
            </WorkoutsList>

            <ResultsEnd v-show="query != '' && !isSearchLoading && (isLastPage || items.length === 0)">
              <span v-if="items.length === 0">No workouts found</span>
            </ResultsEnd>

            <button
              v-show="!isLastPage"
              class="flex self-center justify-center w-full max-w-xs px-6 py-2 text-lg font-medium rounded-lg focus:ring-2 ring-green-dark focus:outline-none text-green-dark bg-green-lighter shadow-sm"
              @click="refineNext"
            >
              Load more
            </button>
          </template>
        </AisInfiniteHits>
      </AisInstantSearchSsr>
    </section>

    <!-- INTRO -->
    <section
      v-if="!hideMessage"
      v-show="query === ''"
      class="w-full max-w-2xl p-4 mx-auto rounded-lg text-indigo-light bg-green-lighter"
    >
      <div class="flex justify-between">
        <h2 class="text-2xl font-semibold text-indigo-darker">How it works</h2>
        <button
          class="text-green-darkest"
          @click="hideMessage = true"
        >
          Close
        </button>
      </div>
      <ul>
        <li>You can add any of these workouts to your own schedule <span class="text-green-darker">for Free!</span></li>
        <li>Modify them as much as you want or start training directly.</li>
        <li>To add a workout here, create it in Mylo then just share it!</li>
      </ul>
    </section>

    <!-- WORKOUTS GRID -->
    <section
      v-show="query === ''"
      class="flex flex-col divide-y space-y-8 divide-green-lighter"
    >
      <!-- RECOMMENDED WORKOUTS -->
      <WorkoutsList
        :list="recommendedWorkouts"
        :is-loading="$fetchState.pending || isRecommendedWorkoutsLoading"
      >
        🌟 Recommended

        <button
          class="px-2 py-1 text-base text-indigo-dark bg-indigo-lighter rounded-md focus:outline-none"
          @click="fetchRecommendedWorkouts(true)"
        >
          Refresh
        </button>
      </WorkoutsList>

      <!-- ALL WORKOUTS -->
      <WorkoutsList
        class="pt-8"
        :list="allWorkouts"
        :is-loading="$fetchState.pending || isAllWorkoutsLoading"
      >
        All Workouts

        <button
          class="px-2 py-1 text-base text-indigo-dark bg-indigo-lighter rounded-md focus:outline-none"
          @click="fetchAllWorkouts(true)"
        >
          Refresh
        </button>
      </WorkoutsList>

      <section class="flex flex-col items-center pt-8 border-none space-y-4">
        <!-- ERRORS -->
        <article
          v-if="error != null"
          class="w-full max-w-2xl px-4 py-3 text-center rounded-lg bg-red-lighter text-indigo-darker"
        >
          <p class="truncate">{{ error }}</p>
        </article>

        <button
          v-if="!reachedEnd && allWorkouts.length > 0"
          class="flex justify-center w-full max-w-xs px-6 py-2 text-lg font-medium rounded-lg focus:ring-2 ring-green-dark focus:outline-none text-green-dark bg-green-lighter shadow-sm"
          @click="loadNextPage"
        >
          <LoadingSpinner
            v-if="isAllWorkoutsLoading"
            class="w-7 h-7 border-green-dark"
          />
          <span v-else>Load more</span>
        </button>

        <ResultsEnd v-if="reachedEnd" />
      </section>
    </section>
  </main>
</template>

<script>
import { AisInstantSearchSsr, AisConfigure, AisInfiniteHits, AisSearchBox, AisPoweredBy, createServerRootMixin } from 'vue-instantsearch';
import algoliasearch from 'algoliasearch/lite'
// orderBy seems to cause an issue during site generation, all queries return [] when using it :/
import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from 'firebase/firestore'
import NuxtConfig from '~/nuxt.config'
import { db } from '~/plugins/firebase.js'

const config = NuxtConfig.publicRuntimeConfig
const algoliaClient = algoliasearch(config.ALGOLIA.APPID, config.ALGOLIA.SEARCHKEY)

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
  components: {
    AisInstantSearchSsr,
    AisConfigure,
    AisSearchBox,
    AisPoweredBy,
    AisInfiniteHits,
  },
  mixins: [
    createServerRootMixin({
      indexName: config.ALGOLIA.INDEX,
      searchClient: {
        ...algoliaClient,
        search (requests) {
          // avoid the initial empty search
          if (requests.every(({ params }) => !params.query)) {
            return Promise.resolve({
              results: requests.map(() => ({
                hits: [],
                nbHits: 0,
                nbPages: 0,
                processingTimeMS: 0,
              })),
            })
          }

          return algoliaClient.search(requests)
        },
      },
    }),
  ],
  data: () => ({
    hideMessage: false,

    // search
    query: '',
    isSearchLoading: false,

    // recommended
    recommendedWorkouts: [],
    isRecommendedWorkoutsLoading: false,

    // all
    allWorkouts: [],
    isAllWorkoutsLoading: true,
    reachedEnd: false,
    error: null,
  }),
  async fetch () {
    await this.fetchRecommendedWorkouts()
  },
  head: {
    title: 'Mylo | Free Workouts',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Discover completely free workouts that you can easily add to your own schedule in Mylo.',
      },
    ],
  },
  async mounted () {
    await this.fetchAllWorkouts()
  },
  methods: {
    async fetchRecommendedWorkouts (refresh = false) {
      this.isRecommendedWorkoutsLoading = true

      try {
        const recommendedSnapshot = await getDocs(query(
          collection(db, 'shared'),
          where('data.creatorId', '==', this.$config.OFFICIAL_ACCOUNT),
          orderBy('data.name'),
        ))

        if (refresh) this.recommendedWorkouts = []
        recommendedSnapshot.forEach(doc => addWorkouts(this.recommendedWorkouts, doc))
      } catch (e) {
        this.error = e.message
        return Promise.reject(e)
      } finally {
        this.isRecommendedWorkoutsLoading = false
      }
    },
    async fetchAllWorkouts (refresh = false) {
      this.isAllWorkoutsLoading = true

      try {
        const allSnapshot = await getDocs(query(
          collection(db, 'shared'),
          where('data.creatorId', '!=', this.$config.OFFICIAL_ACCOUNT),
          orderBy('data.creatorId'),
          orderBy('data.name'),
          limit(PAGE_SIZE),
        ))

        if (refresh) this.allWorkouts = []
        allSnapshot.forEach(doc => addWorkouts(this.allWorkouts, doc))

        if (allSnapshot.docs.length < PAGE_SIZE) this.reachedEnd = true
      } catch (e) {
        this.error = e.message
        return Promise.reject(e)
      } finally {
        this.isAllWorkoutsLoading = false
      }
    },
    refineSearch (query, cb) {
      this.query = query
      cb(query)
    },
    async loadNextPage () {
      if (this.reachedEnd) return

      try {
        this.error = null
        this.isAllWorkoutsLoading = true

        // this is only actually used when lastFetchedDoc is null which happens on first load only
        // because fetch() can't set the value to a non data property in the server.
        const lastWorkoutId = this.allWorkouts[PAGE_SIZE - 1]?.publicId

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
        this.error = e.message ?? 'Something went wrong while getting the workouts :/'
      } finally {
        this.isAllWorkoutsLoading = false
      }
    },
  },
}
</script>

