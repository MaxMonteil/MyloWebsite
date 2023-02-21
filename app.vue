<template>
  <nav class="px-5 py-2.5 bg-green-200">
    <ul class="flex items-center justify-between mx-auto text-sm text-green-800 md:justify-start md:text-base max-w-7xl">
      <li class="text-green-800 md:grow">
        <LogoSvg class="w-10 h-10 md:w-14 md:h-14" />
      </li>
      <li><NuxtLink to="/free-plans">Free plans</NuxtLink></li>
      <li class="md:ml-6"><NuxtLink to="/blog">Blog</NuxtLink></li>
      <li>
        <NuxtLink
          to="https://app.mylo.fit"
          class="px-4 py-2 font-medium text-green-900 bg-green-300 rounded-lg md:ml-6 md:px-6 md:py-3 leading-4"
        >
          Start training
        </NuxtLink>
      </li>
    </ul>
  </nav>

  <main>
    <header class="flex flex-col items-center justify-center p-5 bg-green-200 md:p-10 rounded-b-3xl gap-10 md:flex-row lg:gap-20">
      <div class="max-w-lg">
        <h1 class="text-4xl font-black text-green-500 md:text-6xl leading-10">
          <span class="block">Plan once</span>
          <span class="block italic font-black text-green-900">Progress forever</span>
        </h1>

        <h2 class="mt-2 text-green-900 md:mt-4 leading-6 md:text-xl">
          Mylo is the most flexible workout tool ever. Craft your plan and forget about all the management.
        </h2>

        <div class="flex flex-wrap mt-6 sm:justify-center md:justify-start md:mt-8 gap-4 md:text-xl">
          <NuxtLink
            to="https://app.mylo.fit"
            class="px-8 py-3 font-medium text-center text-green-900 bg-green-300 rounded-lg shadow-md md:px-10 leading-5"
          >
            Start training
          </NuxtLink>

          <NuxtLink
            to=/free-plans
            class="px-6 py-3 font-medium text-green-700 rounded-lg md:px-8 leading-5 bg-green-50"
          >
            Explore free plans
          </NuxtLink>
        </div>
      </div>

      <div id="hero" class="max-w-sm md:max-w-2xl">
        <ScheduleSvg class="rounded-lg shadow-lg schedule w-[243px] md:w-[400px]" />
        <ReportSvg class="rounded-lg shadow-lg report w-[243px] md:w-[400px]" />
        <NuxtImg preload src="/weightlifting.png" class="w-[374px] md:w-[600px] shadow-2xl rounded-xl image" />
      </div>
    </header>

    <section class="flex flex-col items-center p-5 gap-5 md:p-10 md:gap-10">
      <article class="flex flex-col max-w-4xl px-5 py-10">
        <h2 class="text-sm font-medium tracking-wider text-gray-900 uppercase md:text-xl">What athletes are saying</h2>

        <ol class="flex items-stretch mt-2 overflow-x-scroll md:grid md:grid-cols-2 md:overflow-x-visible snap-x md:text-lg snap-mandatory gap-4">
          <li class="w-full max-w-lg mt-2 leading-loose text-gray-800 snap-center shrink-0">
            “Keeps track of my workouts and being reminder that I have to workout. It motivates me.”
          </li>

          <li class="w-full max-w-lg mt-2 leading-loose text-gray-800 snap-center shrink-0 ">
            “It offers basically as much customisability as an excel sheet with the functionality of an app.”
          </li>

          <li class="w-full max-w-lg mt-2 leading-loose text-gray-800 snap-center shrink-0">
            “Most other apps have presets you can only customise to a certain degree (or not at all) before
            you hit a paywall which makes them unusable to me or they contain tons of ads.”
          </li>

          <li class="w-full max-w-lg mt-2 leading-loose text-gray-800 snap-center shrink-0">
            “I don’t have to think about what I’m doing in the gym, the app knows how many reps, what weight
            and what exercise I need to do.”
          </li>
        </ol>
      </article>

      <ColoredArticle
        bg="bg-blue-200"
        heading="text-blue-900"
        text="text-blue-800"
        img="bg-blue-100 h-[400px] md:w-[411px]"
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
        img="bg-yellow-100 h-[220px] md:w-[612px] md:h-[397px]"
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
        img="bg-red-100 h-[340px] md:w-[411px]"
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

      <article class="max-w-4xl px-5 py-10 text-gray-800">
        <div class="w-32 h-32 bg-gray-700 md:w-36 md:h-36 rounded-2xl"></div>

        <h2 class="mt-5 text-2xl font-black md:text-4xl md:mt-10">
          Why Mylo?
        </h2>

        <p class="mt-2 max-w-prose md:text-xl md:mt-4">
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
        img="bg-green-100 h-[394px] md:w-[411px]"
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
            class="inline-block px-6 py-3 font-medium text-green-700 rounded-lg md:text-xl md:px-8 leading-5 bg-green-50"
          >
            Explore free plans
          </NuxtLink>
        </template>
      </ColoredArticle>

      <article class="flex flex-col items-center w-full max-w-2xl p-5 bg-green-50 rounded-3xl">
        <h2 class="text-sm font-medium tracking-wider text-green-900 uppercase md:text-xl">
          Find Mylo on
        </h2>

        <ul class="flex mt-4 text-base text-green-600 md:text-xl gap-14">
          <li><a href="">Discord</a></li>
          <li><a href="https://www.reddit.com/r/mylofit/">r/Mylofit</a></li>
          <li><a href="https://www.twitter.com/mylofit">@MyloFit</a></li>
        </ul>
      </article>
    </section>
  </main>

  <footer class="p-5 text-gray-600 rounded-t-3xl md:p-8 bg-gray-50">
    <section class="flex flex-col items-center mx-auto md:flex-row md:justify-between gap-2 max-w-7xl">
      <div class="flex items-center justify-center gap-2 md:gap-4">
        <div class="text-gray-600">
          <LogoSvg class="w-10 h-10 md:w-14 md:h-14" />
        </div>

        <p class="md:text-xl">Plan once, progress forever.</p>
      </div>

      <p class="text-sm text-gray-500 md:text-xl">© Mylo</p>
    </section>
  </footer>
</template>

<style scoped>
#hero {
  --x-shift: 20px;
  --y-shift: 50px;

  @media (min-width: 768px) {
    --x-shift: 35px;
    --y-shift: 84px;
  }

  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content;
  place-items: center;

  padding-inline: var(--x-shift);
}

#hero > .schedule {
  grid-area: 1 / 1 / 2 / 2;
  justify-self: start;
  margin-bottom: var(--y-shift);
  transform: translateX(calc(var(--x-shift)));

  @media (min-width: 768px) {
    transform: translateX(calc(-1 * var(--x-shift)));
  }
}

#hero > .report {
  grid-area: 1 / 1 / 2 / 2;
  justify-self: end;
  margin-top: var(--y-shift);
  transform: translateX(calc(-1 * var(--x-shift)));

  @media (min-width: 768px) {
    transform: translateX(calc(var(--x-shift)));
  }
}

#hero > .image {
  z-index: 1;
  grid-area: 1 / 1 / 2 / 2;
  aspect-ratio: 600 / 400;
}
</style>
