<template>
  <section
    class="w-full p-4 text-black bg-white rounded-lg ease-in-out transition-transform transition-shadow duration-150 space-y-6"
    :class="active ? 'shadow-2xl' : 'shadow-md'"
    style="width: 321px;"
  >
    <header class="flex items-center justify-between">
      <h3 class="font-medium">
        Exercise Rules
      </h3>

      <button
        class="px-3 py-1 text-sm font-medium border rounded active:bg-green-dark active:text-white border-green-dark text-green-darker"
        @click="makeRules"
      >
        Reset All
      </button>
    </header>

    <InputRadio
      v-slot="{ label }"
      v-model="target"
      class="flex justify-center capitalize"
      :labels="targets"
    >
      {{ label.text }}
    </InputRadio>

    <div class="space-y-6">
      <div v-if="showAdvanced" class="p-4 rounded bg-gray space-y-4">
        <label class="inline-block">
          Applies to
          <InputRadio
            v-slot="{ label }"
            class="flex mt-2"
            :labels="amountDistributions"
            :model-value="rule.distribution"
            @input="save({ ...rule, distribution: $event })"
          >
            {{ label.text }}
          </InputRadio>
        </label>

        <label v-if="showDistributionByOne" class="inline-block">
          Go through the sets
          <InputRadio
            v-slot="{ label }"
            class="flex mt-2"
            :labels="distributionMethods"
            :model-value="rule.distMethod"
            @input="save({ ...rule, distMethod: $event })"
          >
            {{ label.text }}
          </InputRadio>
        </label>
      </div>

      <div v-show="rule.target" class="space-y-6">
        <label class="inline-block">
          Change the
          <span class="lowercase text-green-darker">{{
            filterTarget(rule.target)
          }}</span>
          by
          <InputNumber
            min="-100"
            class="ml-2"
            theme="gray"
            :value="rule.amount"
            @change="save({ ...rule, amount: parseAmount($event) })"
          />
        </label>

        <label class="inline-block">
          every
          <InputNumber
            class="mx-2"
            theme="gray"
            :value="rule.frequency"
            @input="save({ ...rule, frequency: parseInt($event) || $event })"
          />
          workout{{ rule.frequency > 1 ? 's' : '' }}
        </label>

        <div class="space-y-2">
          <label class="flex items-center justify-between" for="addLimit">
            Add a limit?

            <input
              id="addLimit"
              type="checkbox"
              name="addLimit"
              :checked="rule.hasStop"
              @input="save({ ...rule, hasStop: $event.target.checked })"
            />
          </label>

          <div
            v-show="rule.hasStop"
            class="p-4 rounded bg-gray"
            :class="{ 'space-y-4': showAdvanced }"
          >
            <label>
              Stop when
              <InputRadio
                v-if="showAdvanced"
                v-slot="{ label }"
                class="inline-flex ml-2"
                :labels="stopMethods"
                :model-value="rule.stopMethod"
                @input="save({ ...rule, stopMethod: $event })"
              >
                {{ label.text }}
              </InputRadio>
            </label>

            <label class="inline-block">
              {{ stopStrings(rule.stopMethod, rule.target)[0] }}
              <InputNumber
                class="mx-1"
                :value="rule.stopValue"
                @input="
                  save({ ...rule, stopValue: parseInt($event) || $event })
                "
              />
              {{ stopStrings(rule.stopMethod, rule.target)[1] }}
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Rule } from '@/components/domains/rule.js'

import InputRadio from '@/components/inputs/InputRadio'
import InputNumber from '@/components/inputs/InputNumber'

export default {
  name: 'RuleForm',
  components: {
    InputRadio,
    InputNumber,
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      target: 'scheme',
      rules: {},
    }
  },
  computed: {
    rule() {
      return this.rules[this.target]
    },
    targets() {
      return Object.entries(Rule.TARGETS).map(([k, v]) => ({
        text: k.toLowerCase(),
        value: v,
      }))
    },
    showAdvanced() {
      if (!this.rule) return false

      return (
        this.rule.target &&
        ![Rule.TARGETS.SETS, Rule.TARGETS.REST].includes(
          this.rule.target.toLowerCase()
        )
      )
    },
    showDistributionByOne() {
      return this.rule.distribution === Rule.AMOUNT_DISTRIBUTION.ONE
    },
    amountDistributions() {
      return [
        {
          text: 'all the sets',
          value: Rule.AMOUNT_DISTRIBUTION.ALL,
        },
        {
          text: 'one set at a time',
          value: Rule.AMOUNT_DISTRIBUTION.ONE,
        },
      ]
    },
    distributionMethods() {
      return [
        {
          text: 'in order',
          value: Rule.DISTRIBUTION_METHOD.UP,
        },
        {
          text: 'backwards',
          value: Rule.DISTRIBUTION_METHOD.DOWN,
        },
      ]
    },
    stopMethods() {
      return [
        {
          text: 'all',
          value: Rule.STOP_METHODS.ALL,
        },
        {
          text: 'one',
          value: Rule.STOP_METHODS.ONE,
        },
      ]
    },
  },
  created() {
    this.makeRules()
  },
  methods: {
    makeRules() {
      this.rules = Object.fromEntries(
        Object.values(Rule.TARGETS).map((target) => [
          target,
          Rule.create({ target }),
        ])
      )
    },
    save(updatedRule) {
      this.rules[this.target] = updatedRule
    },
    filterTarget(target) {
      if (target === Rule.TARGETS.REPS) return 'reps'
      return target
    },
    parseAmount(amount) {
      const parsed =
        this.target === Rule.TARGETS.WEIGHT
          ? Math.round(parseFloat(amount) * 4) / 4
          : parseInt(amount)

      return parsed ?? amount
    },
    stopStrings(stop, target) {
      const options = {
        [Rule.STOP_METHODS.ONE]: {
          [Rule.TARGETS.REPS]: ['set reaches', 'reps'],
          [Rule.TARGETS.SETS]: ['there are', 'sets'],
          [Rule.TARGETS.WEIGHT]: ['set reaches', 'kg'],
          [Rule.TARGETS.REST]: ['rest reaches', 's'],
        },
        [Rule.STOP_METHODS.ALL]: {
          [Rule.TARGETS.REPS]: ['sets reach', 'reps'],
          [Rule.TARGETS.SETS]: ['there are', 'sets'],
          [Rule.TARGETS.WEIGHT]: ['sets reach', 'kg'],
          [Rule.TARGETS.REST]: ['rest reaches', 's'],
        },
      }

      return options[stop][target] || ['', '']
    },
  },
}
</script>
