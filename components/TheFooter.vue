<template>
  <footer class="w-full px-6 py-16 shadow-inner bg-green-darker">
    <section
      class="mx-auto text-lg text-white sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl space-y-5 divide-y"
    >
      <p href="/" class="flex items-center space-x-3">
        <TheLogo :size="56" />
        <span>Mylo is your personal training assistant.</span>
      </p>

      <p class="pt-5 opacity-50">
        © 2020 Mylo
      </p>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>
