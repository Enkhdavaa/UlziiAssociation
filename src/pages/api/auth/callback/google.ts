import type { APIRoute } from "astro";
import { createSession, SESSION_COOKIE, SESSION_MAX_AGE } from "../../../../lib/auth.ts";

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

    const profile = await userRes.json();

    if (!profile.id || !profile.email) {
      return redirect("/login?error=auth_failed");
    }

    const sessionId = await createSession({
      id: profile.id,
      name: profile.name,
      email: profile.email,
      picture: profile.picture,
      provider: "google",
    });

    // Sessions used to be a readable "user" cookie; clear any left over.
    cookies.delete("user", { path: "/" });
    cookies.set(SESSION_COOKIE, sessionId, {
      path: "/",
      httpOnly: true,
      maxAge: SESSION_MAX_AGE,
      sameSite: "lax",
      secure: import.meta.env.PROD,
    });

    return redirect(redirectTo);
  } catch {
    return redirect("/login?error=auth_failed");
  }
};
