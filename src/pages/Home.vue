<template>
  <container class="flex flex-col md:flex-row">
    <div class="px-20 py-20">
      <p class="text-5xl font-bold">Your Fundraiser Is Ready.</p>
      <p class="py-14 text-gray-600">
        RaiseBerry has the best school fundraisers on the planet. Build an
        online fundraiser in minutes, sell our products (or your own, if you
        like), and receive funding. We handle the rest. Or if cash is donated,
        we withhold 0%!
      </p>
      <ul class="text-4xl">
        <li>
          <span class="text-orange-400">✔️ </span
          ><span class="px-4">It's Free</span>
        </li>
        <li>
          <span>✔️ </span><span class="px-4">You Sell It, We Ship It</span>
        </li>
        <li><span>✔️ </span><span class="px-4">You Get Money!</span></li>
      </ul>
      <div class="py-10">
        <button class="bg-orange-500 text-2xl text-white px-12 py-1 rounded-lg">
          Get Started
        </button>
        <br />
        <RouterLink to="/ViewProducts">
          <button class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-3">
            View Products
          </button>
        </RouterLink>
        <br />
        <a class="text-decoration-line: underline text-xs text-gray-700"
          >Have an account? Login ></a
        >
      </div>
    </div>
    <div class="px-20 py-20">
      <img src="easypesy.jpg" alt="" srcset="" />
    </div>
  </container>
  <div>
    <img src="banner1.jpg" alt="" srcset="" />
  </div>
  <div class="text-center">
    <p class="text-4xl py-12">Fundraising Just Got Easier.</p>

    <!-- Cards -->
    <Cards class="p-3"></Cards>
  </div>
  <div class="text-center p-5">
    <button class="bg-blue-500 text-xl rounded-lg text-white px-8 py-2">
      Learn More
    </button>
  </div>

  <div class="flex flex-col sm:flex-row p-10 justify-center gap-20 bg-gray-100">
    <div class="w-96">
      <p class="text-5xl">Coaches Choose Us</p>
      <br />
      <p class="text-gray-600 text-lg">
        Let's be honest, coaches do not have time stress about fundraisers. Find
        products, figure out profit margins, and organize delivery...No way. We
        are grateful for the work you do for our youth and so we found a way to
        say, "Thank you. We'll take it from here."
      </p>
      <a class="text-blue-500">Get Started ></a>
    </div>
    <div class="w-96">
      <img class="rounded-lg" src="coach.jpeg" alt="" srcset="" />
    </div>
  </div>

  <div class="flex flex-col sm:flex-row p-10 justify-center gap-20 py-20">
    <div class="w-96">
      <img class="rounded-lg" src="people1.jpg" alt="" srcset="" />
    </div>
    <div class="w-96">
      <p class="text-5xl">Sound Familiar?</p>
      <br />
      <p class="text-gray-600 text-lg">
        You’re a leader, and probably feel a little overwhelmed. It might be
        setting up this year’s schedule, holding tryouts, or just cleaning up
        after you get together. But calling around to find a fundraiser is kind
        of the WORST. So... ready for better?
      </p>
      <a class="text-blue-500">Learn More ></a>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Cards from "../components/Cards.vue";

export default {
  components: {
    Cards,
  },
};
</script>

<style>
</style>