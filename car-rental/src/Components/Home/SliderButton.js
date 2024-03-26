import React from "react";

export default function SliderButton({ buttonLabel, onClick }) {
  return (
    <button
      className="bg-white rounded-lg border border-solid border-2 text-slate-600 border-slate-600 hover:bg-violet-600 hover:text-white p-3 col-span-1 w-full transition-all"
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
}
