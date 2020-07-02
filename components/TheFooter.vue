<template>
  <footer
    class="relative z-0 w-full px-6 py-16 overflow-y-hidden shadow-inner bg-green-darker"
  >
    <SportIcons
      fill="green-darker"
      stroke="green-dark"
      class="absolute top-0 left-0 z-10 max-w-sm mt-4 -ml-4 opacity-75 transform rotate-180"
    />
    <section
      class="relative z-20 mx-auto text-lg text-white sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl space-y-5 divide-y"
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
