'use server';

import { delay } from '@/utils/delay';
import { z } from 'zod';

function shouldContainAtLeastOneNumber(password: string) {
  return /\d/.test(password);
}

const formSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/@zod.com$/, 'Only @zod.com emails are allowed'),
  username: z
    .string()
    .trim()
    .min(5, 'Username should be at least 5 characters long'),
  password: z
    .string()
    .trim()
    .min(10, 'Password should be at least 10 characters long')
    .refine(
      shouldContainAtLeastOneNumber,
      'Password should contain at least one number'
    ),
});

export default async function loginAction(prevState: any, formData: FormData) {
  await delay(1000);

  const data = Object.fromEntries(formData);
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return result.error?.flatten();
  }

  console.log(result.data);
}
