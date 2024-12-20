'use client';

import loginAction from '@/actions/loginAction';
import Button from '@/components/button';
import Input from '@/components/input';
import SuccessMessage from '@/components/successMessage';
import { Flame } from 'lucide-react';
import { useFormState } from 'react-dom';

export default function Login() {
  const [state, action] = useFormState(loginAction, null);
  return (
    <div className="w-[400px] mx-auto">
      <div className="flex justify-center items-center h-32">
        <Flame size={40} className="text-red-500 font-extrabold" />
      </div>
      <form action={action} className="flex flex-col gap-3 items-center">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          errors={state?.fieldErrors.email}
        />
        <Input
          type="text"
          name="username"
          placeholder="username"
          errors={state?.fieldErrors.username}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          errors={state?.fieldErrors.password}
        />

        <Button />

        {state === undefined && <SuccessMessage />}
      </form>
    </div>
  );
}
