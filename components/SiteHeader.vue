<template>
  <nav class="px-5 fixed z-10 rounded-b-3xl py-2.5 bg-green-400 w-full">
    <ul class="flex items-center justify-between mx-auto text-sm text-green-800 md:justify-start md:text-base max-w-7xl">
      <li class="text-green-900 md:grow">
        <a aria-label="Mylo logo, return to top of homepage." href="#plan-once-progress-forever">
          <LogoSvg class="w-10 h-10 md:w-14 md:h-14" />
        </a>
      </li>

      <!-- <li><NuxtLink to="/free-plans">Free plans</NuxtLink></li> -->
      <!-- <li class="md:ml-6"><NuxtLink to="/blog">Blog</NuxtLink></li> -->

      <li class="flex gap-5 items-center">
        <NuxtLink
          to="https://play.google.com/store/apps/details?id=fit.mylo.app.twa"
          class="p-2 md:p-3 text-green-50 bg-green-700 rounded-lg"
        >
          <GooglePlaySvg  class="w-4 h-4" />
        </NuxtLink>

        <NuxtLink
          to="https://app.mylo.fit"
          class="px-4 py-2 font-medium text-green-600 bg-white rounded-lg md:px-6 md:py-3 leading-4"
        >
          Start training
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
