<template>
  <main class="flex flex-col text-indigo-darker gap-32">
    <!-- Hero Section -->
    <section class="flex flex-col px-6 mx-auto max-w-7xl gap-y-6 sm:flex-row sm:items-center">
      <div class="space-y-6 sm:w-1/2">
        <div class="text-center sm:text-left space-y-3 sm:space-y-6">
          <h1 class="text-4xl font-semibold sm:text-6xl">
            Stop exercising without a plan <br /> <span class="text-green-dark">use Mylo</span>
          </h1>

          <p class="max-w-lg text-lg leading-snug text-indigo-light">
            Create and discover workout plans that progress automatically so that you can focus on training.
          </p>
        </div>

        <div class="flex flex-col items-center justify-center sm:flex-row sm:justify-start sm:items-start gap-4">
          <div class="space-y-1">
            <a
              href="https://play.google.com/store/apps/details?id=fit.mylo.app.twa&utm_source=website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                height="88"
                width="224"
                alt="Get it on Google Play"
                class="w-56 pt-px -my-4"
              />
            </a>

            <ul>
              <li class="text-sm text-center text-indigo-light">Free, No Ads, No CC</li>
              <li class="pt-1 text-sm text-center text-indigo"><a href="#iphone-app" class="underline">I have an iPhone</a> 😢</li>
            </ul>
          </div>


          <NuxtLink
            to="/workouts"
            class="px-4 py-2 text-lg font-medium text-indigo-dark bg-indigo-lighter rounded-md focus:outline-none focus:ring-2 ring-green-dark"
          >
            Explore free workouts
          </NuxtLink>
        </div>
      </div>

      <div class="relative flex-grow w-full sm:w-60">
        <div class="overflow-hidden">
          <div
            class="z-0 opacity-40 animate-spin-slow text-green-dark"
            v-html="require('~/assets/images/sports_icons.svg?include')"
          />
        </div>

        <div class="absolute top-0 left-0 z-10 flex justify-center w-full px-4 gap-3">
          <picture>
            <source
              media="(min-width: 640px)"
              srcset="
                /images/schedule-250.png?webp,
                /images/schedule-250@2x.png?webp 2x
              "
              type="image/webp"
            />

            <source
              media="(min-width: 640px)"
              srcset="
                /images/schedule-250.png,
                /images/schedule-250@2x.png 2x
              "
              type="image/png"
            />

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
              alt="Example screenshot of a workout schedule"
              width="160"
              height="320"
              class="w-full rounded-lg shadow-xl"
            />
          </picture>

          <picture>
            <source
              media="(min-width: 640px)"
              srcset="
                /images/training-250.png?webp,
                /images/training-250@2x.png?webp 2x
              "
              type="image/webp"
            />

            <source
              media="(min-width: 640px)"
              srcset="
                /images/training-250.png,
                /images/training-250@2x.png 2x
              "
              type="image/png"
            />

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
              alt="Example screenshot of a workout in progress."
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
              alt="Example names of the workouts you could create: Swimming Practice, Meditation, Fullbody Home Workout, etc."
              width="787"
              height="238"
              class="h-full max-w-none"
              loading="lazy"
            />
          </picture>
        </div>

        <div
          class="z-0 opacity-40 w-96 row-start-1 col-start-1 transform scale-75 text-green-dark sm:w-2/3"
          v-html="require('~/assets/images/sports_icons.svg?include')"
        />
      </div>

      <div class="z-10 w-full space-y-4 sm:w-1/2">
        <h2 class="text-3xl font-semibold">Create every kind of workout</h2>
        <p class="text-lg leading-snug text-indigo-light">There are almost no constraints on the kinds of exercises and workouts you can create.</p>
        <p class="text-lg leading-snug text-indigo-light">Whatever you can think of, Mylo can manage.</p>
      </div>
    </section>

    <section class="relative flex flex-col items-center justify-center max-w-6xl px-6 pt-10 pb-10 mx-auto -mt-10 -mb-10 overflow-hidden sm:items-start gap-8 sm:flex-row-reverse">
      <div class="relative z-0 flex justify-center max-w-sm sm:w-1/2">
        <div
          class="absolute top-0 left-0 z-0 w-full opacity-40 -translate-y-24 transform scale-50 translate-x-48 text-green-dark"
          v-html="require('~/assets/images/sports_icons.svg?include')"
        />

        <div
          class="absolute bottom-0 left-0 z-0 w-full opacity-40 translate-y-20 -translate-x-32 transform scale-75 text-green-dark"
          v-html="require('~/assets/images/sports_icons.svg?include')"
        />

        <picture>
          <source
            srcset="
              /images/exercise_rules.png?webp,
              /images/exercise_rules@2x.png?webp 2x
            "
            type="image/webp"
          />

          <img
            src="/images/exercise_rules.png"
            srcset="/images/exercise_rules@2x.png 2x"
            alt="In Mylo you can add progression rules to exercises such as 'Inrease weights by 5kg every workout.'"
            width="363"
            height="646"
            class="relative z-10 w-full shadow-xl rounded-2xl"
            loading="lazy"
          />
        </picture>
      </div>

      <div class="relative z-10 space-y-4 sm:w-1/2">
        <h2 class="text-3xl font-semibold">Plan once, train forever</h2>
        <p class="text-lg leading-snug text-indigo-light">Add progression rules to your exercises! Watch reps, weights, and more progress automatically as you train.</p>
        <p class="text-lg leading-snug text-indigo-light">Never second-guess your workout again.</p>
      </div>
    </section>

    <section class="flex flex-col items-center justify-center max-w-6xl px-6 pt-12 mx-auto -mt-12 overflow-x-hidden sm:overflow-visible sm:flex-row gap-4 sm:gap-8">
      <div class="relative z-0">
        <div
          class="absolute top-0 left-0 z-0 w-full opacity-40 origin-top-left -translate-x-12 -translate-y-12 transform scale-50 text-green-dark"
          v-html="require('/assets/images/sports_icons.svg?include')"
        />
        <div
          class="absolute bottom-0 left-0 z-0 w-full opacity-40 origin-bottom-right transform scale-25 translate-x-8 translate-y-4 text-green-dark"
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
            alt="You can easily generate a unique link for the workouts you make so that you can share them."
            width="363"
            height="186"
            class="relative z-10 w-full shadow-xl rounded-2xl"
            loading="lazy"
          />
        </picture>
      </div>

      <div class="space-y-4 sm:w-1/2">
        <h2 class="text-3xl font-semibold">Share workouts with anyone</h2>
        <p class="text-lg leading-snug text-indigo-light">Quickly and easily share workouts with friends, gym partners, clients, or anyone (you can make your workout private anytime).</p>
        <p class="text-lg leading-snug text-indigo-light">And with Exercise Rules, you’re sharing dynamic plans that can progress without your supervision.</p>
      </div>
    </section>

    <section class="flex flex-col items-center justify-center max-w-6xl px-6 mx-auto gap-4 sm:gap-8 sm:flex-row-reverse">
      <div class="relative z-0">
        <div
          class="absolute top-0 left-0 w-full opacity-40 transform scale-75 text-green-dark"
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
              src="/images/perfect_workout.png"
              srcset="/images/perfect_workout@2x.png 2x"
              alt="You can find all kinds of workouts made by others for Mylo."
              width="363"
              height="360"
              class="relative z-10 drop-shadow-lg"
              loading="lazy"
            />
          </picture>
        </div>

      <div class="space-y-4 sm:w-1/2">
        <div>
          <h2 class="text-3xl font-semibold">Find your perfect workout</h2>
        </div>
        <p class="text-lg leading-snug text-indigo-light">Every shared workout is available publicly so you can assemble the perfect schedule for you.</p>
        <p class="text-lg leading-snug text-indigo-light">Imagine your own warmup, Arnold’s strength training, Phelp’s swim routine, and Copeland’s cool-down stretches!</p>

        <NuxtLink
          to="/workouts"
          class="self-end inline-block px-3 py-2 font-semibold focus:outline-none focus:ring-2 ring-green-dark text-indigo-dark bg-indigo-lighter rounded-md"
        >
          Explore free workouts
        </NuxtLink>
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
            alt="A set of Mylo logos growing."
            width="363"
            height="178"
            class="relative z-10 w-full"
            loading="lazy"
          />
        </picture>
      </div>

      <div class="space-y-4 sm:w-1/2">
        <h2 class="text-3xl font-semibold">Even more coming soon!</h2>
        <p class="text-lg leading-snug text-indigo-light">There’s still so much more Mylo can do to help you reach your fitness goals and I’m hard at work making this possible.</p>
        <p class="text-lg leading-snug text-indigo-light">Check back regularly to see what gets added!</p>
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
          alt="Profile image of Maximilien Monteil, creator of Mylo"
          height="129"
          width="129"
          class="relative z-10 self-center sm:self-start rounded-2xl"
          loading="lazy"
        />
      </picture>

      <div class="space-y-4 sm:w-1/2">
        <h2 class="self-start text-3xl font-semibold">Why Mylo?</h2>

        <p>Beginner or pro, <span class="font-semibold">it should be as simple as possible to exercise and stick to it.</span></p>
        <p>With other apps you still have to manually log your session and then calculate reps, weights, and more for next time. What a hassle!</p>
        <p>I think your workout app should be more like an assistant and less like a digital notebook, it should handle all this stuff and <span class="font-semibold">let you focus on training.</span></p>
        <p class="font-semibold">I’m building Mylo to help anyone find or create the perfect workout to help them reach their health goals.</p>
        <p class="self-start text-green-dark">- Maximilien Monteil</p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="flex flex-col items-center w-full max-w-6xl px-6 mx-auto overflow-hidden text-lg text-indigo sm:overflow-visible gap-4">
      <h2 class="w-full text-3xl font-semibold text-indigo-darker">Frequently Asked Questions</h2>

      <ul class="w-full space-y-8">
        <li>
          <h3 id="iphone-app" class="mb-2 text-xl font-semibold text-indigo-darker">Is there an iPhone app?</h3>
          <p>There isn't a native iPhone app just yet but you can still add Mylo to your homescreen in 3 steps:</p>
          <ol class="mt-2 ml-5 list-decimal">
            <li>Go to the app page (<a href="https://app.mylo.fit" class="underline text-green-darker">app.mylo.fit</a>) with Safari</li>
            <li>Tap '<span class="font-semibold">Share</span>'</li>
            <li>Scroll down and tap '<span class="font-semibold">Add to Home Screen</span>'</li>
          </ol>
        </li>

        <li class="space-y-2">
          <h3 class="text-xl font-semibold text-indigo-darker">Is there a way to find workouts?</h3>
          <p>Right now there is the <NuxtLink to="/workouts" class="underline text-green-dark">Free Workouts</NuxtLink> page where you can search for workouts.</p>
          <p>I've added some workouts to the recommended section to help you get started as a beginner, if you have no equipment, or to see the kind of workouts you can create with Mylo. The other section has all the public workouts created by the community.</p>
          <p>You can also add workouts there by sharing the ones you make!</p>
        </li>

        <li class="space-y-2">
          <h3 class="text-xl font-semibold text-indigo-darker">How can I see my previous workouts?</h3>
          <p>Mylo doesn't store your workout history yet. It is a highly requested feature and I'm working to add it soon.</p>
          <p>You can stay up to date with development progress by checking out the <a href="https://mylofit.notion.site/Mylo-s-Public-Roadmap-73b68f5099b142ddbce635f18e7c922e" class="underline text-green-darker">Public Roadmap</a>. You can even leave comments there!</p>
        </li>

        <li>
          <h3 class="mb-2 text-xl font-semibold text-indigo-darker">I have a feature idea!</h3>
          <p>If you have ideas for new features, encounter a bug, or just want to send me a message, you can reach  me by email here: <a href="mailto:contact@mylo.fit" class="underline text-green-darker">contact@mylo.fit</a>, on Twitter <a href="https://www.twitter.com/MyloApp" class="underline text-green-darker">@MyloApp</a>, and on Instagram at <a href="https://instagram.com/mylo.app" class="underline text-green-darker">mylo.app</a>.</p>
        </li>

        <li class="space-y-2">
          <h3 class="text-xl font-semibold text-indigo-darker">Is there somewhere we can donate to ensure future support / updates?</h3>
          <p>Thank you so much for wanting to donate and support me, I really appreciate it!</p>
          <p>Right now the app is completely free as I continue developing and adding what I believe to be 'core' features. Once those are added I will include some monetization methods (note that I never want to have ads). For now the app and userbase is still rather small so there aren't many costs.</p>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.drop-shadow-lg {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.05));
}
</style>
