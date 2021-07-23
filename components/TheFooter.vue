<template>
  <footer class="w-full px-6 py-12 pt-4">
    <section
      class="flex items-center justify-between text-green-dark"
    >
      <div class="flex items-center space-x-2">
        <TheLogo labelledby="tagline" :size="36" />
        <p id="tagline" class="text-sm">Stop exercising without a plan</p>
      </div>

      <p class="text-sm">© 2021 Mylo</p>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>
