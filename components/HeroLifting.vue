<template>
  <div class="relative place-items-center hero-image">
    <Image
      src="https://res.cloudinary.com/demgpyia8/image/upload/v1677426315/lifting_yvcttx"
      layout="fixed"
      width="800"
      height="1200"
      :breakpoints="[374, 600]"
      alt="Image of someone doing an overhead press along with floating snippets saying: 'Increase reps', 'Increase intensity', 'Update weights', and 'Change sets'."
      class="bg-image max-h-[250px] md:max-h-[400px] max-w-[374px] md:max-w-[600px] shadow-xl rounded-xl"
      priority
    />

    <WorkoutCard class="card workout-1">
      Weight lifting
      <template #schedule>3x week</template>
      <template #exercises>12 exercises</template>
    </WorkoutCard>

    <WorkoutCard class="card workout-2">
      Sprint practice
      <template #schedule>5x week</template>
      <template #exercises>8 exercises</template>
    </WorkoutCard>

    <WorkoutCard class="card workout-3">
      Meditation
      <template #schedule>Daily</template>
      <template #exercises>3 exercises</template>
    </WorkoutCard>

    <FeatureCard class="text-center card feature-1">
      Custom <br />
      schedules
    </FeatureCard>

    <FeatureCard class="text-right card feature-2">
      Automatic <br />
      progressions
    </FeatureCard>

    <FeatureCard class="text-right card feature-3">
      Hyper-flexible
    </FeatureCard>

    <Image
      src="https://res.cloudinary.com/demgpyia8/image/upload/v1677417306/no-bg-lifting_sdlvij"
      layout="fixed"
      width="800"
      height="1200"
      :breakpoints="[374, 600]"
      alt="The same image of some doing an overhead press but cut out from the rest of the background."
      class="fg-image max-h-[250px] md:max-h-[400px] w-[374px] md:w-[600px] z-10"
      priority
    />
  </div>
</template>

<script setup lang="ts">
import { Image } from '@unpic/vue'
</script>

<style scoped>
.workout-1 {
  --xEnd: 2.5rem;
  --yEnd: -4.5rem;

  @media (min-width: 768px) {
    --xEnd: 5rem;
    --yEnd: -7rem;
  }
}

.workout-2 {
  --xEnd: -5rem;
  --yEnd: 2.5rem;

  @media (min-width: 768px) {
    --xEnd: -8.5rem;
    --yEnd: 3.5rem;
  }
}

.workout-3 {
  --xEnd: 5rem;
  --yEnd: 4rem;

  @media (min-width: 768px) {
    --xEnd: 7rem;
    --yEnd: 7rem;
  }
}

.feature-1 {
  --xEnd: -5.5rem;
  --yEnd: -4rem;

  @media (min-width: 768px) {
    --xEnd: -10.3rem;
    --yEnd: -6.7rem;
  }
}

.feature-2 {
  --xEnd: 6rem;
  --yEnd: 0.75rem;

  @media (min-width: 768px) {
    --xEnd: 10.3rem;
    --yEnd: 1.6rem;
  }
}

.feature-3 {
  --xEnd: -4.5rem;
  --yEnd: 6rem;

  @media (min-width: 768px) {
    --xEnd: -6.7rem;
    --yEnd: 8rem;
  }
}
</style>
