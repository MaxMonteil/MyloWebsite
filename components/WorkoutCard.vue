<template>
  <div
    class="p-2 text-green-900 bg-green-300 shadow-xl md:rounded-lg md:px-4 md:py-2 rounded-md"
  >
    <p class="mb-0.5 text-sm font-medium md:text-xl"><slot /></p>
    <p class="text-xs md:text-base">
      <span class="mr-3"><slot name="schedule" /></span>
      <span><slot name="exercises" /></span>
    </p>
  </div>
</template>
