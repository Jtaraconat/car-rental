import React from "react";

export default function HideButton({ text, onClick }) {
  return (
    <button
      className="border border-solid rounded-full border-slate-400 p-2 w-40 text-xl hover:bg-bitterRed100 hover:text-white all-transition w-full"
      onClick={onClick}
    >
      Masquer les {text}
    </button>
  );
}
