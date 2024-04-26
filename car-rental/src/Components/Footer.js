import React from "react";
import facebook from "../Assets/footer/facebook.png";
import instagram from "../Assets/footer/instagram.png";
import twitter from "../Assets/footer/twitter.png";

export default function Footer() {
  return (
    <div className="flex flex-col justify-between bg-onyx p-2 text-white text-center">
      <div className="my-5 md:text-lg">
        <ul className=" flex flex-row justify-between">
          <a>Nos voitures</a>
          <a>Avis de nos clients</a>
          <a>A propos de nous</a>
          <a>Contact</a>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4 p-2">
        <div>
          <p>Suivez-nous:</p>
        </div>
        <div className="flex flex-row gap-3">
          <img src={facebook} className="size-8"></img>
          <img src={instagram} className="size-8"></img>
          <img src={twitter} className="size-8"></img>
        </div>
      </div>
      <div className="text-center mt-3 ">
        (Ce site est un site de démonstration)
      </div>
    </div>
  );
}
