import getTweets from '@/actions/getTweetsAction';
import AddTweet from '@/components/addTweet';
import TweetList from '@/components/tweetList';

export default async function Home() {
  const initialTweets = await getTweets();
  return (
    <div className="mt-20 w-full min-h-screen flex flex-col gap-5 items-center justify-center p-4">
      {/* add tweet */}
      <AddTweet />

      {/* tweets */}
      <TweetList initialTweets={initialTweets} />
    </div>
  );
}
