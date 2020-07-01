<template>
  <header
    class="w-full mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
  >
    <div class="flex items-center justify-between px-6 py-5">
      <a
        href="/"
        class="flex items-center text-green-darker focus:outline-none focus:shadow-outline"
      >
        <TheLogo :size="36" />
        <span>Mylo</span>
      </a>

      <a
        href="https://www.mylo.fit"
        class="px-5 py-2 text-sm font-medium border rounded focus:shadow-outline focus:outline-none active:text-white active:bg-green-darker transition duration-150 hover:bg-green-dark hover:text-white hover:shadow text-green-dark border-green-dark"
      >
        Log in
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>
