import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies.get("oauth_state")?.value;
  const redirectTo = cookies.get("oauth_redirect")?.value ?? "/";
  cookies.delete("oauth_state", { path: "/" });
  cookies.delete("oauth_redirect", { path: "/" });

  if (!state || state !== storedState) {
    return redirect("/login?error=invalid_state");
  }

  if (!code) {
    return redirect("/login?error=no_code");
  }

  try {
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: import.meta.env.GOOGLE_CLIENT_ID,
        client_secret: import.meta.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: `${url.origin}/api/auth/callback/google`,
        grant_type: "authorization_code",
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenData.access_token) {
      return redirect("/login?error=token_failed");
    }

    const userRes = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      }
    );

    const user = await userRes.json();

    cookies.set(
      "user",
      JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        picture: user.picture,
        provider: "google",
      }),
      {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
        secure: import.meta.env.PROD,
      }
    );

    return redirect(redirectTo);
  } catch {
    return redirect("/login?error=auth_failed");
  }
};
