import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

interface FormTextAreaProps {
  name: string;
  errors?: string[];
}

export default function TextArea({
  name,
  errors = [],
  ...textAreaProps
}: FormTextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <>
      <textarea
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  invalid:border-red-500"
        name={name}
        {...textAreaProps}
      />
      {errors?.map((error, index) => (
        <p
          key={index}
          className="peer text-red-500 font-bold text-sm self-start ml-2 invalid"
        >
          {error}
        </p>
      ))}
    </>
  );
}
