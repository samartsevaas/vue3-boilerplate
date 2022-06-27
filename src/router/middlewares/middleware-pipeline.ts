import { Middleware, MiddlewareContext } from "@/shared/types/router/Router.types";

function middlewarePipeline(context: MiddlewareContext, middleware: Middleware[], index: number) {
  const nextMiddleware = middleware[index];
  if (!nextMiddleware) {
    return context.next;
  }

  return () => {
    const nextPipeline = middlewarePipeline(context, middleware, index + 1);
    nextMiddleware({ ...context, nextMiddleware: nextPipeline });
  };
}
export default middlewarePipeline;
