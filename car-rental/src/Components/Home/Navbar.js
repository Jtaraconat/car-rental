import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between w-full p-3 items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl tracking-wide font-bold underline italic text-purple-800">
          Car-Loc
        </h1>
      </div>

      <div className="flex-initial space-x-4">
        <a>Nos voitures</a>
        <a>Avis de nos clients</a>
        <a>A propos de nous</a>
        <a>Contact</a>
      </div>
    </nav>
  );
}
