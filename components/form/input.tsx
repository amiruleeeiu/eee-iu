"use client";

import { useFormContext } from "react-hook-form";

function Input({ name, placeholder }: { name: string; placeholder: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label htmlFor={name} className="block text-md text-gray-700 mb-1">
        {placeholder}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        {...register(name, { required: "Name is required" })}
        className="input-style"
      />

      {errors.name && (
        <p className="text-red-500 text-sm mt-1">
          {errors.name.message?.toString()}
        </p>
      )}
    </div>
  );
}

export default Input;
