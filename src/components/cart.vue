<template>
  <p class="text-3xl font-bold px-44 py-12">Shopping Bag</p>
  <div class="flex justify-center">
    <div class="w-3/6">
      <div v-for="(product, index) in groupedProducts" :key="index">
        <hr />
        <div class="container mx-auto p-4 flex">
          <div class="w-60">
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
                  <button
                    class="bg-gray-600 text-white px-2 rounded-lg"
                    @click="decrementQuantity(product)"
                  >
                    -
                  </button>
                  <span class="border border-black px-6">{{
                    product.quantity
                  }}</span>
                  <button
                    class="bg-gray-600 text-white px-1 rounded-lg"
                    @click="incrementQuantity(product)"
                  >
                    +
                  </button>
                  <span
                    class="text-gray-400 px-3 cursor-pointer"
                    @click="removeProduct(product)"
                    >✖</span
                  >
                </div>
              </div>
            </div>
            <div class="mb-2">
              <span class="font-semibold">${{ product.price }}</span>
            </div>
            <div class="mb-4">
              <span class="text-gray-500">{{ product.description }}</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
    <div class="flex items-center p-8">
      <div class="bg-gray-50 w-96 h-80">
        <div>
          <p class="font-semibold py-6 px-3">Order Summery</p>
          <div class="flex justify-between">
            <p class="text-gray-600 px-3 py-1">Subtotal</p>
            <p class="font-semibold px-3">${{ totalPrice }}</p>
          </div>
          <hr />
          <div class="flex justify-between py-4">
            <p class="text-gray-600 font-semibold px-3">Order total</p>
            <p class="font-semibold px-3">${{ totalPrice }}</p>
          </div>
        </div>
        <div class="px-6">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold w-full py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            @click="checkout"
          >
            Go to Checkout
          </button>
        </div>
        <div class="px-6 py-3">
          <button
            class="bg-gray-300 hover:bg-gray-400 text-white font-bold w-full py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            @click="continueShopping"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
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
    incrementQuantity(product) {
      this.$store.commit("incrementQuantity", product.id);
    },
    decrementQuantity(product) {
      if (product.quantity > 1) {
        this.$store.commit("decrementQuantity", product.id);
      }
    },
    removeProduct(product) {
      this.$store.commit("removeProduct", product.id);
    },
    checkout() {
      this.$router.push({
        path: "/OrderInformation",
      });
    },
    continueShopping() {
      this.$router.push({
        path: "/ViewProducts",
      });
    },
  },
};
</script>