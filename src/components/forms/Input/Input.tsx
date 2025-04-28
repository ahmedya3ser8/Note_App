import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TInputProps<TFieldValue extends FieldValues> = {
  label: string;
  name: Path<TFieldValue>;
  type?: string;
  register: UseFormRegister<TFieldValue>
  error: string;
}

export default function Input<TFieldValue extends FieldValues>({label, name, register, type = 'text', error}: TInputProps<TFieldValue>) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="block mb-1 text-red-500">* {label} </label>
      <input type={type} id={name} {...register(name)}  className="w-full p-2 rounded-md border border-[#ccc] outline-none focus:ring-0 focus:outline-none focus:shadow-none focus:border-[#ccc]" />
      <p className="text-red-400 text-sm font-medium mt-1">{error}</p>
    </div>
  )
}
