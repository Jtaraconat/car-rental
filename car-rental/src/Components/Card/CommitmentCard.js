import React from "react";
import { about } from "../../Utils/About";

export default function CommitmentCard() {
  return about.map((commit) => {
    return (
      <div className="my-3 col-span-6 md:col-span-4" key={commit.title}>
        <div className="flex flex-row justify-center">
          <img
            src={commit.image}
            className="size-20 justify-items-center"
          ></img>
        </div>
        <h2 className="text-xl text-center mb-2">{commit.title}</h2>

        <p className="text-sm text-center">{commit.description}</p>
      </div>
    );
  });
}
