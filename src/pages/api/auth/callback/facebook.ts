import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const code = url.searchParams.get("code");

  if (!code) {
    return redirect("/login?error=no_code");
  }

  try {
    const tokenRes = await fetch(
      "https://graph.facebook.com/v18.0/oauth/access_token?" +
        new URLSearchParams({
          client_id: import.meta.env.FACEBOOK_APP_ID,
          client_secret: import.meta.env.FACEBOOK_APP_SECRET,
          redirect_uri: `${import.meta.env.SITE_URL}/api/auth/callback/facebook`,
          code,
        }),
      { method: "GET" }
    );

    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return redirect("/login?error=token_failed");
    }

    const userRes = await fetch(
      "https://graph.facebook.com/me?" +
        new URLSearchParams({
          fields: "id,name,email,picture",
          access_token: tokenData.access_token,
        })
    );

    const user = await userRes.json();

    cookies.set(
      "user",
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        picture: user.picture?.data?.url,
        provider: "facebook",
      }),
      {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
      }
    );

    return redirect("/");
  } catch {
    return redirect("/login?error=auth_failed");
  }
};
