import React from "react";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between w-full p-3 items-center bg-gradient-to-r from-white from-25% via-red-500 via-50% to-violet-600">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl tracking-wide font-bold underline italic text-violet-600">
          Auto-Loc
        </h1>
      </div>

      <div className="flex-initial space-x-4 text-white text-lg">
        <a>Nos voitures</a>
        <a>Avis de nos clients</a>
        <a>A propos de nous</a>
        <a>Contact</a>
      </div>
    </nav>
  );
}
