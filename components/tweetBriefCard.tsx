import { User } from 'lucide-react';
import Link from 'next/link';

interface Tweet {
  user: {
    username: string;
  };
  id: number;
  tweet: string;
}

export default function TweetBriefCard({ tweet }: { tweet: Tweet }) {
  const tweetId = tweet.id;
  return (
    <Link
      href={`/tweets/${tweetId}`}
      className="hover:opacity-20 transition duration-200"
    >
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-[448px] space-y-6">
        <div className="flex items-center gap-3">
          <User size={40} className="border-2 border-slate-800 rounded-full" />
          <div className="flex flex-col">
            <p className="font-bold">{tweet.user.username}</p>
          </div>
        </div>
        <p>No: {tweet.id}</p>
        <p className="text-slate-600">{tweet.tweet.substring(0, 70)} ....</p>
      </div>
    </Link>
  );
}
