<template>
  <header class="sticky top-0 z-30 w-full py-4 bg-white backdrop-filter backdrop-blur-sm bg-opacity-50">
    <div class="flex items-center justify-between px-6 mx-auto lg:max-w-screen-xl">
      <NuxtLink
        to="/"
        class="flex items-center text-green-dark focus:outline-none focus:shadow-outline"
      >
        <TheLogo :size="36" />
        <span class="hidden pt-1 text-lg md:block">Mylo</span>
      </NuxtLink>

      <NuxtLink
        to="/workouts"
        class="text-lg text-black"
        :class="{ 'workouts-link-active': $route.name === 'workouts' }"
      >
        Free Workouts
      </NuxtLink>

      <div class="space-x-2">
        <a
          href="https://app.mylo.fit/login"
          class="px-3 py-2 rounded-md focus:outline-none focus:ring-2 ring-green-dark"
        >
        Login
        </a>

        <a
          href="https://app.mylo.fit/register"
          class="px-3 py-2 whitespace-nowrap focus:outline-none focus:ring-2 ring-green-dark rounded-md bg-green-lighter text-green-darkest"
        >
        Sign up
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.workouts-link-active {
  background-image: linear-gradient(to bottom, #D3F8E7 33%, transparent 33%);
  background-position: 0 0.7em;
  background-repeat: repeat-x;
  background-size: 2px 100px;
}
</style>
