import { Router } from "vue-router";

export const setTitleGuard = (router: Router) => {
  router.beforeEach((to, _, next) => {
    const title = to.meta.title ?? "TITLE";
    document.title = title;

    next();
  });
};
