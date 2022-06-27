import { Router } from "vue-router";
import middlewarePipeline from "@/router//middlewares/middleware-pipeline";
import { MiddlewareContext } from "@/shared/types/router/Router.types";

export const middlewareGuard = (router: Router) => {
  router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
      return next();
    }
    const middleware = to.meta.middleware;
    const context: MiddlewareContext = {
      to,
      from,
      next,
      nextMiddleware: () => 0
    };

    return middleware[0]({
      ...context,
      nextMiddleware: middlewarePipeline(context, middleware, 1)
    });
  });
};
