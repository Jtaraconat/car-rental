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
    <div className=" my-10 p-5 shadow shadow-lg shadow-slate-600 border-slate-600 bg-gradient-to-br from-white from-25% via-slate-200 via-50% to-slate-600 rounded-lg">
      <h2 className="text-4xl mb-3 text-violet-600">
        Nos voitures et utilitaires
      </h2>
      <div className="grid grid-cols-12 gap-2 ">
        <FilterButton
          value={"véhicule"}
          onClick={handleFilter}
          buttonLabel={"Véhicule"}
          classname={
            "bg-white rounded-lg border border-solid border-2 text-slate-600 border-slate-600 hover:bg-violet-600 hover:text-white  p-5 col-span-2 transition-all col-start-5 "
          }
        />

        <FilterButton
          value={"utilitaire"}
          onClick={handleFilter}
          buttonLabel={"Utilitaire"}
          classname={
            "bg-white rounded-lg border border-solid border-2 text-slate-600 border-slate-600 hover:bg-violet-600 hover:text-white  p-5 col-span-2 transition-all col-start-7"
          }
        />
      </div>

      <div className="grid grid-cols-12">
        <div className="self-center col-span-2">
          <SliderButton onClick={previousClick} buttonLabel={"Précédent"} />
        </div>

        <div className="col-span-8">
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

        <div className="self-center col-span-2">
          <SliderButton onClick={nextClick} buttonLabel={"Suivant"} />
        </div>
      </div>
    </div>
  );
}
