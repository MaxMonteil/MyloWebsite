<template>
  <main class="flex flex-col gap-32">
    <!-- Hero Section -->
    <section class="flex flex-col max-w-6xl px-6 mx-auto gap-6 sm:flex-row sm:items-center">
      <div class="space-y-6 sm:w-1/2">
        <div class="text-center sm:text-left space-y-3 sm:space-y-6">
          <h1 class="text-4xl font-semibold sm:text-6xl">
            Stop exercising without a plan <br /> <span class="text-green-dark">use Mylo</span>
          </h1>

          <p class="max-w-lg text-lg leading-snug text-gray-darker">
            Mylo helps you create and discover workout plans that progress automatically so you can focus on training.
          </p>
        </div>

        <div class="flex items-start justify-center sm:justify-start gap-4">
          <div class="space-y-1">
            <a
                href="https://app.mylo.fit/register"
                class="inline-block px-6 py-2 text-lg font-medium text-white rounded-md bg-green-dark"
                >
                Make a plan!
            </a>

            <p class="text-sm text-center text-gray-darker">Completely Free</p>
          </div>

          <!-- <NuxtLink -->
          <!--   to="/free-workouts" -->
          <!--   class="px-4 py-2 text-lg font-medium text-indigo-dark bg-indigo-lighter rounded-md" -->
          <!-- > -->
          <!--   See free workouts -->
          <!-- </NuxtLink> -->
        </div>
      </div>

      <div class="relative w-full sm:w-1/2">
        <div class="overflow-hidden">
          <div
            class="z-0 opacity-60 motion-safe:animate-spin-slow text-green-dark"
            v-html="require('~/assets/images/sports_icons.svg?include')"
          />
        </div>

        <div class="absolute top-0 left-0 z-10 flex justify-between w-full px-4 gap-3">
          <picture>
            <source
              srcset="
                /images/schedule.png?webp,
                /images/schedule@2x.png?webp 2x
              "
              type="image/webp"
            />

            <img
              src="/images/schedule.png"
              srcset="/images/schedule@2x.png 2x"
              width="160"
              height="320"
              class="w-full rounded-lg shadow-xl"
            />
          </picture>

          <picture>
            <source
              srcset="
                /images/training.png?webp,
                /images/training@2x.png?webp 2x
              "
              type="image/webp"
            />

            <img
              src="/images/training.png"
              srcset="/images/training@2x.png 2x"
              width="160"
              height="320"
              class="w-full rounded-lg shadow-xl transform translate-y-8"
            />
          </picture>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="flex flex-col items-center max-w-6xl px-6 mx-auto overflow-hidden sm:overflow-visible align-center gap-4 sm:flex-row sm:gap-8">
      <div class="z-0 items-center justify-items-center grid grid-cols-1">
        <div class="z-10 sm:justify-self-end row-start-1 col-start-1">
          <picture>
            <source
              srcset="
                /images/kinds_of_workouts.png?webp,
                /images/kinds_of_workouts@2x.png?webp 2x
              "
              type="image/webp"
            />

            <img
              src="/images/kinds_of_workouts.png"
              srcset="/images/kinds_of_workouts@2x.png 2x"
              width="787"
              height="238"
              class="h-full max-w-none"
              loading="lazy"
            />
          </picture>
        </div>

        <div
          class="z-0 opacity-60 w-96 row-start-1 col-start-1 transform scale-75 text-green-dark sm:w-2/3"
          v-html="require('~/assets/images/sports_icons.svg?include')"
          />
      </div>

      <div class="z-10 w-full space-y-4 sm:w-1/2">
        <h2 class="text-3xl font-semibold">Create every kind of workout</h2>
        <p class="text-lg leading-snug text-gray-darker">There are almost no constraints on the kinds of exercises and workouts you can create.</p>
        <p class="text-lg leading-snug text-gray-darker">Whatever you can think of, Mylo can manage.</p>
      </div>
    </section>

    <section class="relative flex flex-col items-center justify-center max-w-6xl px-6 pt-10 mx-auto -mt-10 overflow-x-hidden sm:items-start sm:overflow-visible gap-8 sm:flex-row-reverse">
      <div class="relative z-0 flex justify-center max-w-sm sm:w-1/2">
        <div
          class="absolute top-0 left-0 z-0 w-full opacity-60 -translate-y-24 transform scale-50 translate-x-48 text-green-dark"
          v-html="require('~/assets/images/sports_icons.svg?include')"
        />

        <div
          class="absolute bottom-0 left-0 z-0 w-full opacity-60 translate-y-20 -translate-x-32 transform scale-75 text-green-dark"
          v-html="require('~/assets/images/sports_icons.svg?include')"
        />

        <img
          src="/images/exercise_rules.png"
          width="331"
          height="589"
          class="relative z-10 w-full shadow-xl rounded-2xl"
          loading="lazy"
        />
      </div>

      <div class="relative z-10 space-y-4 sm:w-1/2">
        <h2 class="text-3xl font-semibold">Plan once, train forever</h2>
        <p class="text-lg leading-snug text-gray-darker">Add progression rules to your exercises! Watch reps, weights, and more progress automatically as you train.</p>
        <p class="text-lg leading-snug text-gray-darker">Never second-guess your workout again.</p>
      </div>
    </section>

    <section class="flex flex-col items-center justify-center max-w-6xl px-6 pt-12 mx-auto -mt-12 overflow-x-hidden sm:overflow-visible sm:flex-row gap-4 sm:gap-8">
      <div class="relative z-0">
        <div
          class="absolute top-0 left-0 z-0 w-full opacity-60 origin-top-left -translate-x-12 -translate-y-12 transform scale-50 text-green-dark"
          v-html="require('/assets/images/sports_icons.svg?include')"
        />
        <div
          class="absolute bottom-0 left-0 z-0 w-full opacity-60 origin-bottom-right transform scale-25 translate-x-8 translate-y-4 text-green-dark"
          v-html="require('/assets/images/sports_icons.svg?include')"
        />

        <picture>
          <source
            srcset="
              /images/share_workout.png?webp,
              /images/share_workout@2x.png?webp 2x
            "
            type="image/webp"
          />

          <img
            src="/images/share_workout.png"
            srcset="/images/share_workout@2x.png 2x"
            width="363"
            height="186"
            class="relative z-10 w-full shadow-xl rounded-2xl"
            loading="lazy"
          />
        </picture>
      </div>

      <div class="space-y-4 sm:w-1/2">
        <h2 class="text-3xl font-semibold">Share workouts with anyone</h2>
        <p class="text-lg leading-snug text-gray-darker">Quickly and easily share workouts with friends, gym partners, clients, or anyone (you can make your workout private anytime).</p>
        <p class="text-lg leading-snug text-gray-darker">And with Exercise Rules, you’re sharing dynamic plans that can progress without your supervision.</p>
      </div>
    </section>

    <section class="flex flex-col items-center justify-center max-w-6xl px-6 mx-auto gap-4 sm:gap-8 sm:flex-row-reverse">
      <div class="relative z-0">
        <div
          class="absolute top-0 left-0 w-full opacity-60 transform scale-75 text-green-dark"
          v-html="require('/assets/images/sports_icons.svg?include')"
        />

          <picture>
            <source
              srcset="
                /images/perfect_workout.png?webp,
                /images/perfect_workout@2x.png?webp 2x
              "
              type="image/webp"
            />

            <img
              alt="examples of workouts"
              src="/images/perfect_workout.png"
              srcset="/images/perfect_workout@2x.png 2x"
              width="363"
              height="360"
              class="relative z-10"
              loading="lazy"
            />
          </picture>
        </div>

      <div class="space-y-4 sm:w-1/2">
        <div>
          <p class="text-base text-yellow-dark">Coming Soon!</p>
          <h2 class="text-3xl font-semibold">Find your perfect workout</h2>
        </div>
        <p class="text-lg leading-snug text-gray-darker">Every shared workout is available publicly so you can assemble the perfect schedule for you.</p>
        <p class="text-lg leading-snug text-gray-darker">Imagine your own warmup, Arnold’s strength training, Phelp’s swim routine, and Copeland’s cool-down stretches!</p>

        <!-- <NuxtLink -->
        <!--   to="/free-workouts" -->
        <!--   class="self-end inline-block px-3 py-2 font-semibold text-indigo-dark bg-indigo-lighter rounded-md" -->
        <!-- > -->
        <!--   See free workouts -->
        <!-- </NuxtLink> -->
      </div>
    </section>

    <section class="flex flex-col items-center justify-center max-w-6xl px-6 mx-auto gap-4 sm:gap-8 sm:flex-row">
      <div class="relative z-0">
        <picture>
          <source
            srcset="
              /images/coming_soon.png?webp,
              /images/coming_soon@2x.png?webp 2x
            "
            type="image/webp"
          />

          <img
            src="/images/coming_soon.png"
            srcset="/images/coming_soon@2x.png 2x"
            width="363"
            height="178"
            class="relative z-10 w-full"
            loading="lazy"
          />
        </picture>
      </div>

      <div class="space-y-4 sm:w-1/2">
        <h2 class="text-3xl font-semibold">Even more coming soon!</h2>
        <p class="text-lg leading-snug text-gray-darker">There’s still so much more Mylo can do to help you reach your fitness goals and I’m hard at work making this possible.</p>
        <p class="text-lg leading-snug text-gray-darker">Check back regularly to see what gets added!</p>
      </div>
    </section>

    <!-- Why Mylo -->
    <section class="flex flex-col items-start justify-center p-6 text-lg sm:flex-row-reverse bg-green-lighter gap-4 sm:gap-12 bg-opacity-25 text-green-darkest">
      <picture>
        <source
          srcset="
            /images/maximilien.png?webp,
            /images/maximilien@2x.png?webp 2x
          "
          type="image/webp"
        />

        <img
          src="/images/maximilien.png"
          srcset="/images/maximilien@2x.png 2x"
          class="relative z-10 self-center sm:self-start rounded-2xl"
          loading="lazy"
        />
      </picture>

      <div class="space-y-4 sm:w-1/2">
        <h2 class="self-start text-3xl font-semibold">Why Mylo?</h2>

        <p>Beginner or a pro, <span class="font-semibold">it should be as simple as possible to exercise and stick to it.</span></p>
        <p>With other apps you still have to manually log your session and then calculate reps, weights, and more for next time.</p>
        <p>I think your workout app should be more like an assistant and less like a digital notebook, it should handle all this stuff and <span class="font-semibold">let you focus on training.</span></p>
        <p class="font-semibold">I’m building Mylo to help anyone can find or create the perfect workout to help them reach their health goals.</p>
        <p class="self-start text-green-dark">- Maximilien Monteil</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>
