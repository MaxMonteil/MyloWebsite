<template>
  <Html class="scroll-smooth scroll-pt-20 md:scroll-pt-32">
    <SiteHeader />

    <main>
      <header class="flex flex-col items-start justify-center p-5 pt-20 bg-green-400 md:pt-32 md:p-10 rounded-b-3xl gap-10 md:flex-row lg:gap-20">
        <div class="max-w-lg">
          <h1 id="plan-once-progress-forever" class="text-4xl font-black text-green-900 md:text-6xl leading-10">
            <span class="block text-white">Plan once</span>
            <span class="block italic font-black">Progress Forever</span>
          </h1>

          <h2 class="mt-2 text-green-900 md:mt-4 leading-6 md:text-xl">
            Mylo is the most flexible workout tool ever. Craft your plan and forget about all the management.
          </h2>

          <div class="flex flex-wrap mt-6 sm:justify-center md:justify-start md:mt-8 gap-4 md:text-xl">
            <NuxtLink
              to="https://app.mylo.fit"
              class="px-8 py-3 font-medium text-center text-green-600 bg-white rounded-lg shadow-md md:px-10 leading-5"
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
          <ScheduleSvg class="rounded-lg shadow-2xl schedule w-[243px] md:w-[400px]" />
          <ReportSvg class="rounded-lg shadow-2xl report w-[243px] md:w-[400px]" />

          <div class="relative place-items-center image">
            <NuxtImg preload src="/lifting.png" class="bg-image w-[374px] md:w-[600px] shadow-xl rounded-xl" />

            <div class="p-2 text-green-900 bg-green-300 shadow-xl rounded-md card -translate-y-16 translate-x-8">
              <p class="mb-0.5 text-sm font-medium">Weight lifting</p>
              <p class="text-xs"><span class="mr-3">3x week</span> <span>12 exercises</span></p>
            </div>

            <div class="p-2 text-green-900 bg-green-300 shadow-xl rounded-md card -translate-x-20 translate-y-10">
              <p class="mb-0.5 text-sm font-medium">Sprint practice</p>
              <p class="text-xs"><span class="mr-3">5x week</span> <span>8 exercises</span></p>
            </div>

            <div class="p-2 text-green-900 bg-green-300 shadow-xl rounded-md card translate-x-20 translate-y-16">
              <p class="mb-0.5 text-sm font-medium">Meditation</p>
              <p class="text-xs"><span class="mr-3">Daily</span> <span>3 exercises</span></p>
            </div>

            <p class="px-1 text-center py-0.5 text-xs text-yellow-900 bg-yellow-200 shadow-lg rounded card -translate-x-[5.5rem] -translate-y-16">
              Custom <br /> schedules
            </p>

            <p class="px-1 text-right py-0.5 text-xs text-yellow-900 bg-yellow-200 shadow-lg rounded card translate-x-24 translate-y-3">
              Automatic <br /> progressions
            </p>

            <p class="px-1 text-right py-0.5 text-xs text-yellow-900 bg-yellow-200 shadow-lg rounded card -translate-x-[4.5rem] translate-y-24">
              Hyper-flexible
            </p>

            <NuxtImg preload src="/no-bg-lifting.png" class="fg-image w-[374px] md:w-[600px] z-10" />
          </div>
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

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content;
}


#hero > .image > .card,
#hero > .image > .bg-image,
#hero > .image > .fg-image {
  grid-area: 1 / 1 / 2 / 2;
}
</style>
