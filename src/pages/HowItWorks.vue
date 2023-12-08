<template>
  <div class="bg-gray-100 h-screen">
    <div class="bg-white p-16">
      <p class="text-4xl text-center">How It Works</p>
      <br />
      <p class="text-gray-600 lg:px-32">
        RaiseBerry makes it easy to support a fundraiser. Or if you already have
        a fundraiser in mind or have one lined up we can help you get it set up
        and give you the online tools needed to share. Custom links, QR codes,
        and payment platforms are all in place and ready to go.
      </p>
      <div class="flex justify-center">
        <iframe
          class="mt-16"
          width="550"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        >
        </iframe>
      </div>

      <div class="text-center py-4">
        <button class="bg-orange-500 rounded-lg text-2xl text-white px-8 py-2">
          Get Started
        </button>
      </div>
    </div>
  </div>
  <!-- Cards -->
  <cards-1234></cards-1234>
  <div class="text-center">
    <button class="bg-orange-500 rounded-lg text-2xl text-white px-8 py-2">
      Create My Account
    </button>
  </div>

  <div class="bg-blue-200 flex flex-col sm:flex-row lg:px-72 py-10 mt-12">
    <div>
      <img src="buildyourfundraiser.png" class="lg:w-full" />
    </div>
    <div class="lg:px-28 sm:px-10">
      <p class="text-2xl font-semibold">Build Your Fundraiser</p>
      <p class="text-gray-700 py-6">
        Whether you’re part of a school PTA, little league team, chamber of
        commerce, or any other local organization that holds
        fundraisers—RaiseBerry is the platform you’ve been waiting for. Instead
        of just asking for donations, and instead of managing orders and
        deliveries, get back to focusing on your organization, and let
        RaiseBerry handle the tough stuff.<br />
        <a class="text-blue-600">Get Started ></a>
      </p>
    </div>
  </div>
  <div class="flex flex-col sm:flex-row lg:px-72 py-10">
    <div>
      <img src="selectproducts.png" class="lg:w-full" />
    </div>
    <div class="lg:px-28 sm:px-10">
      <p class="text-2xl font-semibold">Select Products From Our Catalog</p>
      <p class="text-gray-700 py-6">
        We supply amazing products from great brands, and ship them directly to
        your supporters. That means you don’t have to ever deliver another
        product order again—unless you really want to. Of course, you could also
        sell your own products and services in your RaiseBerry fundraiser, if
        that’s a better option for you.<br />
        <a class="text-blue-600">Get Started ></a>
      </p>
    </div>
  </div>
  <div class="bg-blue-200 flex flex-col sm:flex-row lg:px-72 py-10">
    <div>
      <img src="spreadword.png" class="lg:w-full" />
    </div>
    <div class="lg:px-28 sm:px-10">
      <p class="text-2xl font-semibold">Spread The Word</p>
      <p class="text-gray-700 py-6">
        RaiseBerry gives you the power to individually track sales referred by
        anyone in your organization. In other words, each student, athlete, or
        volunteer can have their own shareable link to invite supporters into
        the fundraiser while getting credit for their contributions. Plus, each
        product sold shows supporters exactly how much of the sale goes to the
        fundraiser, so it’s transparent.<br />
        <a class="text-blue-600">Get Started ></a>
      </p>
    </div>
  </div>
  <div class="flex flex-col sm:flex-row lg:px-72 py-10">
    <div>
      <img src="fundsdeposited.png" class="lg:w-full" />
    </div>
    <div class="lg:px-28 sm:px-10">
      <p class="text-2xl font-semibold">Funds Get Deposited</p>
      <p class="text-gray-700 py-6">
        Skip handling order forms, cash, checks, and reconciling credit card
        transactions. Just watch the funds hit your bank account, and focus on
        what you’re there for. Plus you can always use our accounting tools to
        understand what’s going on.<br />
        <a class="text-blue-600">Get Started ></a>
      </p>
    </div>
  </div>
  <div class="bg-blue-200 flex flex-col sm:flex-row lg:px-72 py-10">
    <div>
      <img src="raiseraiseberry.png" class="lg:w-full" />
    </div>
    <div class="lg:px-28 sm:px-10">
      <p class="text-2xl font-semibold">Who Can Raise With RaiseBerry?</p>
      <p class="text-gray-700 py-6">
        RaiseBerry only allows US-based schools / nonprofit groups to raise
        funds on its platform. Fundraisers designed to benefit individuals,
        for-profit companies, or other groups / entities are not allowed.
        RaiseBerry may also reject fundraiser campaigns at its discretion.<br />
        <a class="text-blue-600">Get Started ></a>
      </p>
    </div>
  </div>

  <div class="flex justify-center py-10 px-10">
    <a href="#" class="p-6 border border-black text-center">
      <h5 class="mb-2 text-4xl tracking-tight text-gray-900">
        Start Raising Today!
      </h5>
      <p class="font-normal text-gray-700">
        Don't make your fundraiser harder than it has to be. Start raising
        today. Contact us and a representative can walk you through the process
        if needed.
      </p>
      <div class="text-center mt-6">
        <button class="bg-orange-500 rounded-lg text-2xl text-white px-8 py-2">
          Get Started
        </button>
      </div>
    </a>
  </div>
</template>
  
  <script>
import Cards1234 from "../components/Cards1234.vue";
export default {
  components: {
    Cards1234,
  },
};
</script>
  
  <style>
</style>