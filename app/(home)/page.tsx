import CustomLink from '@/components/link';
import getSession from '@/utils/session';

export default async function Home() {
  const session = await getSession();
  const isLoggedIn = !!session.id;

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-800">Welcome</h1>
        <p className="text-slate-600">
          Please sign in to continue using our services
        </p>
        {!isLoggedIn && (
          <div className="flex justify-around ">
            <CustomLink url="/login" text="Login" />
            <CustomLink url="/create-account" text="Signup" />
          </div>
        )}

        {isLoggedIn && (
          <div className="flex justify-center ">
            <CustomLink url="/profile" text="Profile" />
          </div>
        )}
      </div>
    </div>
  );
}
