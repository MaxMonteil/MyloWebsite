<template>
  <article
    class="flex flex-col p-5 border-2 max-w-md rounded-xl gap-5"
    :class="{
      'text-gray-900 bg-gray-200 border-gray-400': theme === 'gray',
      'text-green-900 bg-green-200 border-green-400': theme === 'green',
      'text-blue-900 bg-blue-200 border-blue-400': theme === 'blue',
      'text-yellow-900 bg-yellow-200 border-yellow-400': theme === 'yellow',
      'text-red-900 bg-red-200 border-red-400': theme === 'red',
    }"
  >
    <h3 class="text-3xl leading-9 font-black">
      <slot name="title" />
    </h3>

    <section class="space-y-2 text-lg leading-7">
      <slot name="content" />
    </section>

    <slot name="media" />
  </article>
</template>

<script setup lang="ts">
type Themes = 'gray' | 'green' | 'blue' | 'yellow' | 'red'
const { theme = 'gray' } = defineProps<{ theme?: Themes }>()
</script>
