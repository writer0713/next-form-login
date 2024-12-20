import { BadgeCheck } from 'lucide-react';

export default function SuccessMessage() {
  return (
    <div className="bg-green-500 flex items-center w-full h-12 rounded-xl px-8">
      <p className="w-full flex justify-start items-center gap-3 ">
        <BadgeCheck className="size-5" />
        Welcome back!
      </p>
    </div>
  );
}
