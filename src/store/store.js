import { createStore } from 'vuex';
import VuexPersist from 'vuex-persist';
import axios from 'axios';

const vuexLocalStorage = new VuexPersist({
    key: 'my-app',
    storage: window.localStorage,
});

const store = createStore({
    state() {
        return {
            credentials: null,
            Products: [],
            SelectedProducts: []
        };
    },
    mutations: {
        setCredentials(state, credentials) {
            state.credentials = credentials;
        },
        setProducts(state, product) {
            state.Products = product;
        },
        selectedProducts(state, product) {
            state.SelectedProducts.push(product);
        },
        removeProduct(state, productId) {
            state.SelectedProducts = state.SelectedProducts.filter(p => p.id !== productId);
        },
        incrementQuantity(state, productId) {
            const product = state.SelectedProducts.find(p => p.id === productId);
            if (product) {
                product.quantity += 1;
                state.SelectedProducts.push(product)
            }
        },
        decrementQuantity(state, productId) {
            const product = state.SelectedProducts.find(p => p.id === productId);
            if (product) {
                product.quantity -= 1;
                state.SelectedProducts.pop(product)
            }
        },
    },
    actions: {
        setCredentials: ({ commit }, credential) => {
            commit('setCredentials', credential);
        },
        async fetchProducts({ commit }) {
            try {
                const response = await axios.get('https://dummyjson.com/products');
                commit('setProducts', response.data.products);
                console.log(response.data.products, 'Fetching products');
            }
            catch (error) {
                console.error('Error Fetching Products', error);
            }
        },
        async selectProducts({ commit }, product) {
            try {
                commit('selectedProducts', product)
            }
            catch (error) {
                console.error('Error Selecting Products', error)
            }
        }
    },
    getters: {
        getCredentials: (state) => state.credentials,
    },
    plugins: [vuexLocalStorage.plugin],
});

export default store;