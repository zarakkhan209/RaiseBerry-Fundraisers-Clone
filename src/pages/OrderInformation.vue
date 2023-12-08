<template>
  <div class="bg-gray-100">
    <div class="flex flex-col sm:flex-row p-16">
      <container class="w-full">
        <OrderForm></OrderForm>
      </container>

      <container class="bg-gray-100 w-full">
        <div class="p-8">
          <h2 class="font-bold mb-6">Order Summary</h2>
          <div class="py-4">
            <div class="bg-white">
              <div v-for="(product, index) in groupedProducts" :key="index">
                <hr />
                <div class="container mx-auto p-4 flex">
                  <div class="w-full">
                    <a href="#">
                      <img
                        class="p-8 rounded-t-lg h-60 w-60"
                        :src="product.thumbnail"
                        alt="product image"
                      />
                    </a>
                  </div>
                  <div>
                    <div class="flex justify-between">
                      <div>
                        <h1 class="mb-4">
                          {{ product.title }}
                          <span class="px-2 ml-2 bg-blue-200 rounded-lg"
                            >${{ product.discountPercentage }}</span
                          >
                        </h1>
                      </div>
                      <div>
                        <div class="text-lg font-serif">
                          <span
                            class="text-gray-400 px-3 cursor-pointer"
                            @click="removeProduct(product)"
                            ><svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="w-6 h-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="mb-2">
                      <span class="font-semibold">${{ product.price }}</span>
                    </div>
                    <div class="flex justify-between">
                      <div class="mb-4">
                        <span class="text-gray-500">{{
                          product.description
                        }}</span>
                      </div>
                      <div>
                        <span class="bg-gray-300 rounded-lg px-2">{{
                          product.quantity
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div class="flex justify-between">
                <p class="text-gray-600 px-3 py-1">Subtotal</p>
                <p class="font-semibold px-3">${{ totalPrice }}</p>
              </div>
              <hr />
              <div class="flex justify-between py-4">
                <p class="text-gray-600 font-semibold px-3">
                  Total before shiping
                </p>
                <p class="font-semibold px-3">${{ totalPrice }}</p>
              </div>
              <hr />
              <div class="px-6 py-4">
                
              </div>
            </div>
          </div>
        </div>
      </container>
    </div>
  </div>
</template>
  
  <script>
import OrderForm from "../components/OrderForm.vue";

export default {
  components: {
    OrderForm,
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
    removeProduct(product) {
      this.$store.commit("removeProduct", product.id);
    },
  },
};
</script>
  
  <style>
</style>