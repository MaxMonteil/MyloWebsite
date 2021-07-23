<template>
  <main class="space-y-32">
    <!-- Hero Section -->
    <section class="px-6 space-y-6">
      <div class="text-center space-y-3">
        <h1 class="text-4xl font-semibold">
          Stop exercising without a plan <br /> <span class="text-green-dark">use Mylo</span>
        </h1>

        <p class="text-lg leading-snug text-gray-darker">
          Mylo helps you create and discover workout plans that progress automatically so you can focus on training.
        </p>
      </div>

      <div class="flex items-start justify-between">
        <div class="space-y-2">
          <a
              href="https://app.mylo.fit/register"
              class="inline-block px-3 py-2 font-semibold text-white bg-green-dark rounded-md"
              >
              Start making a plan
          </a>

          <ul class="ml-6 text-sm list-disc text-gray-dark">
            <li>Completely Free</li>
            <li>No Credit Card Required</li>
          </ul>
        </div>

        <NuxtLink
          to="/free-workouts"
          class="px-3 py-2 font-semibold text-indigo-dark bg-indigo-lighter rounded-md"
        >
          See free workouts
        </NuxtLink>
      </div>

      <div>
        <p>images</p>
      </div>
    </section>

    <!-- Features -->
    <section class="px-6 space-y-4">
      <h2 class="text-3xl font-semibold">Create every kind of workout</h2>
      <p class="text-lg leading-snug text-gray-darker">There are almost no constraints on the kinds of exercises and workouts you can create.</p>
      <p class="text-lg leading-snug text-gray-darker">Whatever you can think of, Mylo can manage.</p>
    </section>

    <section class="px-6 space-y-4">
      <h2 class="text-3xl font-semibold">Plan once, train forever</h2>
      <p class="text-lg leading-snug text-gray-darker">Add progression rules to your exercises! Watch reps, weights, and more progress automatically as you train.</p>
      <p class="text-lg leading-snug text-gray-darker">Never second-guess your workout again.</p>
    </section>

    <section class="px-6 space-y-4">
      <h2 class="text-3xl font-semibold">Share workouts with anyone</h2>
      <p class="text-lg leading-snug text-gray-darker">Quickly and easily share workouts with friends, gym partners, clients, or anyone (you can make your workout private anytime).</p>
      <p class="text-lg leading-snug text-gray-darker">And with Exercise Rules, you’re sharing dynamic plans that can progress without your supervision.</p>
    </section>

    <section class="flex flex-col px-6 space-y-4">
      <h2 class="text-3xl font-semibold">Find your perfect workout</h2>
      <p class="text-lg leading-snug text-gray-darker">Every shared workout is available publicly so you can assemble the perfect schedule for you.</p>
      <p class="text-lg leading-snug text-gray-darker">Imagine your own warmup, Arnold’s strength training, Phelp’s swim routine, and Copeland’s cool-down stretches!</p>

      <NuxtLink
        to="/free-workouts"
        class="self-end inline-block px-3 py-2 font-semibold text-indigo-dark bg-indigo-lighter rounded-md"
      >
        See free workouts
      </NuxtLink>
    </section>

    <section class="px-6 space-y-4">
      <h2 class="text-3xl font-semibold">More coming soon!</h2>
      <p class="text-lg leading-snug text-gray-darker">There’s still so much more Mylo can do to help you reach your fitness goals and I’m hard at work making this possible.</p>
      <p class="text-lg leading-snug text-gray-darker">Check back regularly to see what gets added!</p>
    </section>

    <!-- Why Mylo -->
    <section class="flex flex-col items-center p-6 text-lg bg-green-lighter space-y-4 bg-opacity-25 text-green-darkest">
      <div class="w-32 h-32 rounded-xl bg-green-dark"></div>

      <h2 class="self-start text-3xl font-semibold">Why Mylo?</h2>

      <p>Beginner or a pro, <span class="font-semibold">it should be as simple as possible to exercise and stick to it.</span></p>
      <p>With other apps you still have to manually log your session and then calculate reps, weights, and more for next time.</p>
      <p>I think your workout app should be more like an assistant and less like a digital notebook, it should handle all this stuff and <span class="font-semibold">let you focus on training.</span></p>
      <p class="font-semibold">I’m building Mylo to help anyone can find or create the perfect workout to help them reach their health goals.</p>
      <p class="self-start text-green-dark">- Maximilien Monteil</p>
    </section>
  </main>
</template>

<script>
export default {}
</script>
