import { RouteRecordRaw } from "vue-router";
import Title from "/@/shared/types/Titles.types";

export default {
  name: "notfound",
  path: "/:catchAll(.*)",
  component: () =>
    import(/* webpackChunkName: "notfound-page" */ "/@views/ViewNotFound.vue"),
  meta: {
    title: Title.NOT_FOUND
  }
} as RouteRecordRaw;
