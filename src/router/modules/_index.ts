import { RouteRecordRaw } from "vue-router";

const files = import.meta.globEager("./*.module.ts");
const routes: RouteRecordRaw[] = [];

Object.keys(files).forEach((path, index) => {
  routes[index] = files[path].default;
});

export default routes;
