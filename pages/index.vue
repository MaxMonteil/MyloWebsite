<template>
  <main>
    <!-- HERO -->
    <section
      class="w-full mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <div class="px-6 py-16 md:text-center">
        <h1
          class="text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl"
        >
          Stay focused on getting <span class="text-green-dark">stronger</span>
        </h1>

        <p class="mx-auto mt-5 text-lg md:text-xl text-gray-darker">
          We're making Mylo to automatically update and manage your workouts.
          <br />
          Currently in beta, launching soon.
        </p>
      </div>
    </section>

    <!-- HERO -->
    <section class="w-full shadow-inner bg-green-darker">
      <div class="max-w-3xl px-6 py-8 mx-auto space-y-6">
        <h2
          class="text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl"
        >
          Why Mylo?
        </h2>

        <article class="text-white md:text-lg space-y-6">
          <p>
            Whether you're a beginner or a pro, it should be as easy as possible
            to exercise and stick to it.
          </p>

          <p>
            There are other apps out there that let you track your workouts but
            that’s all they do. You still have to manually log what you did then
            calculate reps, weights, and more for next time.
          </p>

          <p>
            I think your workout app should be more like an assistant and less
            like a digital notebook, it should handle all this stuff and
            <span class="font-medium text-green">let you focus on training</span
            >.
          </p>

          <p>
            I’m building Mylo to
            <span class="font-medium text-green"
              >automate all the hassle around training</span
            >, no more wondering what you're supposed to do today, next week, or
            even next year!
          </p>

          <p>
            Your
            <span class="font-medium text-green"
              >personal workout assistant</span
            >
            takes care of it all for you.
          </p>
        </article>

        <button
          class="p-3 font-medium shadow bg-green rounded-md text-green-darker"
        >
          Join the launch list
        </button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Index',
}
</script>
