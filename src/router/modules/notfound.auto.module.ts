import { RouteRecordRaw } from "vue-router";
import PAGE_TITLE from "/@/shared/types/Title.types";

const NotFoundModule = [
  {
    name: "notfound",
    path: "/:catchAll(.*)",
    component: () => import(/* webpackChunkName: "notfound-page" */ "/@views/ViewNotFound.vue"),
    meta: {
      title: PAGE_TITLE.NOT_FOUND
    }
  }
] as RouteRecordRaw[];

export default NotFoundModule;
