import React from "react";

export default function Input({
  label,
  id,
  type,
  placeholder,
  name,
  errorMessage,
  onchange,
}) {
  return (
    <div className="col-span-12 flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onchange}
      ></input>
      <p className="text-red-500">{errorMessage}</p>
    </div>
  );
}
