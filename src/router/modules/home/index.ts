import { RouteRecordRaw } from "vue-router";
import { Routes } from "@/shared/types/router/Routes.types";

const HomeModule = [
  {
    name: Routes.HOME,
    path: "/",
    meta: {
      title: "Home"
    },
    component: () => import("@/views/ViewHome.vue")
  }
] as RouteRecordRaw[];

export default HomeModule;
