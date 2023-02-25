<template>
  <Html class="scroll-smooth scroll-pt-20 md:scroll-pt-32">
    <SiteHeader />

    <main>
      <header
        class="flex flex-col items-center justify-center p-5 pt-20 bg-green-400 md:pt-32 md:p-10 rounded-b-3xl gap-10 md:flex-row lg:gap-20"
      >
        <div class="max-w-lg">
          <h1
            id="plan-once-progress-forever"
            class="text-4xl font-black text-green-900 md:text-6xl leading-10"
          >
            <span class="block text-white">Plan once</span>
            <span class="block italic font-black">Progress Forever</span>
          </h1>

          <h2 class="mt-2 text-green-900 md:mt-4 leading-6 md:text-xl">
            Mylo is the most flexible workout tool ever. Craft your plan and
            forget about all the management.
          </h2>

          <div
            class="flex flex-wrap mt-6 md:justify-start md:mt-8 gap-4 md:text-xl"
          >
            <NuxtLink
              to="https://app.mylo.fit"
              class="px-8 py-3 font-medium text-center text-green-600 bg-white rounded-lg shadow-md md:px-10 leading-5"
            >
              Start training
            </NuxtLink>
          </div>
        </div>

        <div id="hero" class="max-w-sm md:max-w-2xl">
          <NuxtImg
            preload
            src="/schedule-hero.png"
            class="rounded-lg shadow-2xl schedule w-[243px] md:w-[400px]"
          />
          <NuxtImg
            preload
            src="/report-hero.png"
            class="rounded-lg shadow-2xl report w-[243px] md:w-[400px]"
          />
          <HeroLifting />
        </div>
      </header>

      <section class="flex flex-col items-center p-5 gap-5 md:p-10 md:gap-10">
        <TestimonialsSection />

        <CraftingSection />

        <SharingSection />

        <ProgressionsSection />

        <PricingSection />

        <SchedulingSection />

        <AboutSection />

        <SocialLinksSection />
      </section>
    </main>

    <SiteFooter />
  </Html>
</template>

<style>
#hero {
  --x-shift: 20px;
  --y-shift: 50px;

  @media (min-width: 768px) {
    --x-shift: 35px;
    --y-shift: 84px;
  }

  position: relative;
  display: grid;
  grid-template-rows: min-content;
  place-items: center;
  padding-inline: var(--x-shift);

  grid-template-columns: minmax(300px, 344px);
  @media (min-width: 768px) {
    grid-template-columns: minmax(400px, 600px);
  }
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

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content;
}

#hero > .image > .card,
#hero > .image > .bg-image,
#hero > .image > .fg-image {
  grid-area: 1 / 1 / 2 / 2;
}

@keyframes slideIn {
  from {
    transform: translate(var(--xStart), var(--yStart));
  }

  to {
    transform: translate(var(--xEnd), var(--yEnd));
  }
}

.card {
  --xStart: 0;
  --yStart: 0;

  transform: translate(var(--xEnd), var(--yEnd));
  animation: 300ms ease-out 0s 1 slideIn;
}
</style>
