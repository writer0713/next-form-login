'use server';

import db from '@/utils/db';
import { saveSession } from '@/utils/session';
import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const findUserBy = async (username: string, password: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
      password: true,
    },
  });

  if (user === null) {
    return null;
  }

  const passwordMatches = bcrypt.compareSync(password, user.password);
  if (!passwordMatches) {
    return null;
  }

  return { id: user.id };
};

const formSchema = z.object({
  username: z
    .string()
    .trim()
    .min(5, 'at least 5 characters')
    .max(10, 'at most 10 characters'),
  password: z
    .string()
    .trim()
    .min(6, 'at least 6 characters')
    .max(10, 'at most 10 characters'),
});

export default async function loginAction(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData);
  const result = await formSchema.spa(data);

  if (!result.success) {
    return result.error?.flatten();
  }

  // validate with username and password
  const user = await findUserBy(result.data.username, result.data.password);

  if (user === null) {
    return {
      fieldErrors: {
        email: [],
        username: [],
        password: ['username or password is incorrect'],
        confirmPassword: [],
      },
    };
  }

  await saveSession(user.id);

  redirect('/');
}
