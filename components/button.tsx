'use client';

import { useFormStatus } from 'react-dom';

export default function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full h-12 border-2 rounded-full bg-slate-300 font-extrabold hover:bg-slate-200 active:scale-90 active:bg-slate-400 transition duration-300 disabled:text-white disabled:cursor-not-allowed mt-5"
      disabled={pending}
      type="submit"
    >
      {pending ? 'Loading...' : 'Log in'}
    </button>
  );
}
