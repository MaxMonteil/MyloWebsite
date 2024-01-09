<template>
  <article class="bg-white rounded-md border border-gray-500 shadow-sm flex justify-between p-2">
    <div class="space-y-1">
      <h2 class="flex items-center text-xl font-medium text-gray-800 line-clamp-1 gap-2">
        <slot />
      </h2>

      <p class="text-sm text-gray-600 space-x-4">
        <span class="text-green-400">{{ times }}x / Week</span>
        <span v-if="count">{{ count }} Exercises</span>
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{ times: string, count?: string }>()
</script>
