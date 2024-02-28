import React from "react";
import { useState, useEffect } from "react";
import { cars } from "../Utils/Cars";
import { utilitaires } from "../Utils/Utilitaires";

export default function CarCard() {
  const [car, setCar] = useState("");
  const [utilitaire, setUtilitaire] = useState("");
  const [count, setCount] = useState(0);
  const [carFilter, setCarFilter] = useState("vehicule");

  useEffect(() => {
    setCar(cars[count]);
    setUtilitaire(utilitaires[count]);
  }, [count]);

  function nextClick() {
    if (count < cars.length - 1 || count < utilitaires.length) {
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

  {
    /* add the value to carfilter to update carCard*/
  }
  function handleFilter(e) {
    e.preventDefault();
    console.log(e.target.value);
  }

  return (
    <div className="border-solid border-2 border-black rounded mb-5">
      <div>
        <select
          onClick={handleFilter}
          className="bg-slate-500 rounded p-3 col-span-1 max-h-20"
        >
          <option>Véhicule</option>
          <option>Utilitaire</option>
        </select>
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

        {/* check if vehicule ou utilitaire et render en fonction de carFilter */}
        {carFilter === "vehicule" ? (
          <div className="card-car col-span-10 p-3 ">
            <img className="" src={car.image} alt="car image" />
            <h2>{car.name}</h2>
            <h3>{car.category}</h3>
            <div>
              <ul className=" grid grid-cols-12 col-span-10">
                {car.characteristics != undefined
                  ? car.characteristics.map((item, index) => {
                      return (
                        <li className="col-span-6" key={index}>
                          {item}
                        </li>
                      );
                    })
                  : car.characteristics}
              </ul>
            </div>
            <p>{car.description}</p>
          </div>
        ) : (
          <div className="card-car col-span-10 p-3 ">
            <img className="" src={utilitaire.image} alt="car image" />
            <h2>{utilitaire.name}</h2>
            <h3>{utilitaire.category}</h3>
            <div>
              <ul className=" grid grid-cols-12 col-span-10">
                {utilitaire.characteristics != undefined
                  ? utilitaire.characteristics.map((item, index) => {
                      return (
                        <li className="col-span-6" key={index}>
                          {item}
                        </li>
                      );
                    })
                  : utilitaire.characteristics}
              </ul>
            </div>
            <p>{utilitaire.description}</p>
          </div>
        )}

        <div className="self-center">
          <button
            className=" bg-slate-500 rounded p-3 col-span-1 max-h-20 w-full"
            onClick={nextClick}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
