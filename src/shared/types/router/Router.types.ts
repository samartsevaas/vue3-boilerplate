import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export type MiddlewareContext = {
  to: RouteLocationNormalized;
  from: RouteLocationNormalized;
  next: NavigationGuardNext;
  nextMiddleware: () => void;
};

export type Middleware = (context: MiddlewareContext) => void;
