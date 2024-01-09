<template>
  <article class="text-gray-800 flex flex-col max-w-md gap-5">
    <h3 class="text-3xl leading-9 font-black">
      <slot name="title" />
    </h3>

    <div class="space-y-2 text-lg leading-7">
      <slot name="content" />
    </div>
  </article>
</template>
