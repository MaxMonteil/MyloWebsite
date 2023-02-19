<template>
  <article class="p-5 pb-0 rounded-3xl space-y-10 overflow-clip" :class="[bg, text]">
    <div class="space-y-2">
      <h3 class="text-sm font-medium tracking-wider uppercase">
        <slot name="subheading" />
      </h3>

      <h2 class="text-2xl font-black" :class="heading">
        <slot name="heading" />
      </h2>

      <p>
        <slot name="body" />
      </p>
    </div>

    <div class="w-full shadow-lg rounded-t-2xl" :class="img"></div>
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
