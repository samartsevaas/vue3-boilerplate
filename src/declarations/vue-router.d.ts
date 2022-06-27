import { Middleware } from "@/shared/types/router/Router.types";
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string;
    middleware?: FunctionConstructor<Middleware[]>;
  }
}
