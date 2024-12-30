import logoutAction from '@/actions/logoutAction';
import db from '@/utils/db';
import { getUserIdFromSession } from '@/utils/session';

const findUserById = async (id: number) => {
  const user = await db.user.findUnique({
    where: {
      id,
    },
    select: {
      username: true,
    },
  });

  return user;
};

export default async function Profile() {
  const userId = await getUserIdFromSession();
  const user = await findUserById(Number(userId));

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-800">Profile</h1>
        <p className="text-slate-600">
          Welcome!{' '}
          <span className="font-bold text-red-500">{user?.username}</span>
        </p>
        <form action={logoutAction} className="flex justify-center">
          <button className="primary-button">Logout</button>
        </form>
      </div>
    </div>
  );
}
