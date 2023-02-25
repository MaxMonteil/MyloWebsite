<template>
  <ColoredArticle
    class="content-visibility-auto"
    bg="bg-red-200"
    heading="text-red-900"
    text="text-red-800"
  >
    <template #subheading> Scheduling </template>

    <template #heading> Beyond working out. </template>

    <template #body>
      Mylo’s plans are so flexible you can add meditation routines, swimming
      practice, physio sessions, and more to your schedule.
    </template>

    <template #image>
      <WorkoutSchedulingSvg
        class="-mb-1 w-full border-red-100 border-4 rounded-t-2xl border-b-0 shadow-2xl schedule w-[243px] md:w-[400px]"
      />
    </template>
  </ColoredArticle>
</template>

<style scoped>
.content-visibility-auto {
  content-visibility: auto;
}
</style>
