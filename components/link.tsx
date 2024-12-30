import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CustomLink({
  url,
  text,
}: {
  url: string;
  text: string;
}) {
  return (
    <Link href={url} className="primary-button group">
      {text}
    </Link>
  );
}
