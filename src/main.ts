import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { injectRouter } from "@/shared/configs/pinia";

import "@/assets/styles/style.css";

// Initial pinia store
const store = createPinia();

const app = createApp(App);

// Plugins

app.use(store);
app.use(router);
store.use(injectRouter);

app.mount("#app");
