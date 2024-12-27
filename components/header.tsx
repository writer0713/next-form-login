import { clearSession, isValidSession } from '@/utils/session';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function logout() {
  'use server';
  await clearSession();

  redirect('/');
}

export default async function Header() {
  const isLoggedIn = await isValidSession();
  return (
    <div className="w-full px-10 flex items-center gap-14 fixed top-0 left-0 right-0 bg-[#1F2A37] h-16 *:text-slate-300 z-50">
      <Link
        href="/"
        className="font-bold hover:text-white transition duration-200"
      >
        Home
      </Link>
      <Link
        href="/profile"
        className="font-bold hover:text-white transition duration-200"
      >
        profile
      </Link>
      {isLoggedIn && (
        <form action={logout}>
          <button className="font-bold hover:text-white transition duration-200">
            logout
          </button>
        </form>
      )}
    </div>
  );
}
