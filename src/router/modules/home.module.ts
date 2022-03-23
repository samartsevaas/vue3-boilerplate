import { RouteRecordRaw } from "vue-router";
import PAGE_TITLE from "/@/shared/types/Title.types";

const HomeModule = [
  {
    name: "home",
    path: "/",
    meta: {
      title: PAGE_TITLE.HOME
    },
    component: () => import(/* webpackChunkName: "home-page" */ "/@views/ViewHome.vue")
  }
] as RouteRecordRaw[];

export default HomeModule;
