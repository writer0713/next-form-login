import Link from 'next/link';

export default function Header() {
  return (
    <div className="px-10 flex items-center gap-14 fixed top-0 left-0 right-0 bg-[#1F2A37] h-16 *:text-slate-300">
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
    </div>
  );
}
