<template>
  <container class="w-full">
    <body class="bg-gray-100 p-8">
      <div class="">
        <h2 class="font-bold mb-6">Contact Information</h2>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-600"
            >Email Address:</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="mt-1 p-2 w-full border rounded"
          />
        </div>
        <div class="flex justify-between mt-2">
          <h2 class="font-bold mb-6">Shipping Information</h2>
          <div>
            <input
              type="checkbox"
              id="billingSameAsShipping"
              name="billingSameAsShipping"
              v-model="billingSameAsShipping"
              />
              <label
              for="billingSameAsShipping"
              class="ml-2 text-sm font-medium text-gray-600"
              >Billing Info same as Shipping</label
            >
          </div>
        </div>

        <form action="#" method="post" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label
                for="firstName"
                class="block text-sm font-medium text-gray-600"
                >First Name:</label
              >
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="mt-1 p-2 w-full border rounded"
              />
            </div>

            <div>
              <label
                for="lastName"
                class="block text-sm font-medium text-gray-600"
                >Last Name:</label
              >
              <input
                type="text"
                id="lastName"
                name="lastName"
                class="mt-1 p-2 w-full border rounded"
              />
            </div>
          </div>
          <div>
            <label
              for="search_address"
              class="block text-sm font-medium text-gray-600"
              >Search Address</label
            >
            <input
              type="text"
              id="email"
              name="address"
              class="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label for="company" class="block text-sm font-medium text-gray-600"
              >Company</label
            >
            <input
              type="text"
              id="email"
              name="company"
              class="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-600"
              >Phone</label
            >
            <input
              type="number"
              id="email"
              name="number"
              class="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label
              for="apartment"
              class="block text-sm font-medium text-gray-600"
              >Apartment,suite,etc</label
            >
            <input
              type="text"
              id="email"
              name="apartment"
              class="mt-1 p-2 w-full border rounded"
            />
          </div>
        </form>
      </div>
    </body>
    <form
      v-if="!billingSameAsShipping"
      action="#"
      method="post"
      class="space-y-4"
    >
      <body class="bg-gray-100 p-8">
        <div class="">
          <div class="flex">
            <h2 class="font-bold mb-6">Billing Information</h2>
          </div>
          <form action="#" method="post" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-medium text-gray-600"
                  >First Name:</label
                >
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="mt-1 p-2 w-full border rounded"
                />
              </div>

              <div>
                <label
                  for="lastName"
                  class="block text-sm font-medium text-gray-600"
                  >Last Name:</label
                >
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="mt-1 p-2 w-full border rounded"
                />
              </div>
            </div>
            <div>
              <label
                for="company"
                class="block text-sm font-medium text-gray-600"
                >Company</label
              >
              <input
                type="text"
                id="email"
                name="company"
                class="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label
                for="billing"
                class="block text-sm font-medium text-gray-600"
                >Billing Address</label
              >
              <input
                type="text"
                id="email"
                name="billing"
                class="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label
                for="apartment"
                class="block text-sm font-medium text-gray-600"
                >Apartment,suite,etc</label
              >
              <input
                type="text"
                id="email"
                name="apartment"
                class="mt-1 p-2 w-full border rounded"
              />
            </div>
          </form>
        </div>
      </body>
    </form>
  </container>
</template>

<script>
export default {
  data() {
    return {
      billingSameAsShipping: false,
    };
  },
};
</script>

<style>
</style>