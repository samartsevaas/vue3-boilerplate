import { Router } from "vue-router";

export type Guard = (router: Router) => void;

export type Meta = {
  title: string;
};
