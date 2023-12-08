<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <div class="mb-4">
        <label for="email" class="block text-gray-600 font-medium"
          >Email:</label
        >
        <input
          v-model="username"
          type="text"
          id="email"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-600 font-medium"
          >Password:</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div class="mb-4">
        <input
          type="checkbox"
          id="rememberMe"
          class="text-blue-500 rounded mr-2"
        />
        <label for="rememberMe" class="text-gray-600">Remember Me</label>
      </div>
      <div class="flex justify-end">
        <p class="flex items-center px-2 underline cursor-pointer">
          Forgot your password?
        </p>
        <button
          @click="setCredentials"
          class="bg-gray-600 hover:bg-gray-500 text-white font-medium py-2 px-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    credentials() {
      return this.$store.getters.getCredentials;
    },
  },
  methods: {
    setCredentials() {
      const credentials = {
        username: this.username,
        password: this.password,
      };

      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      })
        .then((user) => user.json())
        .then((user) => {
          this.$store.dispatch("setCredentials", {
            credentials: user,
          });
        });
    },
  },
};
</script>