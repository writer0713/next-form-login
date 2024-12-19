'use client';

import formAction from '@/actions/formAction';
import FailureMessage from '@/components/failureMessage';
import FormButton from '@/components/formButton';
import FormInput from '@/components/formInput';
import SuccessMessage from '@/components/successMessage';
import { BadgeCheck, Flame } from 'lucide-react';
import { useActionState, useRef } from 'react';

export default function Login() {
  const [state, action] = useActionState(formAction, null);

  return (
    <div className="w-[400px] mx-auto">
      <div className="flex justify-center items-center h-32">
        <Flame size={40} className="text-red-500 font-extrabold" />
      </div>
      <form action={action} className="flex flex-col gap-3 items-center">
        <FormInput type="email" name="email" placeholder="Email" />
        <FormInput type="text" name="username" placeholder="username" />
        <FormInput type="password" name="password" placeholder="password" />

        {state?.success === false && <FailureMessage message={state.message} />}

        <FormButton />

        {state?.success && <SuccessMessage message={state.message} />}
      </form>
    </div>
  );
}
