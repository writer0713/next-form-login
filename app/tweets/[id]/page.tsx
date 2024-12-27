import TweetDetailCard from '@/components/tweetDetailCard';
import db from '@/utils/db';
import { notFound } from 'next/navigation';

async function getTweet(id: number) {
  const tweet = db.tweet.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
        },
      },
    },
  });

  return tweet;
}

export default async function TweetDetail({
  params,
}: {
  params: { id: string };
}) {
  const tweetId = Number(params.id);
  const tweet = await getTweet(tweetId);

  if (!tweet) {
    return notFound();
  }

  return (
    <div className="mt-20 w-full min-h-screen flex flex-col gap-5 items-center justify-center p-4">
      <TweetDetailCard tweet={tweet} />
    </div>
  );
}
