<template>
  <article class="max-w-4xl px-5 py-10 text-gray-800 space-y-2">
    <h3 class="-mb-2 text-sm font-medium tracking-wider text-gray-700 uppercase md:text-xl">
      <slot name="subheading" />
    </h3>

    <h2 class="text-2xl font-black md:text-4xl">
      <slot name="heading" />
    </h2>

    <p class="md:text-xl max-w-prose">
      <slot name="body" />
    </p>
  </article>
</template>
