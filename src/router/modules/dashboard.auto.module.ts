import { RouteRecordRaw } from "vue-router";
import HomeModule from "./home.module";

const DashboardModule = [
  {
    name: "dashboard-layout",
    path: "/",
    component: () => import(/* webpackChunkName: "dashboard-layout" */ "/@layouts/Dashboard.vue"),
    children: [...HomeModule]
  }
] as RouteRecordRaw[];

export default DashboardModule;
