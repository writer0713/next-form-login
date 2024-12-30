'use client';

import { useFormStatus } from 'react-dom';

export default function Button({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button className="primary-button" disabled={pending} type="submit">
      {pending ? 'Loading...' : text}
    </button>
  );
}
