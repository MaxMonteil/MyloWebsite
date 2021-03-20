<template>
  <div
    class="flex flex-col items-center pt-2 overflow-hidden md:overflow-visible"
  >
    <div class="relative w-full max-w-md">
      <img
        src="~/assets/images/sports_icons.svg"
        alt="sports icons"
        title="Sport Icons"
        class="absolute top-0 left-0 z-0 w-full mt-2 stroke-green"
        loading="lazy"
      />
    </div>

    <InputRadio
      v-model="display"
      theme="dark"
      class="z-10 mb-6"
      :labels="labels"
      size="large"
    />

    <div
      class="z-10 items-start max-w-md px-3 pb-20 align-top grid-cols-2 transform grid"
    >
      <ExerciseForm
        :class="
          display === 'Exercise'
            ? 'z-30'
            : 'transform translate-y-2 translate-x-10 scale-90'
        "
        :active="display === 'Exercise'"
      />

      <RuleForm
        class="transform"
        :class="
          display === 'Rules'
            ? 'z-30 -translate-x-1/2'
            : '-translate-x-10 translate-y-2 scale-90'
        "
        :active="display === 'Rules'"
      />
    </div>
  </div>
</template>

<script>
const labels = ['Exercise', 'Rules']

export default {
  name: 'TheHero',
  data() {
    return {
      labels,
      display: labels[0],
    }
  },
}
</script>
