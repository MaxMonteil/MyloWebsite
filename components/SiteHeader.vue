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
      <li>
        <NuxtLink
          to="https://app.mylo.fit"
          class="px-4 py-2 font-medium text-green-600 bg-white rounded-lg md:ml-6 md:px-6 md:py-3 leading-4"
        >
          Start training
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
