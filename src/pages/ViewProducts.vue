<template>
  <CapsuleButton></CapsuleButton>

  <div class="flex flex-col md:flex-row justify-between px-52">
    <div>
      <p>Filter By Product Category</p>
      <select
        v-model="selectedCategory"
        class="block w-96 px-4 py-2 border rounded-lg shadow-md"
      >
        <option value="all">Select Category</option>
        <option v-for="category in categories" :key="category">
          {{ category }}
        </option>
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
      <div v-for="item in filteredItems" :key="item.id">
        <div class="border h-full">
          <div class="flex justify-center py-2">
            <img
              class="object-cover w-72 h-72 border"
              :src="item.image"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 tracking-tight">
              <div class="flex justify-between">
                <div>{{ item.name }}</div>
                <div>{{ item.price }}</div>
              </div>
            </h5>

            <button
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
import CapsuleButton from "../components/CapsuleButton.vue";

export default {
  components: {
    CapsuleButton,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Yeti Yumyums Freeze Dried Candy: Peach Gummies",
          price: "$14.99",
          image: "choclate.jpg",
          category: "Choclates & Treats",
        },
        {
          id: 2,
          name: "Yeti Yumyums Freeze Dried Candy: Gummy Bears",
          price: "$15.99",
          image: "choclate.jpg",
          category: "Choclates & Treats",
        },
        {
          id: 3,
          name: "Yeti Yumyums Freeze Dried Candy: Gummy Worms",
          price: "$15.99",
          image: "choclate.jpg",
          category: "Choclates & Treats",
        },
        {
          id: 4,
          name: "Yeti Yumyums Freeze Dried Candy: Jolly Drops",
          price: "$17.99",
          image: "choclate.jpg",
          category: "Choclates & Treats",
        },
        {
          id: 5,
          name: "Yeti Yumyums Freeze Dried Candy: Rainbow Drops",
          price: "$14.99",
          image: "choclate.jpg",
          category: "Choclates & Treats",
        },
        {
          id: 6,
          name: "Donation",
          price: "",
          image: "speciality.jpg",
          category: "Speciality",
        },
        {
          id: 7,
          name: "Gourmet Mexican Vanilla",
          price: "$24.99",
          image: "otherfood.jpg",
          category: "Other Food",
        },
        {
          id: 8,
          name: "Reggae Spice Ultimate Grilling Kit",
          price: "$50.00",
          image: "otherfood.jpg",
          category: "Other Food",
        },
        {
          id: 9,
          name: "Reggae Spice Master Grill Seasoning & Marinade Pack",
          price: "$35.00",
          image: "otherfood.jpg",
          category: "Other Food",
        },
        {
          id: 10,
          name: "Reggae Spice World Tour Marinade Pack",
          price: "$24.99",
          image: "otherfood.jpg",
          category: "Other Food",
        },
        {
          id: 11,
          name: "Gourmet Caramel Popcorn",
          price: "$25.99",
          image: "popcorn.jpg",
          category: "Popcorn",
        },
        {
          id: 12,
          name: "Gourmet Butter Popcorn",
          price: "$17.99",
          image: "popcorn.jpg",
          category: "Popcorn",
        },
        {
          id: 13,
          name: "Gourmet Cheese Popcorn",
          price: "$22.99",
          image: "popcorn.jpg",
          category: "Popcorn",
        },
        {
          id: 14,
          name: "Gourmet Toffee Popcorn",
          price: "$25.99",
          image: "popcorn.jpg",
          category: "Popcorn",
        },
        {
          id: 15,
          name: "Gourmet Kettle Popcorn",
          price: "$22.99",
          image: "popcorn.jpg",
          category: "Popcorn",
        },
        {
          id: 16,
          name: "Gourmet Caramel Popcorn",
          price: "$25.99",
          image: "popcorn.jpg",
          category: "Popcorn",
        },
        {
          id: 17,
          name: "Gourmet Caramel & Cheese Mixed Popcorn",
          price: "$25.99",
          image: "popcorn.jpg",
          category: "Popcorn",
        },
      ],
      selectedCategory: "all",
    };
  },
  computed: {
    categories() {
      const allCategories = this.items.map((item) => item.category);
      return ["all", ...new Set(allCategories)];
    },
    filteredItems() {
      if (this.selectedCategory === "all") {
        return this.items;
      } else {
        return this.items.filter(
          (item) => item.category === this.selectedCategory
        );
      }
    },
  },
};
</script>
  