import { createRouter, createWebHistory } from "vue-router";
import routes from "./modules/_index";
import guards from "./guards/_index";

const router = createRouter({
  history: createWebHistory(),
  routes
});

guards.forEach(guard => {
  guard(router);
});

export default router;
