import { RouteRecordRaw } from "vue-router";
import { Routes } from "@/shared/types/router/Routes.types";

const ForbiddenModule = [
  {
    name: Routes.FORBIDDEN,
    path: "/forbidden",
    meta: {
      title: "FORBIDDEN"
    },
    component: () => import("@/views/ViewForbidden.vue")
  }
] as RouteRecordRaw[];

export default ForbiddenModule;
