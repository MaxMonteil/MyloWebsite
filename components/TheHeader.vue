<template>
  <header class="w-full mx-auto lg:max-w-screen-xl">
    <div class="flex items-center justify-between px-6">
      <a
        href="https://www.mylo.fit"
        class="flex items-center text-green-darker focus:outline-none focus:shadow-outline"
      >
        <TheLogo labelledby="mylo" :size="36" />
        <span id="mylo">Mylo</span>
      </a>

      <a
        href="https://app.mylo.fit/login"
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
