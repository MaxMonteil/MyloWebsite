<template>
  <main class="space-y-16">
    <!-- HERO -->
    <section
      class="relative w-full py-16 mx-auto -my-16 overflow-hidden sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <SportIcons
        class="absolute z-0 px-6 -mt-12 opacity-50"
        fill="white"
        stroke="gray"
      />
      <div class="relative z-10 px-6 md:text-center space-y-5">
        <h1
          class="text-4xl font-semibold leading-tight tracking-tight text-black space-y-2 sm:space-y-0 md:text-5xl"
        >
          <span>Stay focused on getting</span>
          <span
            class="inline-block px-3 py-1 rounded text-green bg-green-darker"
          >
            stronger
          </span>
        </h1>

        <p class="mx-auto text-lg md:text-xl text-gray-darker">
          Let Mylo automatically update your workouts so you can focus on what
          matters.
          <br />
          Currently in beta, launching soon.
        </p>

        <form class="max-w-3xl mx-auto md:text-xl space-y-5">
          <button
            class="px-4 py-3 font-medium text-white rounded shadow focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green-dark"
          >
            Notify me
          </button>
        </form>
      </div>
    </section>

    <!-- Why Mylo -->
    <section
      class="relative w-full overflow-hidden shadow-inner bg-green-darker"
    >
      <SportIcons
        class="absolute left-0 z-0 w-2/4 max-w-2xl px-6 -mt-32 opacity-50 transform rotate-45"
        fill="green-darker"
        stroke="green-dark"
      />

      <SportIcons
        class="absolute bottom-0 right-0 z-0 w-2/3 max-w-lg px-6 -mb-32 opacity-50 transform -rotate-90 md:w-1/3"
        fill="green-darker"
        stroke="green-dark"
      />
      <div class="relative z-10 max-w-3xl px-6 py-8 mx-auto md:px-0 space-y-6">
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
          class="p-3 font-medium rounded shadow focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green text-green-darker"
        >
          Join the launch list
        </button>
      </div>
    </section>

    <!-- FEATURES -->
    <section
      class="w-full px-6 mx-auto md:px-0 space-y-16 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <article class="max-w-3xl mx-auto text-lg md:text-xl space-y-5">
        <h2
          class="mb-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
        >
          Super flexible workout creation
        </h2>

        <p class="text-gray-darker">
          Saw an awesome exercise in a video? Invented your own?
        </p>
        <p class="text-gray-darker">
          Mylo is here to help you not limit you, so there are almost no
          constraints on the kind of exercises or workouts you can create.
        </p>
        <p class="font-medium text-green-darker">
          Whatever you can think of, Mylo can manage.
        </p>

        <div
          class="flex items-center px-16 py-16 overflow-x-scroll md:py-0 md:px-0 md:justify-between md:overflow-x-visible snap-x md:space-x-0 space-x-16"
        >
          <div class="relative snap-center">
            <SportIcons
              class="absolute bottom-0 z-0 opacity-75 circle-1"
              fill="white"
              stroke="green"
            />

            <img
              class="relative z-10 mb-4 shadow-xl"
              src="~/assets/images/routine_form.png"
              alt="Exercise form"
            />
            <p class="relative z-10 text-lg text-center w text-gray-dark">
              Make any exercise and organize them in routines
            </p>
          </div>

          <div class="relative snap-center">
            <SportIcons
              class="absolute top-0 z-0 w-3/4 opacity-75 circle-2"
              fill="white"
              stroke="green"
            />
            <SportIcons
              class="absolute bottom-0 right-0 z-0 w-5/6 opacity-75 circle-3"
              fill="white"
              stroke="green"
            />

            <img
              class="relative z-10 mb-4 shadow-xl"
              src="~/assets/images/workout_form.png"
              alt="Workout form"
            />
            <p class="relative z-10 text-lg text-center w text-gray-dark">
              Organize them into a workout plan
            </p>
          </div>

          <div class="relative pr-16 md:pr-0 snap-center">
            <SportIcons
              class="absolute top-0 right-0 z-0 w-3/4 opacity-75 circle-4"
              fill="white"
              stroke="green"
            />

            <img
              class="relative z-10 mb-4 shadow-xl"
              src="~/assets/images/training.png"
              alt="Screenshot of the training view"
            />
            <p class="relative z-10 text-lg text-center w text-gray-dark">
              Start training!
            </p>
          </div>
        </div>
      </article>

      <article
        class="max-w-3xl mx-auto text-lg md:grid md:gap-3 md:grid-cols-2 md:text-xl space-y-5"
      >
        <div class="space-y-5">
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
        </div>

        <div class="relative flex items-center justify-center">
          <SportIcons
            class="relative z-0 max-w-md opacity-75"
            fill="white"
            stroke="green"
          />
          <div class="absolute z-10 flex items-center justify-center">
            <img
              class="shadow-lg exercise-form"
              src="~/assets/images/exercise_form.png"
              alt="Exercise form"
            />
            <img
              class="z-20 shadow-xl exercise-rules"
              src="~/assets/images/exercise_rules.png"
              alt="Exercise rules"
            />
          </div>
        </div>
      </article>
    </section>

    <!-- CTA -->
    <section
      class="w-full mx-auto space-y-16 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <form class="max-w-3xl px-6 mx-auto md:px-0 md:text-xl space-y-5">
        <p class="text-lg md:text-xl text-gray-darker">
          Get notified at launch
        </p>
        <button
          class="px-4 py-3 font-medium text-white rounded shadow focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green-dark"
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

<style scoped>
.circle-1 {
  transform: translate(-50%, -20%);
}

.circle-2 {
  transform: translate(-60%, -20%) rotate(120deg);
}

.circle-3 {
  transform: translate(80%, -15%) rotate(-105deg);
}

.circle-4 {
  transform: translate(0%, -30%) rotate(15deg);
}

.w {
  width: 222px;
}

.snap-x {
  scroll-snap-type: x mandatory;
}

.snap-center {
  scroll-snap-align: center;
}

.exercise-form {
  transform: translateX(45px);
}

.exercise-rules {
  transform: translateX(-45px);
}
</style>
