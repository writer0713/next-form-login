export default function FailureMessage({ message }: { message: string }) {
  return (
    <p className="text-red-500 font-bold text-sm self-start ml-2">{message}</p>
  );
}
