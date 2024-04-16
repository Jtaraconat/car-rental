import React from "react";

export default function DisplayButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-solid rounded-full border-slate-400 p-2 w-40 text-xl hover:bg-celBlue100 hover:text-white all-transition w-full"
    >
      Afficher les {text}
    </button>
  );
}
