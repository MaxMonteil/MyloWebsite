<template>
  <article class="max-w-screen-lg m-5 text-gray-800">
    <Image
      src="https://res.cloudinary.com/demgpyia8/image/upload/v1677427674/maximilien_imyhnl"
      layout="fixed"
      width="144"
      :aspect-ratio="1"
      :breakpoints="[128, 144]"
      class="w-32 h-32 bg-gray-700 border-4 border-gray-700 shadow-lg md:w-36 md:h-36 rounded-2xl"
      alt="Profile image of me, Maximilien, the guy making Mylo."
    />

    <h2 class="mt-5 text-2xl font-black md:text-4xl md:mt-10">
      Why Mylo?
    </h2>

    <p class="mt-2 max-w-prose md:text-lg md:mt-4">
      I wanted something more than just a digital notebook. Something smart enough
      to handle all the management so that I can focus on training.
      <br><br>
      It needed to be fully featured, extremely flexible, and never in the way. That’s
      what I’m building.
      <br><br>
      If that sounds cool you should try out Mylo.
    </p>
  </article>
</template>

<script setup lang="ts">
import { Image } from '@unpic/vue'
</script>
