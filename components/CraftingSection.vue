<template>
  <ColoredArticle
    class="content-visibility-auto"
    bg="bg-blue-200"
    heading="text-blue-900"
    text="text-blue-800"
  >
    <template #subheading> Crafting </template>

    <template #heading> Craft your workout exactly. </template>

    <template #body>
      Do everything paper and spreadsheets can plus everything they can’t.
      <br />
      <br />
      Bring your own rep, distance, and time based exercises. Create plans that
      repeat every day or lasts 15 weeks!
      <br />
      <br />
      It’s all supported.
    </template>

    <template #image>
      <WorkoutFormSvg
        class="-mb-1 w-full border-blue-100 border-4 rounded-t-2xl border-b-0 shadow-2xl schedule w-[243px] md:w-[400px]"
      />
    </template>
  </ColoredArticle>
</template>

<style scoped>
.content-visibility-auto {
  content-visibility: auto;
}
</style>
