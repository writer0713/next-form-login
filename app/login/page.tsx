'use client';

import loginAction from '@/actions/loginAction';
import Button from '@/components/button';
import Input from '@/components/input';
import CustomLink from '@/components/link';
import Logo from '@/components/logo';
import { useFormState } from 'react-dom';

export default function Login() {
  const [state, action] = useFormState(loginAction, null);
  return (
    <div className="w-[400px] mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <Logo />
        <form action={action} className="flex flex-col gap-3 items-center">
          <Input
            type="text"
            name="username"
            placeholder="username"
            autoComplete="off"
            errors={state?.fieldErrors.username}
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            autoComplete="off"
            errors={state?.fieldErrors.password}
          />

          <div className="w-full flex gap-2 justify-between items-center mt-5">
            <Button text="login" />
            <CustomLink url="/create-account" text="signup" />
          </div>
        </form>
      </div>
    </div>
  );
}
