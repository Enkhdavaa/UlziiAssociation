import type { APIRoute } from "astro";
import { deleteSession, SESSION_COOKIE } from "../../../lib/auth.ts";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  await deleteSession(cookies.get(SESSION_COOKIE)?.value);
  cookies.delete(SESSION_COOKIE, { path: "/" });
  cookies.delete("user", { path: "/" });
  return redirect("/login");
};
