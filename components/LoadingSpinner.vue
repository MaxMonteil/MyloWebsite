<template functional>
  <div
    class="inline-block border-2 border-b-0 rounded-full border-r-opacity-0 border-l-opacity-0 animate-spin"
    :class="[
      data.class,
      data.staticClass,
    ]"
  />
</template>

<script>
export default {
  name: 'LoadingSpinner',
}
</script>

<style scoped>
.border-r-opacity-0 {
  border-right-color: transparent;
}

.border-l-opacity-0 {
  border-left-color: transparent;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
