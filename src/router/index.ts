import { createRouter, createWebHistory } from "vue-router";
import routes from "./modules/_index";
import { middlewareGuard } from "./guards/middleware.guard";
import { setTitleGuard } from "./guards/set-title.guard";

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Guards
middlewareGuard(router);
setTitleGuard(router);

export default router;
