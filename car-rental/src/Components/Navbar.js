import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="grid grid-cols-12 md:flex md:flex-row justify-between w-full p-3 items-center mb-5">
      <div className="col-span-12 md:flex md:flex-col items-center mb-3">
        <Link to={"/"}>
          <h1 className="text-4xl tracking-wide font-bold underline italic text-celBlue100">
            Auto-Loc
          </h1>
        </Link>
      </div>

      <div className="col-span-12 text-sm md:flex-initial space-x-4 text-lg">
        <a>Nos voitures</a>
        <a>A propos de nous</a>
        <a>Contact</a>
      </div>
    </nav>
  );
}
