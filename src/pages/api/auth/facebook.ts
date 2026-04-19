import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect }) => {
  const params = new URLSearchParams({
    client_id: import.meta.env.FACEBOOK_APP_ID,
    redirect_uri: `${import.meta.env.SITE_URL}/api/auth/callback/facebook`,
    scope: "email,public_profile",
    response_type: "code",
  });

  return redirect(
    `https://www.facebook.com/v18.0/dialog/oauth?${params.toString()}`,
  );
};
