<template>
  <nav class="px-5 py-2.5 bg-green-200">
    <ul class="flex items-center justify-between text-sm text-green-800">
      <li class="text-green-800"><LogoSvg width="40" height="40" /></li>
      <li><NuxtLink to="/free-plans">Free plans</NuxtLink></li>
      <li><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li>
        <NuxtLink
          to="https://app.mylo.fit"
          class="px-4 py-2 font-medium text-green-900 bg-green-300 rounded-lg leading-4"
        >
          Start training
        </NuxtLink>
      </li>
    </ul>
  </nav>

  <main>
    <header class="p-5 bg-green-200 rounded-b-3xl">
      <h1 class="text-[40px] font-black text-green-500 leading-10">
        <span class="block">Plan once</span>
        <span class="block italic font-black text-green-900">Progress forever</span>
      </h1>

      <h2 class="mt-2 text-green-900 leading-6">
        Mylo is the most flexible workout tool ever. Craft your plan and forget about all the management.
      </h2>

      <div class="flex mt-6 gap-4">
        <NuxtLink
          to="https://app.mylo.fit"
          class="px-6 py-3 font-medium text-center text-green-900 bg-green-300 rounded-lg shadow-md leading-5 grow"
        >
          Start training
        </NuxtLink>

        <NuxtLink
          to=/free-plans
          class="px-6 py-3 font-medium text-green-700 rounded-lg leading-5 bg-green-50"
        >
          Explore free plans
        </NuxtLink>
      </div>

      <div id="hero" class="mt-10">
        <ScheduleSvg class="shadow-lg schedule" />
        <ReportSvg class="shadow-lg report" />
        <NuxtImg preload src="/weightlifting.png" width="374" class="shadow-2xl rounded-xl image" />
      </div>
    </header>

    <section class="flex flex-col items-center p-5 gap-5">
      <article class="flex flex-col px-5 py-10">
        <h2 class="text-sm font-medium tracking-wider text-gray-900 uppercase">What athletes are saying</h2>

        <ol class="flex overflow-x-scroll snap-x snap-mandatory gap-4">
          <li class="w-full mt-2 leading-loose text-gray-800 shrink-0 snap-center carousel-item">
            “I don’t have to think about what I’m doing in the gym, the app knows how many reps, what weight
            and what exercise I need to do.”
          </li>

          <li class="w-full mt-2 leading-loose text-gray-800 shrink-0 snap-center">
            “Keeps track of my workouts and being reminder that I have to workout. It motivates me.”
          </li>

          <li class="w-full mt-2 leading-loose text-gray-800 shrink-0 snap-center">
            “Most other apps have presets you can only customise to a certain degree (or not at all) before
            you hit a paywall which makes them unusable to me or they contain tons of ads.”
          </li>

          <li class="w-full mt-2 leading-loose text-gray-800 shrink-0 snap-center">
            “It offers basically as much customisability as an excel sheet with the functionality of an app.”
          </li>
        </ol>
      </article>

      <ColoredArticle
        bg="bg-blue-200"
        heading="text-blue-900"
        text="text-blue-800"
        img="bg-blue-100 h-[400px]"
      >
        <template #subheading>
          Crafting
        </template>

        <template #heading>
          Craft your workout exactly.
        </template>

        <template #body>
          Do everything paper and spreadsheets can plus everything they can’t.
          <br /> <br />
          Bring your own rep, distance, and time based exercises. Create plans
          that repeat every day or lasts 15 weeks!
          <br /> <br />
          It’s all supported.
        </template>
      </ColoredArticle>

      <TextArticle>
        <template #subheading>
          Sharing
        </template>

        <template #heading>
          Plan for you and others.
        </template>

        <template #body>
          You can publish all the workout plans you create and share the link with anyone. With
          exercise rules, it’s a fully featured plan you can follow right away.
          <br /> <br />
          The best part is you can still edit downloaded plans!
        </template>
      </TextArticle>

      <ColoredArticle
        bg="bg-yellow-200"
        heading="text-yellow-900"
        text="text-yellow-800"
        img="bg-yellow-100 h-[220px]"
      >
        <template #subheading>
          Progressions
        </template>

        <template #heading>
          Plan once, train forever.
        </template>

        <template #body>
          A proper workout varies in frequency, weights, reps, and intensity. With exercise
          rules, Mylo can manage all that for you automatically.
          <br /> <br />
          Of course, you’re always in control and can make your own changes anytime.
        </template>
      </ColoredArticle>

      <TextArticle>
        <template #subheading>
          Pricing
        </template>

        <template #heading>
          Free, no catch.
        </template>

        <template #body>
          This a personal project of mine and is completely free to use. There are no ads and
          I don’t care to track you.
          <br /> <br />
          Mylo will always be free to use, but I do plan to eventually add more features and
          value behind a paid tier.
        </template>
      </TextArticle>

      <ColoredArticle
        bg="bg-red-200"
        heading="text-red-900"
        text="text-red-800"
        img="bg-red-100 h-[340px]"
      >
        <template #subheading>
          Scheduling
        </template>

        <template #heading>
          Beyond working out.
        </template>

        <template #body>
          Mylo’s plans are so flexible you can add meditation routines, swimming practice,
          physio sessions, and more to your schedule.
        </template>
      </ColoredArticle>

      <article class="px-5 py-10 text-gray-800">
        <div class="w-32 h-32 bg-gray-700 rounded-2xl"></div>

        <h2 class="mt-5 text-2xl font-black">
          Why Mylo?
        </h2>

        <p class="mt-2">
          I wanted something more than just a digital notebook. Something smart enough
          to handle all the management so that I can focus on training.
          <br /> <br />
          It needed to be fully featured, extremely flexible, and never in the way. That’s
          what I’m building.
          <br /> <br />
          If that sounds cool you should try out Mylo.
        </p>
      </article>

      <ColoredArticle
        bg="bg-green-200"
        heading="text-green-900"
        text="text-green-800"
        img="bg-green-100 h-[394px]"
      >
        <template #subheading>
          Discovery
        </template>

        <template #heading>
          Looking for a plan?
        </template>

        <template #body>
          Reliably finding good workout plans can be a huge pain and once you do, you
          still have to make sense of them.
          <br /> <br />
          Mylo comes with free workouts you can follow right away or edit to suit your
          needs. They all have exercise rules so all you need to do is show up and follow
          the plan.
          <br /> <br />
          <NuxtLink
            to=/free-plans
            class="inline-block px-6 py-3 font-medium text-green-700 rounded-lg leading-5 bg-green-50"
          >
            Explore free plans
          </NuxtLink>
        </template>
      </ColoredArticle>

      <article class="flex flex-col items-center w-full p-5 bg-green-50 rounded-3xl">
        <h2 class="text-sm font-medium tracking-wider text-green-900 uppercase">
          Find Mylo on
        </h2>

        <ul class="flex mt-4 text-base text-green-600 gap-14">
          <li><a href="">Discord</a></li>
          <li><a href="https://www.reddit.com/r/mylofit/">r/Mylofit</a></li>
          <li><a href="https://www.twitter.com/mylofit">@MyloFit</a></li>
        </ul>
      </article>
    </section>
  </main>

  <footer class="p-5 text-center text-gray-600 rounded-t-3xl bg-gray-50">
    <div class="flex items-center justify-center gap-2">
      <div class="text-gray-600"><LogoSvg width="40" height="40" /></div>
      <p>Plan once, progress forever.</p>
    </div>

    <p class="mt-2 text-sm text-gray-500">© 2023 Mylo</p>
  </footer>
</template>

<style scoped>
#hero {
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content;
  place-items: center;
}

#hero > .schedule {
  grid-area: 1 / 1 / 2 / 2;
  justify-self: start;
  transform: translateX(20px);
  margin-bottom: 50px;
}

#hero > .report {
  grid-area: 1 / 1 / 2 / 2;
  justify-self: end;
  transform: translate(-20px);
  margin-top: 50px;
}

#hero > .image {
  z-index: 1;
  grid-area: 1 / 1 / 2 / 2;
  aspect-ratio: 600 / 400;
}
</style>
