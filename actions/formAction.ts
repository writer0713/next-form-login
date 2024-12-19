'use server';

import { delay } from '@/utils/delay';

interface state {
  success: boolean;
  message: string;
}

export default async function formAction(
  prevState: state | null,
  formData: FormData
) {
  await delay(2500);

  const password = formData.get('password') as string;

  if (!isValid(password)) {
    return {
      success: false,
      message: 'Wrong password',
    };
  }

  return {
    success: true,
    message: 'Welcome back!',
  };
}

function isValid(password: string): boolean {
  return password === '12345';
}
