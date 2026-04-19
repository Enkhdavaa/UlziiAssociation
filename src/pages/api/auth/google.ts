/// <reference types="astro/client" />

import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect }) => {
  const params = new URLSearchParams({
    client_id: import.meta.env.GOOGLE_CLIENT_ID,
    redirect_uri: `${import.meta.env.SITE_URL}/api/auth/callback/google`,
    response_type: "code",
    scope: "openid email profile",
    access_type: "online",
  });

  return redirect(
    `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
  );
};
