<template>
  <div class="flex justify-center p-8">
    <div class="inline-flex">
      <RouterLink to="/ViewProducts">
        <button
          class="border-2 border-black font-bold py-2 px-28 rounded-l-3xl"
          :class="{
            'bg-blue-400 text-white': activetab != 'individual',
          }"
        >
          Individual Products
        </button>
      </RouterLink>
      <RouterLink to="/ViewProductGroups">
        <button
          class="border-2 border-black font-bold py-2 px-28 rounded-r-3xl"
          :class="{
            'bg-blue-400 text-white': activetab === 'individual',
          }"
        >
          Product Groups
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  props: {
    activetab: String,
  },
};
</script>

<style>
</style>