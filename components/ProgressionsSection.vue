<template>
  <ColoredArticle
    bg="bg-yellow-200"
    heading="text-yellow-900"
    text="text-yellow-800"
    img="h-[220px] md:w-[612px] md:h-[397px]"
  >
    <template #subheading> Progressions </template>

    <template #heading> Plan once, train forever. </template>

    <template #body>
      A proper workout varies in frequency, weights, reps, and intensity. With
      exercise rules, Mylo can manage all that for you automatically.
      <br />
      <br />
      Of course, you’re always in control and can make your own changes anytime.
    </template>

    <template #image>
      <NuxtImg src="/progressions.png" />
    </template>
  </ColoredArticle>
</template>
