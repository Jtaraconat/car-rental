import React from "react";
import CommitmentCard from "../Card/CommitmentCard";

export default function AboutSection() {
  return (
    <div className="p-5 my-10 rounded-lg border-slate-600 shadow shadow-lg shadow-slate-400">
      <h2 className="text-4xl mb-7 col-span-12 text-celBlue100 ">
        Qui sommes nous
      </h2>
      <div className="grid grid-cols-12 grid-rows-2">
        <div className="col-span-12 md:grid md:grid-cols-12 gap-2">
          <CommitmentCard />
        </div>
        <div className="text-lg col-span-12 text-center">
          <div>
            <p>
              Bienvenue chez Auto-Loc, votre solution de location de voitures de
              confiance depuis 20 ans. Chez Auto-Loc, nous nous engageons à
              fournir à nos clients une expérience de location de voitures sans
              tracas et de qualité supérieure.
              <br></br>Avec une large flotte de véhicules allant des voitures
              économiques aux SUV spacieux et aux voitures de luxe, nous
              répondons à tous vos besoins de déplacement. Notre équipe dévouée
              est là pour vous aider à choisir le véhicule parfait pour votre
              voyage, que ce soit pour un court trajet en ville ou une aventure
              sur la route.
              <br></br>Nous sommes fiers de notre service client exceptionnel et
              de nos tarifs compétitifs, vous offrant la tranquillité d'esprit
              et la liberté de voyager où vous le souhaitez.
              <br></br>
            </p>
          </div>
          <div className=" mt-5 md:mt-10 text-center text-xl">
            <p>
              Faites confiance à Auto-Loc pour rendre votre prochain voyage
              inoubliable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
