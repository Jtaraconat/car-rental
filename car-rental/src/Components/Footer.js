import React from "react";

export default function Footer() {
  return (
    <div className="bg-zinc-950 h-96 self-end">
      <div className="flex flex-row justify-between">
        <div className="flex text-white">
          <ul className="flex flex-col">
            <a>Nos voitures</a>
            <a>Avis de nos clients</a>
            <a>A propos de nous</a>
            <a>Contact</a>
          </ul>
        </div>
      </div>
      <div className="text-white text-center mt-3">
        (Ce site est un site de démonstration)
      </div>
    </div>
  );
}
