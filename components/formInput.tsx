interface FormInputProps {
  type: string;
  name: string;
  placeholder: string;
}

export default function FormInput({ type, name, placeholder }: FormInputProps) {
  return (
    <input
      className="w-full h-12 border-2 border-slate-300 focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 rounded-full pl-6 outline-none placeholder:font-semibold invalid:border-red-500"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}
