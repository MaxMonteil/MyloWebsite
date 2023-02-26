<template>
  <ColoredArticle
    bg="bg-yellow-200"
    heading="text-yellow-900"
    text="text-yellow-800"
  >
    <template #subheading> Progressions </template>

    <template #heading> Plan once, train forever. </template>

    <template #body>
      A proper workout varies in frequency, weights, reps, and intensity. With
      exercise rules, Mylo can manage all that for you automatically.
      <br />
      <br />
      Of course, you’re always in control and can make your own changes anytime.
    </template>

    <template #image>
      <Image
        src="https://res.cloudinary.com/demgpyia8/image/upload/v1677414874/progressions_j02vl7"
        layout="constrained"
        width="600"
        :aspect-ratio="0.66"
        :breakpoints="[330, 600]"
        alt="Image of someone doing an overhead press along with floating snippets saying: 'Increase reps', 'Increase intensity', 'Update weights', and 'Change sets'."
        class="-mb-1 h-[220px] md:w-[600px] md:h-[400px]"
      />
    </template>
  </ColoredArticle>
</template>

<script setup lang="ts">
import { Image } from '@unpic/vue'
</script>
