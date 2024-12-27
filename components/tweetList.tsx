'use client';

import TweetBriefCard from './tweetBriefCard';
import { useEffect, useState } from 'react';
import getTweets, { Tweet } from '@/actions/getTweetsAction';

export default function TweetList({ initialTweets }: { initialTweets: Tweet }) {
  const [tweets, setTweets] = useState<Tweet>([...initialTweets]);
  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  async function handleClickPrevButton() {
    if (page === 0) {
      return;
    }

    const tweets = await getTweets(page - 1);
    setPage((prev) => prev - 1);
    setTweets([...tweets]);

    setIsLastPage(false);
  }

  async function handleClickNextButton() {
    const tweets = await getTweets(page + 1);
    if (tweets.length !== 0) {
      setPage((prev) => prev + 1);
      setTweets([...tweets]);
      return;
    }

    setIsLastPage(true);
  }

  return (
    <>
      {tweets?.map((tweet, index) => {
        return <TweetBriefCard key={index} tweet={tweet} />;
      })}

      <div className="max-w-md w-full flex justify-between">
        <button
          onClick={handleClickPrevButton}
          disabled={page === 0}
          className="bg-white px-4 py-2 rounded-full shadow-xl hover:bg-slate-50 active:bg-slate-100 disabled:opacity-30"
        >
          Prev
        </button>
        <button
          onClick={handleClickNextButton}
          disabled={isLastPage}
          className="bg-white px-4 py-2 rounded-full shadow-xl hover:bg-slate-50 active:bg-slate-100 disabled:opacity-30"
        >
          Next
        </button>
      </div>
    </>
  );
}
