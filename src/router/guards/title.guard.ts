import { Guard } from "../../shared/types/Router.types";

const titleGuard: Guard = router => {
  router.beforeEach((to, _, next) => {
    document.title = to.meta?.title as string;
    next();
  });
};

export default titleGuard;
