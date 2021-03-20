<template>
  <main class="overflow-hidden space-y-16">
    <!-- HERO -->
    <section
      class="flex flex-col max-w-6xl mx-auto -mb-20 md:flex-row space-y-12 md:space-y-0"
    >
      <div class="px-6 lg:pt-16 space-y-6 md:w-1/2 lg:w-2/3">
        <h1
          class="text-4xl font-semibold leading-tight tracking-tight text-black space-y-2 sm:space-y-0 md:text-5xl"
        >
          Create workout plans that progress
          <span class="text-green-darker">automatically</span>
        </h1>

        <p class="text-lg md:text-xl text-gray-darker">
          No more spreadsheets or notebooks, Mylo manages everything so you can
          focus on training.
        </p>

        <a
          href="https://app.mylo.fit/register"
          class="inline-block px-8 py-3 font-medium rounded shadow-lg focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green text-green-darker"
        >
          Try it now for free
        </a>
      </div>

      <TheHero />
    </section>

    <!-- FEATURES -->
    <section class="max-w-5xl mx-auto space-y-20">
      <article
        class="px-6 md:flex md:flex-row-reverse md:space-x-6 md:space-x-reverse"
      >
        <div class="mb-6 text-lg space-y-5">
          <h2
            class="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            Automatic exercise progression
          </h2>

          <p class="text-gray-darker">
            This isn't just a workout logging app, it’s your personal training
            assistant.
          </p>
          <p class="text-gray-darker">
            Mylo lets you describe how your exercises should progress with
            <span class="font-medium text-green-darker">Exercise Rules</span>.
            This way, you can focus on training and Mylo will take care of the
            rest. Of course, you can always take over.
          </p>
          <p class="font-medium text-green-darker">
            No more second guessing weights or reps.
          </p>

          <a
            href="https://app.mylo.fit/register"
            class="inline-block px-4 py-3 font-medium text-center rounded shadow-lg sm:px-8 focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green text-green-darker"
          >
            Automate your first workout now
          </a>
        </div>

        <div class="relative flex flex-col items-center">
          <img
            src="~/assets/images/sports_icons.svg"
            alt="sports icons"
            width="100%"
            title="Sport Icons"
            class="absolute z-0 max-w-md opacity-75 transform scale-90 -translate-y-10 -translate-x-40 stroke-green"
            loading="lazy"
          />

          <picture>
            <source
              srcset="
                ~/assets/images/exercise-rule.png?webp,
                ~/assets/images/exercise-rule@2x.png?webp 2x
              "
              type="image/webp"
            />
            <img
              alt="Exercise form"
              src="~/assets/images/exercise-rule.png"
              srcset="~/assets/images/exercise-rule@2x.png 2x"
              class="relative shadow-xl max-w-none"
              width="318"
              height="429"
            />
          </picture>
        </div>
      </article>

      <article class="space-y-10">
        <div class="px-6 text-lg space-y-5">
          <h2
            class="text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
          >
            Super flexible workout creation
          </h2>

          <p class="text-gray-darker">
            Saw an awesome exercise in a video? Invented your own? Go ahead and
            create it!
          </p>
          <p class="text-gray-darker">
            Mylo is here to help you, not limit you, so there are almost no
            constraints on the kind of exercises or workouts you can create.
          </p>
          <p class="font-medium text-green-darker">
            Whatever you can think of, Mylo can manage.
          </p>

          <a
            href="https://app.mylo.fit/register"
            class="inline-block px-4 py-3 font-medium rounded shadow-lg sm:px-8 focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 bg-green text-green-darker"
          >
            Start creating your workout plan
          </a>
        </div>

        <div
          class="relative flex justify-center w-full overflow-hidden md:overflow-visible"
        >
          <div class="absolute top-0 left-0 w-full overflow-visible">
            <img
              src="~/assets/images/sports_icons.svg"
              alt="sports_icons"
              title="Sport Icons"
              class="absolute left-0 z-0 stroke-green transform -translate-x-32 translate-y-56 scale-50 rotate-45"
              loading="lazy"
            />

            <img
              src="~/assets/images/sports_icons.svg"
              alt="sports_icons"
              title="Sport Icons"
              class="absolute z-0 pl-12 stroke-green transform translate-x-56 translate-y-16 scale-90"
              loading="lazy"
            />

            <img
              src="~/assets/images/sports_icons.svg"
              alt="sports_icons"
              title="Sport Icons"
              class="absolute top-0 z-0 hidden stroke-green lg:block transform-circle rotate-180"
              loading="lazy"
            />
          </div>

          <div
            class="flex items-end px-12 overflow-auto space-x-12 after scroll-snap-x"
          >
            <div class="z-10 flex-shrink-0 snap-center">
              <picture>
                <source
                  srcset="
                    ~/assets/images/routine-form.png?webp,
                    ~/assets/images/routine-form@2x.png?webp 2x
                  "
                  type="image/webp"
                />
                <img
                  alt="Exercise form"
                  src="~/assets/images/routine-form.png"
                  srcset="~/assets/images/routine-form@2x.png 2x"
                  class="w-56 mb-4 shadow-xl"
                  width="411"
                  height="777"
                  loading="lazy"
                />
              </picture>
              <p class="text-lg text-center text-gray-dark">
                Create your routines
              </p>
            </div>

            <div class="relative flex-shrink-0 snap-center">
              <picture>
                <source
                  srcset="
                    ~/assets/images/workout-form.png?webp,
                    ~/assets/images/workout-form@2x.png?webp 2x
                  "
                  type="image/webp"
                />
                <img
                  alt="Workout form"
                  src="~/assets/images/workout-form.png"
                  srcset="~/assets/images/workout-form@2x.png 2x"
                  class="w-56 mb-4 shadow-xl"
                  width="411"
                  height="825"
                  loading="lazy"
                />
              </picture>
              <p class="text-lg text-center text-gray-dark">
                Organize your workout
              </p>
            </div>

            <div class="relative flex-shrink-0 snap-center">
              <picture>
                <source
                  srcset="
                    ~/assets/images/training.png?webp,
                    ~/assets/images/training@2x.png?webp 2x
                  "
                  type="image/webp"
                />
                <img
                  alt="Screenshot of the training view"
                  src="~/assets/images/training.png"
                  srcset="~/assets/images/training@2x.png 2x"
                  class="w-56 mb-4 shadow-xl"
                  width="411"
                  height="912"
                  loading="lazy"
                />
              </picture>
              <p class="text-lg text-center text-gray-dark">
                Start training!
              </p>
            </div>

            <div class="md:hidden smth">&nbsp;</div>
          </div>
        </div>
      </article>
    </section>

    <!-- Why Mylo -->
    <section
      class="relative w-full overflow-hidden shadow-inner bg-green-darker"
    >
      <img
        class="absolute stroke-green-dark transform -translate-x-48 -rotate-45 -translate-y-24"
        src="~/assets/images/sports_icons.svg"
        alt="sports_icons"
        title="Sport Icons"
        loading="lazy"
      />

      <img
        class="absolute bottom-0 right-0 stroke-green-dark transform translate-y-48 translate-x-32 scale-110 -rotate-90"
        src="~/assets/images/sports_icons.svg"
        alt="sports_icons"
        title="Sport Icons"
        loading="lazy"
      />

      <div class="relative z-10 max-w-5xl px-6 py-8 mx-auto space-y-6">
        <h2
          class="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl"
        >
          Why Mylo?
        </h2>

        <article class="text-lg text-white space-y-5">
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

          <a
            href="https://app.mylo.fit/register"
            class="inline-block px-8 py-3 font-medium bg-white rounded shadow-lg focus:outline-none focus:shadow-outline hover:bg-opacity-75 transition duration-150 text-green-darker"
          >
            Try out Mylo
          </a>
        </article>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Index',
}
</script>

<style>
/* CSS filters to color SVG icons embedded with <img />
 * source: https://codepen.io/sosuke/pen/Pjoqqp
 */
.stroke-green-dark {
  filter: invert(47%) sepia(29%) saturate(403%) hue-rotate(99deg)
    brightness(90%) contrast(83%);
}

.stroke-green {
  filter: invert(91%) sepia(10%) saturate(1436%) hue-rotate(90deg)
    brightness(94%) contrast(93%);
}
/****************************/

.scroll-snap-x {
  scroll-snap-type: x mandatory;
}

.snap-center {
  scroll-snap-align: center;
}

.transform-circle {
  transform: scale(0.5) translate(80rem, -18rem);
}
</style>
