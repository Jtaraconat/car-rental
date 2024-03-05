import React from "react";
import { useState, useEffect } from "react";
import { cars } from "../Utils/Cars";
import { utilitaires } from "../Utils/Utilitaires";
import CarCard from "../Components/CarCard";

export default function CarSection() {
  const [car, setCar] = useState("");
  const [utilitaire, setUtilitaire] = useState("");
  const [count, setCount] = useState(0);
  const [carFilter, setCarFilter] = useState("vehicule");

  useEffect(() => {
    setCar(cars[count]);
    setUtilitaire(utilitaires[count]);
  }, [count, carFilter]);

  function nextClick() {
    if (carFilter === "vehicule" && count < cars.length - 1) {
      setCount(count + 1);
    } else if (carFilter === "utilitaire" && count < utilitaires.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  function previousClick() {
    if (
      (count > 0 && count < cars.length) ||
      (count > 0 && count < utilitaires.length)
    ) {
      setCount(count - 1);
    }
  }

  function handleFilter(e) {
    e.preventDefault();
    setCount(0);
    setCarFilter(e.target.value);
  }

  return (
    <div className="border-solid border-2 border-black rounded mb-5 bg-gradient-to-br from-slate-950  to-slate-500">
      <div className="grid grid-cols-12 gap-2 ">
        <button
          onClick={handleFilter}
          value={"vehicule"}
          className="bg-slate-500 rounded p-3 col-span-2 col-start-5 "
        >
          Vehicule
        </button>
        <button
          onClick={handleFilter}
          value={"utilitaire"}
          className="bg-slate-500 rounded p-3 col-span-2 col-start-7"
        >
          Utilitaire
        </button>
      </div>

      <div className="grid grid-cols-12">
        <div className="self-center">
          <button
            className=" bg-slate-500 rounded p-3 col-span-1 max-h-20 w-full"
            onClick={previousClick}
          >
            previous
          </button>
        </div>

        <div className="col-span-10">
          {carFilter === "vehicule" ? (
            <CarCard
              image={car.image}
              name={car.name}
              category={car.category}
              characteristics={car.characteristics}
              description={car.description}
              price={car.price}
            />
          ) : (
            <CarCard
              image={utilitaire.image}
              name={utilitaire.name}
              category={utilitaire.category}
              characteristics={utilitaire.characteristics}
              description={utilitaire.description}
              price={utilitaire.price}
            />
          )}
        </div>

        <div className="self-center">
          <button
            className=" bg-slate-500 rounded p-3 col-span-1 max-h-20 w-full hover:scale-105 hover:bg-slate-600"
            onClick={nextClick}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
