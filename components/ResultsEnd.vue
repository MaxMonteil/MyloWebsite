<template>
  <article
    class="w-full max-w-2xl p-4 mx-auto text-center rounded-lg bg-gray"
  >
    <h3 class="text-xl font-semibold text-indigo-darker">
      <slot>You've reached the end!</slot>
    </h3>
    <p class="mt-2 text-indigo">Still couldn't find the workout you wanted? Check back later or create it yourself! Once you share it, it will appear here.</p>

    <a
      href="https://app.mylo.fit/register"
      class="inline-block px-6 py-2 mt-5 text-lg font-medium text-white focus:outline-none focus:ring-2 ring-green-light rounded-md bg-green-dark"
    >
      Start making a plan
    </a>
  </article>
</template>

<script charset="utf-8">
export default {
  name: 'ResultsEnd',
}
</script>
