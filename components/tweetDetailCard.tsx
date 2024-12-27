'use client';

import { MoveLeft, Share, ThumbsUp, User } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Tweet {
  id: number;
  tweet: string;
  created_at: Date;
  updated_at: Date;
  user: {
    username: string;
  };
  user_id: number;
}

function formatDate(date: Date) {
  const dayInMilliseconds = 1000 * 60 * 60 * 24;
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diff = Math.round((time - now) / dayInMilliseconds);
  const formatter = new Intl.RelativeTimeFormat('ko');
  return formatter.format(diff, 'days');
}

export default function TweetDetailCard({ tweet }: { tweet: Tweet }) {
  const router = useRouter();
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full space-y-6">
      <div className="w-full">
        <button
          onClick={() => router.back()}
          className="flex gap-3 items-center"
        >
          <MoveLeft size={15} />
          <span className="text-sm">Back</span>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <User size={40} className="border-2 border-slate-800 rounded-full" />
        <div className="flex flex-col">
          <p className="font-bold">{tweet.user.username}</p>
          <p>{formatDate(tweet.created_at)}</p>
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col items-center justify-center gap-5">
        <p className="text-slate-600">{tweet.tweet}</p>
        <Image
          unoptimized
          src={`https://picsum.photos/id/${tweet.id}/300/200`}
          width={300}
          height={200}
          alt="tweet_image"
          className="w-full rounded-md object-cover"
        />
      </div>

      <div className="flex justify-between gap-2">
        <button className="w-full border py-2 flex justify-center items-center gap-3 hover:bg-slate-100 transition duration-250">
          <ThumbsUp size={15} />
          Like
        </button>
        <button className="w-full border py-2 flex justify-center items-center gap-3 hover:bg-slate-100 transition duration-250">
          <Share size={15} />
          Share
        </button>
      </div>
    </div>
  );
}
