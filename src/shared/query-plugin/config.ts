import { VueQueryPluginOptions } from "vue-query";

export const VueQueryOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchInterval: 10000,
        retry: false,
        onError(err) {
          console.error(err);
        }
      }
    }
  }
} as VueQueryPluginOptions;
