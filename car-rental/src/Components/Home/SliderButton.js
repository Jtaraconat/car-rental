import React from "react";

export default function SliderButton({ buttonLabel, onClick }) {
  return (
    <button
      className="rounded-lg border border-1 border-slate-500 bg-transparent text-black text-lg p-3 col-span-1 w-full hover:bg-celBlue100 hover:text-white transition-all"
      onClick={onClick}
    >
      {buttonLabel}
    </button>
  );
}
