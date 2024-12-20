import { InputHTMLAttributes } from 'react';

interface FormInputProps {
  name: string;
  errors?: string[];
}

export default function Input({
  name,
  errors = [],
  ...inputProps
}: FormInputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        className="w-full h-12 border-2 border-slate-300 focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 rounded-full pl-6 outline-none placeholder:font-semibold invalid:border-red-500"
        name={name}
        {...inputProps}
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
