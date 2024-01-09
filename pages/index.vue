<template>
  <main id="top">
    <div class="px-5 header-bg">
      <header class="max-w-screen-lg mx-auto pb-14 pt-32 md:pt-28 flex flex-col gap-5">
        <h1 class="text-5xl">
          <span class="block text-green-50 font-semibold leading-[105%] tracking-[-2.88px]">Craft, manage, and track</span>
          <span class="block leading-[105%] tracking-[-0.48px] text-white font-black">literally any training plan</span>
        </h1>

        <h2 class="text-green-50 text-lg leading-6 max-w-[620px]">
          Mylo gives you the freedom to train to your limits, not your app's. <br>
          Create, follow, and adapt any training – from gym routines to yoga sequences – all in one seamless, intuitive app. And it's completely free!
        </h2>

        <div class="flex gap-4">
          <button class="shadow-md bg-white py-[10px] px-6 rounded-md self-start text-green-700 font-medium">
            Start Training
          </button>

          <a
            href="https://play.google.com/store/apps/details?id=fit.mylo.app.twa"
            class="shadow-md flex gap-2 items-center bg-green-700 py-[10px] px-6 rounded-md self-start text-white font-medium"
          >
            <GooglePlaySvg class="w-6 h-6" />
            Get it on Google Play
          </a>
        </div>
      </header>
    </div>

    <section class="flex flex-col items-center p-5 gap-5 md:p-10 md:gap-10 max-w-screen-lg mx-auto">
      <TestimonialsSection />
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 items-start max-w-screen-lg mx-auto p-5 md:p-10 gap-8">
      <BaseCard theme="green">
        <template #title>
          Unlimited custom exercises
        </template>

        <template #content>
          <p>In Mylo you can create any exercise you want with support for rep, time, and distance based moves.</p>
        </template>

        <template #media>
          <div class="relative">
            <span class="absolute bg-green-400 text-green-800 px-2 py-1 rounded font-medium right-0 transform rotate-12 -translate-y-3 shadow-md translate-x-2">Try it out!</span>
            <ExerciseForm />
          </div>
        </template>
      </BaseCard>

      <BaseCard theme="yellow">
        <template #title>
          Own your schedule
        </template>

        <template #content>
          <p>All your workout plans get organized into your own tailored schedule.</p>
          <p>No second guessing today's plan.</p>
        </template>

        <template #media>
          <HomeSchedule />
        </template>
      </BaseCard>

      <BaseCard theme="blue">
        <template #title>
          Limitless workouts
        </template>

        <template #content>
          Craft as many workout plans as you want. Organize your exercises into month long plans or repeating weekly schedules.
        </template>

        <template #media>
          <div class="limitless-workouts py-2 relative h-[191px] overflow-clip">
            <div class="parallax w-full flex flex-col gap-2">
              <WorkoutItem
                times="3"
                count="5"
              >
                Stronglifts 5x5
              </WorkoutItem>

              <WorkoutItem
                times="3"
                count="8"
              >
                Boxing Practice
              </WorkoutItem>

              <WorkoutItem
                times="5"
                count="5"
              >
                Yoga Flow
              </WorkoutItem>

              <WorkoutItem
                times="2"
                count="3"
              >
                Swimming Class
              </WorkoutItem>

              <WorkoutItem
                times="7"
                count="12"
              >
                Starting Flexibility
              </WorkoutItem>

              <WorkoutItem times="7">
                Daily Walks
              </WorkoutItem>
            </div>
          </div>
        </template>
      </BaseCard>

      <MinorCard>
        <template #title>
          Custom workout timers
        </template>

        <template #content>
          <p>Set custom timers per exercise that automatically start when you finish a set.</p>
          <p>There’s even a setup countdown to give you time to get into position.</p>
        </template>
      </MinorCard>

      <MinorCard>
        <template #title>
          Edit anything, anytime
        </template>

        <template #content>
          <p>You can edit the workouts you create or download, even in the middle of training.</p>
          <p>If something feels limiting, let me know!</p>
        </template>
      </MinorCard>

      <BaseCard theme="red">
        <template #title>
          Automatic progressions
        </template>

        <template #content>
          <p>Exercise Rules let you intuitively define automatic progressions for any exercises.</p>
          <p>You can always change the values, even while training.</p>
        </template>
      </BaseCard>

      <BaseCard>
        <template #title>
          Share workouts freely
        </template>

        <template #content>
          <p>
            Every workout plan is shareable with a link!
            Easily share your workouts with friends, clients, or a community.
          </p>
          <p>Since this is Mylo, you’re free to edit downloaded workouts however you want.</p>
        </template>
      </BaseCard>

      <MinorCard>
        <template #title>
          Clean &amp; intuitive UI
        </template>

        <template #content>
          <p>The pursuit of flexibility is core to Mylo. But adding options can complicate interfaces.</p>
          <p>Every change is thoughtfully included to keep things intuitive, clean, and beautiful.</p>
        </template>
      </MinorCard>

      <!-- <BaseCard> -->
      <!--   <template #title> -->
      <!--     Looking for a plan? -->
      <!--   </template> -->
      <!--  -->
      <!--   <template #content> -->
      <!--     Reliably finding good workout plans can be a huge pain and once you do, you -->
      <!--     still have to make sense of them. -->
      <!--     <br><br> -->
      <!--     Mylo comes with free workouts you can follow right away or edit to suit your -->
      <!--     needs. They all have exercise rules so all you need to do is show up and follow -->
      <!--     the plan. -->
      <!--     <br><br> -->
      <!--  -->
      <!--     <NuxtLink -->
      <!--       to="/free-plans" -->
      <!--       class="inline-block px-6 py-3 font-medium text-green-700 rounded-lg md:text-xl md:px-8 leading-5 bg-green-50" -->
      <!--     > -->
      <!--       Explore free plans -->
      <!--     </NuxtLink> -->
      <!--   </template> -->
      <!-- </BaseCard> -->
    </section>

    <section class="bg-gray-50 flex flex-col items-center gap-5 p-5 mt-12 md:gap-10">
      <MinorCard>
        <template #title>
          Free. No Ads.
        </template>

        <template #content>
          <p>This a personal project of mine and is completely free to use. There are no ads and I don’t care to track you.</p>
          <p>Mylo will always be free to use, but I do plan to add more features and value behind a paid tier.</p>
        </template>
      </MinorCard>
    </section>

    <section class="flex flex-col items-center p-5 gap-5 md:p-10 md:gap-10">
      <AboutSection />
      <SocialLinksSection />
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.header-bg {
  --green-700: #155635;

  background:
    radial-gradient(
      100vw 50vw at 80% 85%,
      rgba(17, 60, 43, 0.80) 0%,
      rgba(21, 86, 53, 0.00) 100%
    ),
    radial-gradient(
      100vw 72vw at 25% 25%,
      rgba(96, 211, 146, 0.80) 0%,
      rgba(153, 226, 169, 0.00) 100%
    ),
    var(--green-700)
  ;
}

@keyframes parallax {
  to {
    transform: translateY(-250px);
  }
}

.limitless-workouts {
  view-timeline-name: --workout-scroll;

  mask-image: linear-gradient(
    transparent,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.parallax {
  animation: parallax linear;
  animation-range-start: 200px;
  animation-timeline: --workout-scroll;
}
</style>
