<template>
  <footer
    class="w-full px-6 py-16 text-lg text-white shadow-inner space-y-5 divide-y bg-green-darker"
  >
    <p href="/" class="flex items-center space-x-3">
      <TheLogo :size="56" />
      <span>Mylo, your personal training assistant.</span>
    </p>

    <p class="pt-5 opacity-50">
      © 2020 Mylo
    </p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>
