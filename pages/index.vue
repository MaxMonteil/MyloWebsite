<template>
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

          <NuxtLink
            to="https://play.google.com/store/apps/details?id=fit.mylo.app.twa"
            class="px-4 py-3 font-medium flex items-center gap-2 text-center text-green-50 bg-green-700 rounded-lg shadow-md md:px-4 leading-5"
          >
            <GooglePlaySvg  class="w-6 h-6" />
            Get it on Google Play
          </NuxtLink>

        </div>
      </div>

      <div id="hero" class="max-w-sm md:max-w-2xl">
        <Image
          src="https://res.cloudinary.com/demgpyia8/image/upload/v1677426658/schedule-hero_chpi5k"
          layout="fixed"
          width="1224"
          height="800"
          :breakpoints="[243, 400]"
          class="rounded-lg md:rounded-xl shadow-2xl schedule max-w-[242px] md:max-w-[400px] h-[371px] max-h-[371px] md:h-[612px] md:max-h-[612px]"
          alt="Screenshot of the app schedule."
          priority
        />

        <Image
          src="https://res.cloudinary.com/demgpyia8/image/upload/v1677427338/report-hero_uxo7lq"
          layout="fixed"
          width="1224"
          height="800"
          :breakpoints="[243, 400]"
          class="rounded-lg md:rounded-xl shadow-2xl report max-w-[242px] md:max-w-[400px] h-[371px] max-h-[371px] md:h-[612px] md:max-h-[612px]"
          alt="Screenshot of the post training workout report."
          priority
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
</template>

<script setup lang="ts">
import { Image } from '@unpic/vue'
</script>

<style>
#hero {
  --xShift: 20px;
  --yShift: 25px;

  @media (min-width: 768px) {
    --xShift: 35px;

    --yShiftStart: 22px;
    --yShift: 42px;
  }

  margin-block: 25px;

  position: relative;
  display: grid;
  grid-template-rows: min-content;
  place-items: center;
  padding-inline: var(--xShift);

  grid-template-columns: minmax(300px, 344px);
  @media (min-width: 768px) {
    grid-template-columns: minmax(400px, 600px);
    margin-block: 42px;
  }
}

#hero > .schedule {
  grid-area: 1 / 1 / 2 / 2;
  justify-self: start;

  transform: translate(var(--xShift), calc(-1 * var(--yShift)));
  animation: 500ms ease-in-out 0s 1 slideUp;
  @media (min-width: 768px) {
    transform: translate(calc(-1 * var(--xShift)), calc(-1 * var(--yShift)));
    animation: 500ms ease-in-out 1 mdSlideUp;
  }

  @keyframes slideUp {
    from {
      transform: translate(var(--xShift), calc(-1 * var(--yShiftStart)));
    }

    to {
      transform: translate(var(--xShift), calc(-1 * var(--yShift)));
    }
  }

  @keyframes mdSlideUp {
    from {
      transform: translate(
        calc(-1 * var(--xShift)),
        calc(-1 * var(--yShiftStart))
      );
    }

    to {
      transform: translate(calc(-1 * var(--xShift)), calc(-1 * var(--yShift)));
    }
  }
}

#hero > .report {
  grid-area: 1 / 1 / 2 / 2;
  justify-self: end;

  transform: translate(calc(-1 * var(--xShift)), var(--yShift));
  animation: 500ms ease-in-out 0s 1 slideDown;
  @media (min-width: 768px) {
    transform: translate(var(--xShift), var(--yShift));
    animation: 500ms ease-in-out 1 mdSlideDown;
  }

  @keyframes slideDown {
    from {
      transform: translate(calc(-1 * var(--xShift)), var(--yShiftStart));
    }

    to {
      transform: translate(calc(-1 * var(--xShift)), var(--yShift));
    }
  }

  @keyframes mdSlideDown {
    from {
      transform: translate(var(--xShift), var(--yShiftStart));
    }

    to {
      transform: translate(var(--xShift), var(--yShift));
    }
  }
}

#hero > .hero-image {
  z-index: 1;
  grid-area: 1 / 1 / 2 / 2;
  aspect-ratio: 600 / 400;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content;

  animation: 500ms ease-in-out 0s 1 scaleIn;

  @keyframes scaleIn {
    from {
      transform: scale(0.9);
    }

    to {
      transform: scale(1);
    }
  }
}

#hero > .hero-image > .card,
#hero > .hero-image > .bg-image,
#hero > .hero-image > .fg-image {
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
  animation: 460ms ease-out 0s 1 slideIn;
}
</style>
