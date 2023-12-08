import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routes';
import store from './store/store'; 
import Toaster from "@meforma/vue-toaster";

createApp(App)
  .use(store)
  .use(router)
  .use(Toaster)
  .mount('#app');
