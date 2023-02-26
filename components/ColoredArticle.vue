<template>
  <article class="flex flex-col p-5 pb-0 max-w-7xl gap-10 rounded-3xl md:flex-row md:p-10 md:pb-0 overflow-clip" :class="[bg, text]">
    <div class="space-y-2">
      <h3 class="-mb-2 text-sm font-medium tracking-wider uppercase md:text-xl">
        <slot name="subheading" />
      </h3>

      <h2 class="text-2xl font-black md:text-4xl" :class="heading">
        <slot name="heading" />
      </h2>

      <p class="md:text-xl md:max-w-prose">
        <slot name="body" />
      </p>
    </div>

    <slot name="image">
      <div class="w-full shadow-lg rounded-t-2xl" :class="img"></div>
    </slot>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  bg: string
  heading: string
  text: string
  img?: string
}>()
</script>
