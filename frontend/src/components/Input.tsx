interface InputProps {
  placeholder: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reference?: any;
}

export function Input({ placeholder, reference }: InputProps) {
  return (
    <div>
      <input
        ref={reference}
        placeholder={placeholder}
        className="px-4 py-2 border rounded border-slate-700"
        type="text"
      />
    </div>
  );
}
