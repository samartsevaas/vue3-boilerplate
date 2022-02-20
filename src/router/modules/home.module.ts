import { RouteRecordRaw } from "vue-router";
import Title from "/@/shared/types/Titles.types";

export default {
  path: "/",
  component: () =>
    import(
      /* webpackChunkName: "dashboard-layout" */ "/@layouts/Dashboard.vue"
    ),
  meta: {
    title: Title.HOME
  },
  children: [
    {
      name: "home",
      path: "",
      component: () =>
        import(/* webpackChunkName: "home-page" */ "/@views/ViewHome.vue")
    }
  ]
} as RouteRecordRaw;
