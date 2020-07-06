<template>
  <footer
    class="relative z-0 w-full px-6 py-16 overflow-y-hidden shadow-inner bg-green-darker"
  >
    <img
      :src="require('~/assets/images/sports_icons.svg')"
      alt="sports_icons"
      width="100%"
      title="Sport Icons"
      class="absolute top-0 left-0 z-10 max-w-sm mt-4 -ml-4 opacity-75 stroke-green-dark transform rotate-180"
    />
    <section
      class="relative z-20 mx-auto text-lg text-white sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl space-y-5 divide-y"
    >
      <p href="/" class="flex items-center space-x-3">
        <TheLogo labelledby="headline" :size="56" />
        <span id="headline">Mylo, your personal training assistant.</span>
      </p>

      <p class="pt-5 opacity-75">
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

<style scoped>
.stroke-green-dark {
  filter: invert(47%) sepia(29%) saturate(403%) hue-rotate(99deg)
    brightness(90%) contrast(83%);
}
</style>
