import getTweets from '@/actions/getTweetsAction';
import TweetList from '@/components/tweetList';

export default async function Home() {
  const page = 0;
  const initialTweets = await getTweets(page);
  return (
    <div className="mt-20 w-full min-h-screen flex flex-col gap-5 items-center justify-center p-4">
      {/* tweets */}
      <TweetList initialTweets={initialTweets} />
    </div>
  );
}
