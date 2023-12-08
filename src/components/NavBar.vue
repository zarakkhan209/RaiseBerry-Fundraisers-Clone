<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md mb-1">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink to="/">
        <img src="RaiseBerry.png" class="h-16" alt="Flowbite Logo" />
      </RouterLink>
      <!-- ToGGle Button -->
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <RouterLink
              to="/ViewProducts"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-gray-500 font-light"
              >VIEW PRODUCTS</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/GetStarted"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-gray-500 font-light"
              >GET STARTED</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/HowItWorks"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-gray-500 font-light"
              >HOW IT WORKS</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/AboutUs"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-gray-500 font-light"
              >ABOUT US</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/Login">
              <button
                class="bg-blue-400 px-4 py-1 rounded-xl text-white hover:bg-blue-500"
              >
                LOG IN
              </button>
            </RouterLink>
          </li>
          <ul>
            <li>
              <RouterLink to="/cart">
                <span class="flex-1 ms-3 whitespace-nowrap">🛒</span>
                <span
                  class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-gray-300"
                  >{{ selectedProduct.length }}</span
                >
              </RouterLink>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { RouterLink } from "vue-router";

export default {
  computed: {
    selectedProduct() {
      return this.$store.state.SelectedProducts;
    },
  },
  // mounted() {
  //   this.initFlowbite();
  // },
};
</script>

<style>
</style>