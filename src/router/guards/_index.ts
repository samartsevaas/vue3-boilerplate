import { Router } from "vue-router";

type Guard = (router: Router) => void;

const files = import.meta.globEager("./*.guard.ts");
const routes: Guard[] = [];

Object.keys(files).forEach((path, index) => {
  routes[index] = files[path].default;
});

export default routes;
