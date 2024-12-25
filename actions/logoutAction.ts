'use server';

import { clearSession } from '@/utils/session';
import { redirect } from 'next/navigation';

export default async function logoutAction() {
  console.log('Logging out...');
  await clearSession();
  redirect('/');
}
