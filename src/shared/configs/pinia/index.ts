import { PiniaPluginContext } from "pinia";
import router from "@/router";

export const injectRouter = ({ store }: PiniaPluginContext) => {
  store.router = markRaw(router);
};
