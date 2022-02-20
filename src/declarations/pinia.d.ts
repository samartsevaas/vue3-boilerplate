import "pinia";
import { Router } from "vue-router";

declare module "pinia" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface PiniaCustomProperties {
    router: Router;
  }
}
