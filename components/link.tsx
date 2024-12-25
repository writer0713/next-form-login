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
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
    </Link>
  );
}
