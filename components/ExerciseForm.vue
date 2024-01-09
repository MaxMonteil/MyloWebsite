<template>
  <section
    class="flex flex-col p-2 border rounded-lg gap-6 border-gray-200 bg-white"
  >
    <input
      class="py-1 pl-2 bg-gray-50 block w-full text-black outline-none rounded-md ring-1 ring-black ring-opacity-5 focus:ring placeholder:text-gray-500"
      type="text"
      placeholder="Barbell Squat"
    >

    <div class="gap-y-3 justify-items-center items-center justify-between text-gray-800 grid grid-cols-[repeat(3,min-content)]">
      <p class="text-sm font-medium">
        Set
      </p>

      <select
        v-model="unit"
        class="capitalize block shadow-sm py-1 pl-1.5 pr-4 text-sm text-gray-800 bg-no-repeat outline-none font-medium leading-[17px] bg-gray-50 rounded-md ring-1 ring-black ring-opacity-5 select focus:ring focus:shadow"
      >
        <option
          v-for="exerciseUnit in exerciseUnits"
          :key="exerciseUnit"
          :value="exerciseUnit"
        >
          {{ exerciseUnit === 'time' ? 'seconds' : exerciseUnit }}
        </option>
      </select>

      <p class="text-sm font-medium">
        Kg
      </p>

      <template
        v-for="set in sets"
        :key="set"
      >
        <span class="text-gray-700 col-start-1">{{ set }}</span>

        <input
          type="number"
          min="0"
          placeholder="8"
          class="bg-gray-50 text-black ring-1 ring-black ring-opacity-5 w-20 text-xl text-center py-[1px] outline-none rounded-md focus:ring focus:shadow"
        >

        <input
          type="number"
          min="0"
          placeholder="20"
          class="bg-gray-50 text-black ring-1 ring-black ring-opacity-5 w-20 text-xl text-center py-[1px] outline-none rounded-md focus:ring focus:shadow"
        >
      </template>

      <button
        class="flex items-center justify-center focus:outline-none w-full col-start-1 py-1.5 px-2 leading-none text-gray-800 bg-gray-50 border border-gray-100 rounded-lg col-span-3 shadow-sm"
        @click="() => sets += 1"
      >
        Add set
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
type RepUnit = 'time' | 'reps' | 'distance'
const unit = ref<RepUnit>('reps')
const exerciseUnits: RepUnit[] = ['reps', 'time', 'distance']

const sets = ref(2)
</script>

<style scoped>
.select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpath fill='%23353535' d='M7.443 9.057L5.229 6.843a.666.666 0 01.943-.942l2.214 2.214 2.199-2.199a.666.666 0 11.942.942l-3.142 3.143-.942-.944z'/%3E%3C/svg%3E");
  background-origin: border-box;
  background-position: top 27% right 0.3rem;
  background-size: 16%;
}
</style>
