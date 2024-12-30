'use client';

import addTweetAction from '@/actions/addTweetAction';
import { useRef } from 'react';
import { useFormState } from 'react-dom';
import Button from './button';
import TextArea from './textarea';

export default function AddTweet() {
  const [state, action] = useFormState(addTweetAction, null);
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
      ref={ref}
      className="max-w-md w-full flex flex-col gap-3"
    >
      <TextArea
        name="tweet"
        placeholder="write your thoughts!"
        rows={4}
        errors={state?.fieldErrors.tweet}
      />

      <div className="flex justify-end">
        <Button text="Tweet" />
      </div>
    </form>
  );
}
