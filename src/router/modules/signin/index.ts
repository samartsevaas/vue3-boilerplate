import { RouteRecordRaw } from "vue-router";
import { Routes } from "@/shared/types/router/Routes.types";

const SigninModule = [
  {
    name: Routes.SIGNIN,
    path: "/signin",
    meta: {
      title: "Signin"
    },
    component: () => import("@/views/ViewSignin.vue")
  }
] as RouteRecordRaw[];

export default SigninModule;
