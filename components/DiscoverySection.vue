<template>
  <ColoredArticle
    bg="bg-green-200"
    heading="text-green-900"
    text="text-green-800"
    img="bg-green-100 h-[394px] md:w-[411px]"
  >
    <template #subheading>
      Discovery
    </template>

    <template #heading>
      Looking for a plan?
    </template>

    <template #body>
      Reliably finding good workout plans can be a huge pain and once you do, you
      still have to make sense of them.
      <br /> <br />
      Mylo comes with free workouts you can follow right away or edit to suit your
      needs. They all have exercise rules so all you need to do is show up and follow
      the plan.
      <br /> <br />
      <NuxtLink
        to=/free-plans
        class="inline-block px-6 py-3 font-medium text-green-700 rounded-lg md:text-xl md:px-8 leading-5 bg-green-50"
      >
        Explore free plans
      </NuxtLink>
    </template>
  </ColoredArticle>
</template>
