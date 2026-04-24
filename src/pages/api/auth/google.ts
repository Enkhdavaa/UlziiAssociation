/// <reference types="astro/client" />

import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect, url, cookies }) => {
  const state = crypto.randomUUID();

  cookies.set("oauth_state", state, {
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: "lax",
    secure: import.meta.env.PROD,
  });

  const params = new URLSearchParams({
    client_id: import.meta.env.GOOGLE_CLIENT_ID,
    redirect_uri: `${url.origin}/api/auth/callback/google`,
    response_type: "code",
    scope: "openid email profile",
    access_type: "online",
    state,
  });

  return redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
  );
};
