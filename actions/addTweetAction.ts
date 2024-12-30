'use server';

import db from '@/utils/db';
import { getUserIdFromSession } from '@/utils/session';
import { z } from 'zod';

const tweetFormSchema = z.object({
  tweet: z
    .string()
    .trim()
    .min(5, 'at least 5 characters')
    .max(100, 'at most 100 characters'),
});

async function addTweet(tweet: string, userId: number) {
  const result = await db.tweet.create({
    data: {
      tweet: tweet as string,
      user: {
        connect: {
          id: userId,
        },
      },
    },
    select: {
      id: true,
    },
  });

  return result;
}

export default async function addTweetAction(_: any, formData: FormData) {
  const data = Object.fromEntries(formData);
  const result = await tweetFormSchema.spa(data);

  // validation fail
  if (!result.success) {
    return result.error?.flatten();
  }

  // validation success
  const userId = await getUserIdFromSession();

  // add tweet with userId
  await addTweet(result.data.tweet, Number(userId));
}
