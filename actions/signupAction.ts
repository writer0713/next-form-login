'use server';

import db from '@/utils/db';
import getSession, { saveSession } from '@/utils/session';
import bcrypt from 'bcrypt';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const isUniqueEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });
  return user === null;
};

const isUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
    },
  });
  return user === null;
};

const formSchema = z
  .object({
    email: z.string().email().refine(isUniqueEmail, {
      message: 'Email already exists',
    }),
    username: z
      .string()
      .min(5, 'at least 5 characters')
      .max(10, 'at most 10 characters')
      .refine(isUniqueUsername, {
        message: 'username already exists',
      }),
    password: z
      .string()
      .min(6, 'at least 6 characters')
      .max(10, 'at most 10 characters'),
    confirmPassword: z
      .string()
      .min(6, 'at least 6 characters')
      .max(10, 'at most 10 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export default async function signupAction(prevState: any, formData: FormData) {
  const form = Object.fromEntries(formData);
  const result = await formSchema.spa(form);

  ////////// validation fail
  if (!result.success) {
    return result.error?.flatten();
  }

  ////////// validation success

  // 1. check if email already exists
  // 2. check if username already exists

  // 3. hash password
  const hashedPassword = await bcrypt.hash(result.data.password, 10);

  // 4. create user
  const user = await db.user.create({
    data: {
      email: result.data.email,
      username: result.data.username,
      password: hashedPassword,
    },
    select: {
      id: true,
    },
  });

  // 5. log the user in
  await saveSession(user.id);

  // 6. redirect "/home"
  redirect('/profile');
}
