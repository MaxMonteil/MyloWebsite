<template>
  <nav class="absolute whitespace-nowrap z-10 w-full px-5 text-lg text-white bg-transparent py-4">
    <div class="flex justify-between mx-auto max-w-screen-lg flex-col md:flex-row items-center gap-4">
      <div class="flex w-full justify-between md:justify-normal items-center gap-8">
        <NuxtLink
          aria-label="Mylo logo, return to top of homepage."
          to="/"
        >
          <WordmarkLogoSvg class="h-6" />
        </NuxtLink>

        <!-- <NuxtLink to="/free-plans"> -->
        <!--   Free plans -->
        <!-- </NuxtLink> -->

        <!-- <NuxtLink to="/blog"> -->
        <!--   Blog -->
        <!-- </NuxtLink> -->
      </div>

      <div class="flex items-center gap-6">
        <NuxtLink to="/blog">
          Login
        </NuxtLink>

        <NuxtLink
          to="https://app.mylo.fit"
          class="px-4 py-2 text-base font-medium text-green-700 bg-white rounded-md leading-5"
        >
          Start Training
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
