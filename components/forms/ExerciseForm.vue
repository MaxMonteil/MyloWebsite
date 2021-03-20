<template>
  <section
    class="flex flex-col w-full p-2 px-2 text-white rounded bg-green-dark transition-shadow duration-100 transition-transform ease-in-out"
    :class="active ? 'shadow-2xl' : 'shadow-md'"
    style="width: calc(100vw - 24px); max-width: 383px;"
  >
    <label class="text-sm font-medium leading-none text-white">
      Exercise Name
      <input
        v-model="exercise.name"
        class="block w-full py-1 pl-2 mt-2 text-lg font-medium text-black bg-white rounded outline-none focus:shadow"
      />
    </label>

    <!-- Exercise Scheme  Grid -->
    <div
      class="items-center mt-3 grid cst-grid-cols-4 row-gap-2 justify-items-center"
    >
      <label class="text-sm font-medium" for="sets">
        Sets
      </label>

      <label id="reps-label" class="text-sm font-medium capitalize" for="reps">
        {{ header.unit }}
      </label>

      <label
        :id="`${header.weight}-label`"
        class="text-sm font-medium capitalize"
        for="weight"
      >
        {{ header.weight }}
      </label>

      <div />

      <!-- Rows that accept user input -->
      <template v-for="(set, i) in exercise.scheme">
        <span :id="`set-${i}`" :key="`set-${i}`">{{ i + 1 }}</span>

        <!-- Unit value input -->
        <InputNumber
          :key="`unit-${i}`"
          class="w-20"
          aria-labelledby="reps-label"
          :value="exercise.scheme[i]"
          on-focus="this.select()"
          @change="updateValue($event, i, 'scheme')"
        />

        <!-- Weight value input -->
        <InputNumber
          :key="`weight-${i}`"
          class="w-20"
          :aria-labelledby="`${header.weight}-label`"
          :value="exercise.weights[i]"
          on-focus="this.select()"
          @change="updateValue($event, i, 'weights')"
        />

        <button
          :key="`remove-${i}`"
          type="button"
          class="justify-self-end"
          @click="removeSet(i)"
        >
          <IconBase size="24" icon="x-mark" :labelledby="`set-${i}`" />
        </button>
      </template>

      <!-- Dummy row to add more sets -->
      <label id="add-new-set" class="hidden">Add new set</label>
      <IconBase
        size="20"
        icon="plus"
        labelledby="add-new-set"
        class="cursor-pointer text-green-darker"
        @click="addSet"
      />
      <span
        class="w-20 h-full py-3 rounded cursor-pointer bg-green-darker"
        @click="addSet"
      />
      <span
        class="w-20 h-full py-3 rounded cursor-pointer bg-green-darker"
        @click="addSet"
      />
      <span class="w-6" />
    </div>

    <div class="flex items-end justify-between mt-4">
      <InputSelect
        v-model="exercise.repUnit"
        class="capitalize"
        label="Unit"
        :label-green="false"
        :values="exerciseUnits"
      />

      <label class="text-sm font-medium text-white">
        Rest
        <span class="block mt-2 text-base font-normal">
          <InputNumber
            :max="300"
            :min="0"
            class="w-12 pr-1 text-right"
            @change="exercise.rest = $event"
          />
          s
        </span>
      </label>

      <button
        class="flex items-center px-3 py-1 text-sm font-medium bg-white rounded shadow text-red-dark active:bg-red-dark"
        @click="makeExercise"
      >
        <IconBase
          size="16"
          icon="x-mark"
          labelledby="reset-exercise-form"
          class="mr-1"
        />
        <span id="reset-exercise-form">Reset</span>
      </button>
    </div>
  </section>
</template>

<script>
import { Exercise } from '@/components/domains/exercise.js'

export default {
  name: 'ExerciseForm',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      exercise: Exercise.create(),
    }
  },
  computed: {
    header() {
      const header = {
        [Exercise.REP_UNITS.TIME]: { unit: 'hold (s)', weight: 'kg' },
        [Exercise.REP_UNITS.DIST]: { unit: 'distance (m)', weight: 'laps' },
        [Exercise.REP_UNITS.REPS]: { unit: 'reps', weight: 'kg' },
      }

      return header[this.exercise.repUnit]
    },
    exerciseUnits() {
      return Exercise.REP_UNITS
    },
  },
  mounted() {
    const exercises = [
      'Squat',
      'Bench Press',
      'Pushups',
      'Plank',
      'Lunges',
      'Downward Dog',
      'Frog Stand',
    ]
    this.exercise.name = exercises[Math.floor(Math.random() * exercises.length)]
  },
  methods: {
    makeExercise() {
      this.exercise = Exercise.create()
    },
    updateValue(newValue, index, key) {
      if (key === 'scheme') this.exercise.setRep(newValue, index)
      if (key === 'weights') this.exercise.setWeight(newValue, index)
    },
    addSet() {
      this.exercise.addSet()
    },
    removeSet(index) {
      this.exercise.removeSet(index)
    },
  },
}
</script>

<style scoped>
.cst-grid-cols-4 {
  grid-template-columns: min-content repeat(2, minmax(0, 1fr)) min-content;
}

.justify-items-center {
  justify-items: center;
}

.justify-self-end {
  justify-self: end;
}
</style>
