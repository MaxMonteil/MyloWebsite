<template>
  <main class="space-y-16">
    <!-- HERO -->
    <section
      class="w-full mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <div class="px-6 md:text-center space-y-5">
        <h1
          class="text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl"
        >
          Stay focused on getting <span class="text-green-dark">stronger</span>
        </h1>

        <p class="mx-auto text-lg md:text-xl text-gray-darker">
          We're making Mylo to automatically update and manage your workouts.
          <br />
          Currently in beta, launching soon.
        </p>

        <form class="max-w-3xl mx-auto text-lg md:text-xl space-y-5">
          <button
            class="px-4 py-3 font-medium text-white rounded shadow hover:bg-opacity-75 transition duration-150 bg-green-dark"
          >
            Notify me
          </button>
        </form>
      </div>
    </section>

    <!-- Why Mylo -->
    <section class="w-full shadow-inner bg-green-darker">
      <div class="max-w-3xl px-6 py-8 mx-auto space-y-6">
        <h2
          class="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl"
        >
          Why Mylo?
        </h2>

        <article class="text-lg text-white md:text-xl space-y-6">
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
              >personal training assistant</span
            >
            takes care of it all for you.
          </p>
        </article>

        <button
          class="p-3 font-medium rounded shadow hover:bg-opacity-75 transition duration-150 bg-green text-green-darker"
        >
          Join the launch list
        </button>
      </div>
    </section>

    <!-- FEATURES -->
    <section
      class="w-full mx-auto space-y-16 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <article class="max-w-3xl px-6 mx-auto text-lg md:text-xl space-y-5">
        <h2
          class="mb-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
        >
          Super flexible workout creation
        </h2>

        <p class="text-gray-darker">
          Saw an awesome exercise in a video? Invented your own?
        </p>
        <p class="text-gray-darker">
          Mylo is here to help you not limit you so there are almost no
          constraints on what kind of exercise or workout you can create.
        </p>
        <p class="font-medium text-green-darker">
          Whatever you can think of, Mylo can manage.
        </p>
      </article>

      <article class="max-w-3xl px-6 mx-auto text-lg md:text-xl space-y-5">
        <h2
          class="mb-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
        >
          Automatic exercise progression
        </h2>

        <p class="text-gray-darker">
          This isn't just a workout logging app, it’s your personal training
          assistant.
        </p>
        <p class="text-gray-darker">
          And with progression rules, you tell Mylo how an exercise should
          progress and it will take care of it. Of course, you can always take
          over.
        </p>
        <p class="font-medium text-green-darker">
          No more second guessing weights or reps.
        </p>
      </article>
    </section>

    <!-- CTA -->
    <section
      class="w-full mx-auto space-y-16 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <form class="max-w-3xl px-6 mx-auto text-lg md:text-xl space-y-5">
        <p class="text-gray-darker">Get notified at launch</p>
        <button
          class="px-4 py-3 font-medium text-white rounded shadow hover:bg-opacity-75 transition duration-150 bg-green-dark"
        >
          Sign up
        </button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Index',
}
</script>
