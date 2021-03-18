<template>
  <CardBase
    tag="div"
    theme="green-dark"
    class="w-full px-2 transition-shadow duration-150 transition-transform ease-in-out"
    :class="active ? 'shadow-2xl' : 'shadow-md'"
    style="width: calc(100vw - 24px); max-width: 383px;"
  >
    <div>
      <InputText
        v-model="exercise.name"
        label="Exercise Name"
        :label-green="false"
      />

      <!-- Exercise Scheme  Grid -->
      <div
        class="items-center mt-3 grid cst-grid-cols-4 row-gap-2 justify-items-center"
      >
        <label class="text-sm font-medium" for="sets">
          Sets
        </label>

        <label class="text-sm font-medium capitalize" for="reps">
          {{ header.unit }}
        </label>

        <label class="text-sm font-medium capitalize" for="weight">
          {{ header.weight }}
        </label>

        <div />

        <!-- Rows that accept user input -->
        <template v-for="(set, i) in exercise.scheme">
          <span :key="`set-${i}`">{{ i + 1 }}</span>

          <!-- Unit value input -->
          <InputNumber
            :key="`unit-${i}`"
            :value="exercise.scheme[i]"
            on-focus="this.select()"
            @change="updateValue($event, i, 'scheme')"
          />

          <!-- Weight value input -->
          <InputNumber
            :key="`weight-${i}`"
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
            <IconBase size="24" icon="x-mark" />
          </button>
        </template>

        <!-- Dummy row to add more rows-->
        <IconBase
          size="20"
          icon="plus"
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
        <InputRest
          :label-green="false"
          :value="exercise.rest"
          @change="exercise.rest = $event"
        />

        <button
          class="flex items-center px-3 py-1 text-sm font-medium bg-white rounded shadow text-red-dark active:bg-red-dark"
          @click="makeExercise"
        >
          <IconBase size="16" icon="x-mark" class="mr-1" />
          Reset
        </button>
      </div>
    </div>
  </CardBase>
</template>

<script>
import { Rule } from '@/components/domains/rule.js'
import { Exercise } from '@/components/domains/exercise.js'

import IconBase from '@/components/icons/IconBase'
import CardBase from '@/components/CardBase'
import InputText from '@/components/inputs/InputText'
import InputSelect from '@/components/inputs/InputSelect'
import InputRest from '@/components/inputs/InputRest'
import InputNumber from '@/components/inputs/InputNumber'

export default {
  name: 'ExerciseForm',
  components: {
    IconBase,
    CardBase,
    InputText,
    InputSelect,
    InputNumber,
    InputRest,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      exercise: {},
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
  created() {
    this.makeExercise()
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
    saveRule(rule) {
      this.exercise.addRule(Rule.create(rule))
    },
    removeRule(rule) {
      this.exercise.removeRule(rule)
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
