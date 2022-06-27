import { RouteRecordRaw } from "vue-router";
import { Routes } from "@/shared/types/router/Routes.types";

const NotFoundModule = [
  {
    name: Routes.NOTFOUND,
    path: "/:catchAll(.*)",
    meta: {
      title: "404 | NOT FOUND"
    },
    component: () => import("@/views/ViewNotFound.vue")
  }
] as RouteRecordRaw[];

export default NotFoundModule;
