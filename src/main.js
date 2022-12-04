import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store/index'
import setupInterceptors from './services/setupInterceptors';

import "./assets/css/index.css";
setupInterceptors(store);

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
