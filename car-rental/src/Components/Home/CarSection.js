import React from "react";
import { useState, useEffect } from "react";
import { cars } from "../../Utils/Cars";
import { utilitaires } from "../../Utils/Utilitaires";
import CarCard from "../Card/CarCard";
import SliderButton from "../Home/SliderButton";
import FilterButton from "../Home/FilterButton";

export default function CarSection() {
  const [car, setCar] = useState("");
  const [utilitaire, setUtilitaire] = useState("");
  const [count, setCount] = useState(0);
  const [carFilter, setCarFilter] = useState("véhicule");

  useEffect(() => {
    setCar(cars[count]);
    setUtilitaire(utilitaires[count]);
  }, [count, carFilter]);

  function nextClick() {
    if (carFilter === "véhicule" && count < cars.length - 1) {
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
    <div className=" my-10 p-5 shadow shadow-lg shadow-slate-400 border-slate-600  rounded-lg bg-gradient-to-br from-ghostWhite to-sky-500 ">
      <h2 className="text-2xl md:text-4xl mb-3 text-celBlue100">
        Nos voitures et utilitaires
      </h2>
      <div className="grid grid-cols-12 gap-2 ">
        <FilterButton
          value={"véhicule"}
          onClick={handleFilter}
          buttonLabel={"Véhicule"}
          classname={
            "bg-transparent rounded-lg border border-solid border-1 text-slate-600 border-slate-600 hover:bg-celBlue100 hover:text-white p-3 col-span-5 md:col-span-2 transition-all md:col-start-5 text-lg"
          }
        />

        <FilterButton
          value={"utilitaire"}
          onClick={handleFilter}
          buttonLabel={"Utilitaire"}
          classname={
            "bg-transparent rounded-lg border border-solid border-1 text-slate-600 border-slate-600 hover:bg-celBlue100 hover:text-white  p-5 col-span-5 md:col-span-2 transition-all md:col-start-7 col-start-8 text-lg"
          }
        />
      </div>

      <div className="grid grid-cols-12 mt-7">
        <div className="self-center col-span-12 md:col-span-2">
          <SliderButton onClick={previousClick} buttonLabel={"Précédente"} />
        </div>

        <div className="col-span-12 md:col-span-8">
          {carFilter === "véhicule" ? (
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

        <div className="self-center col-span-12 md:col-span-2">
          <SliderButton onClick={nextClick} buttonLabel={"Suivante"} />
        </div>
      </div>
    </div>
  );
}
