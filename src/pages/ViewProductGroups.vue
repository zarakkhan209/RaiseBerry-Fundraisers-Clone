<template>
  <CartSlider1
    :isCartOpen="isCartOpen"
    @updateIsCartOpen="updateIsCartOpen"
  ></CartSlider1>
  <CapsuleButton activetab="individual"></CapsuleButton>

  <div class="flex flex-col md:flex-row justify-between px-52">
    <div>
      <p>Filter By Product Category</p>
      <select
        v-model="filter"
        class="block w-96 px-4 py-2 border rounded-lg shadow-md"
      >
        <option value="all">Select Category</option>
        <option value="smartphones">Smart Phone</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
        <option value="skincare">Skin Care</option>
        <option value="groceries">Groceries</option>
        <option value="home-decoration">Home Decoration</option>
        <option value="groceries">Groceries</option>
      </select>
    </div>
    <div class="mt-7">
      <button class="bg-blue-600 text-white font-medium py-2 px-3 rounded">
        Request Access to Create Fundraiser
      </button>
    </div>
  </div>

  <div class="py-4 md:px-32">
    <div class="p-2 grid md:grid-cols-3 sm:grid-cols-2 gap-4">
      <div v-for="product in selectCategory" :key="product.id">
        <div class="border h-full">
          <div class="flex justify-center py-2">
            <img
              class="object-cover w-72 h-72 border"
              :src="product.thumbnail"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 tracking-tight">
              <div class="flex justify-between">
                <div>{{ product.title }}</div>
                <div>$ {{ product.price }}</div>
              </div>
            </h5>

            <button
              @click="selectProuct(product)"
              class="bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 px-3 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initFlowbite } from "flowbite";
import CapsuleButton from "../components/CapsuleButton.vue";
import CartSlider1 from "../components/CartSlider1.vue";
export default {
  components: {
    CapsuleButton,
    CartSlider1,
  },
  data() {
    return {
      filter: "all",
      isCartOpen: false,
    };
  },
  computed: {
    AllProducts() {
      return this.$store.state.Products;
    },
    selectCategory() {
      if (this.filter === "all") {
        return this.AllProducts;
      } else {
        return this.AllProducts.filter(
          (product) => product.category === this.filter
        );
      }
    },
  },
  methods: {
    fetchProducts() {
      this.$store.dispatch("fetchProducts");
    },
    selectProuct(product) {
      this.$store.dispatch("selectProducts", product);
      this.isCartOpen = !this.isCartOpen;
    },
    updateIsCartOpen(value) {
      this.isCartOpen = value;
    },
    selectCategory(category) {
      this.filter = category;
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style>
</style>