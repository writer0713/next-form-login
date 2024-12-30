'use server';

import db from '@/utils/db';
import { Prisma } from '@prisma/client';

export default async function getTweets(skip: number = 0) {
  const tweets = await db.tweet.findMany({
    orderBy: [
      {
        created_at: 'desc',
      },
    ],
    skip: skip * 5,
    take: 5,
    select: {
      id: true,
      tweet: true,
      user: {
        select: {
          username: true,
        },
      },
    },
  });

  return tweets;
}

export type Tweet = Prisma.PromiseReturnType<typeof getTweets>;
