import { getKv } from "./kv.ts";

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  picture?: string;
  provider: "google";
}

// The browser only ever holds a random session ID. Who that ID belongs to is
// kept server-side in KV, so a hand-made cookie can't claim to be anyone.
export const SESSION_COOKIE = "session";
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // seconds

interface StoredSession {
  user: SessionUser;
  expiresAt: number;
}

const sessionKey = (id: string) => ["sessions", id];
const isSessionId = (id: string) => /^[0-9a-f]{64}$/.test(id);

export async function createSession(user: SessionUser): Promise<string> {
  const bytes = crypto.getRandomValues(new Uint8Array(32));
  const id = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  const kv = await getKv();
  const session: StoredSession = {
    user,
    expiresAt: Date.now() + SESSION_MAX_AGE * 1000,
  };
  await kv.set(sessionKey(id), session, { expireIn: SESSION_MAX_AGE * 1000 });
  return id;
}

export async function getSessionUser(id: string | undefined): Promise<SessionUser | null> {
  if (!id || !isSessionId(id)) return null;
  const kv = await getKv();
  const { value } = await kv.get<StoredSession>(sessionKey(id));
  // KV removes expired keys lazily, so check the expiry ourselves too.
  if (!value || value.expiresAt < Date.now()) return null;
  return value.user;
}

export async function deleteSession(id: string | undefined): Promise<void> {
  if (!id || !isSessionId(id)) return;
  const kv = await getKv();
  await kv.delete(sessionKey(id));
}

// Admins are listed by email in the ADMIN_EMAIL env var (comma-separated).
export function isAdminEmail(email: string | undefined | null): boolean {
  if (!email) return false;
  const adminEmails = (import.meta.env.ADMIN_EMAIL ?? "")
    .split(",")
    .map((e: string) => e.trim())
    .filter(Boolean);
  return adminEmails.includes(email);
}
