import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

interface SessionContent {
  id?: number;
}

export default async function getSession() {
  const session = await getIronSession<SessionContent>(cookies(), {
    cookieName: 'my-own-cookie',
    password: process.env.COOKIE_PASSWORD!,
  });

  return session;
}

export async function saveSession(id: number) {
  const session = await getSession();
  session.id = id;
  await session.save();
}

export async function clearSession() {
  const session = await getSession();
  await session.destroy();
}

export async function isInvalidSession() {
  const session = await getSession();
  return !session.id;
}

export async function getUserIdFromSession() {
  const session = await getSession();
  return session.id;
}
