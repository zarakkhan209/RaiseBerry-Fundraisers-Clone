<template>
  <div v-if="isCartOpen">
    <div class="relative font-poppins">
      <div class="fixed inset-0 bg-gray-700 opacity-25"></div>
      <div
        class="fixed top-0 bottom-0 right-0 z-10 w-full max-w-xl overflow-y-scroll bg-white dark:bg-gray-800"
      >
        <div>
          <div class="p-6 bg-white md:pt-12 md:pb-6 md:px-12 dark:bg-gray-800">
            <div class="text-right">
              <button
                @click="closeModal"
                class="text-gray-700 dark:text-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                  />
                </svg>
              </button>
            </div>
            <div class="flex items-center mb-10">
              <h2 class="text-3xl font-bold dark:text-gray-400">
                Shopping Cart
              </h2>
              <span
                class="inline-flex items-center justify-center w-8 h-8 ml-4 text-base font-bold bg-red-600 rounded-full dark:text-gray-400 dark:bg-gray-700 text-gray-50"
                >{{ selectedProduct.length }}</span
              >
            </div>
            <div v-for="product in groupedProducts" :key="product.id">
              <div
                class="block pb-6 mb-6 -mx-4 border-b border-gray-200 dark:border-gray-700 md:flex"
              >
                <div class="w-full px-4 mb-6 md:w-1/3 md:mb-0">
                  <div class="flex w-full h-96 md:h-32 md:w-32">
                    <img
                      :src="product.thumbnail"
                      alt=""
                      class="object-cover w-full h-full rounded-md"
                    />
                  </div>
                </div>
                <div class="w-full px-4 md:2/3">
                  <div class="flex justify-between">
                    <div class="">
                      <h2 class="mb-2 text-xl font-bold dark:text-gray-400">
                        {{ product.title }}
                      </h2>
                      <span
                        class="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400 bg-gray-300 rounded-lg px-2"
                      >
                        {{ product.quantity }}
                      </span>
                      <div>
                        <button
                          @click="removeProduct(product)"
                          class="px-4 py-2 font-medium text-center text-blue-700 border border-blue-500 rounded-md dark:hover:border-gray-900 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 hover:bg-blue-600 hover:text-gray-100"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div>
                      <p
                        class="text-lg font-bold text-blue-500 dark:text-gray-400"
                      >
                        ${{ product.price }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between text-base dark:text-gray-400">
              <p>Subtotal</p>
              <p>$ {{ totalPrice }}</p>
            </div>
            <p class="mt-4 text-sm text-gray-500 dark:text-gray-500">
              Shipping calculated at checkout period.
            </p>
            <div class="flex items-center justify-center mt-6">
              <button
                @click="checkout"
                class="w-full py-3 text-lg font-medium bg-blue-600 rounded-md text-gray-50 hover:bg-blue-700"
              >
                Checkout
              </button>
            </div>
            <div class="flex items-center justify-center mt-6">
              <p>
                <span class="dark:text-gray-400">or,</span>
                <button
                  @click="continueShopping"
                  class="pl-1 text-blue-600 hover:underline dark:text-gray-300"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isCartOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    selectedProduct() {
      return this.$store.state.SelectedProducts;
    },
    groupedProducts() {
      const grouped = this.selectedProduct.reduce((acc, product) => {
        const existingProduct = acc.find((p) => p.id === product.id);

        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          acc.push({ ...product, quantity: 1 });
        }

        return acc;
      }, []);

      return grouped;
    },
    totalPrice() {
      return this.groupedProducts.reduce(
        (total, product) =>
          total + parseFloat(product.price) * product.quantity,
        0
      );
    },
  },
  methods: {
    closeModal() {
      this.$emit("updateIsCartOpen", false);
    },
    removeProduct(product) {
      this.$store.commit("removeProduct", product.id);
    },
    continueShopping() {
      this.$router.push("/ViewProducts");
    },
    checkout() {
      this.$router.push("./OrderInformation");
    },
  },
};
</script>

<style>
</style>