import { defineMiddleware } from "astro:middleware";
import { SESSION_COOKIE, getSessionUser } from "./lib/auth.ts";

// Look up the signed-in user once per request; pages and API routes read it
// from `locals.user` instead of trusting any cookie contents.
export const onRequest = defineMiddleware(async (context, next) => {
  context.locals.user = context.isPrerendered
    ? null
    : await getSessionUser(context.cookies.get(SESSION_COOKIE)?.value);
  return next();
});
