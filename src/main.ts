import { createApp, markRaw } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "vue-query";
import { VueQueryOptions } from "./shared/query-plugin/config";

import "./styles/styles.scss";

// Initial pinia store
const store = createPinia();

store.use(({ store }) => {
  store.router = markRaw(router);
});

const app = createApp(App);

// Plugins

app.use(store);
app.use(router);
app.use(VueQueryPlugin, VueQueryOptions);

app.mount("#app");
