'use client';

import Button from '@/components/button';
import Input from '@/components/input';
import Logo from '@/components/logo';
import { useFormState } from 'react-dom';
import signupAction from '../../actions/signupAction';

export default function CreateAccount() {
  const [state, action] = useFormState(signupAction, null);
  return (
    <div className="w-[400px] mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <Logo />
        <form action={action} className="flex flex-col gap-3 items-center">
          <Input
            type="text"
            name="email"
            placeholder="email"
            autoComplete="off"
            errors={state?.fieldErrors.email}
          />
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
          <Input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            autoComplete="off"
            errors={state?.fieldErrors.confirmPassword}
          />

          <Button text="Create Account" />
        </form>
      </div>
    </div>
  );
}
