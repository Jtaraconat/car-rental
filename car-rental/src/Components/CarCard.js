import React from "react";
import { useState, useEffect } from "react";
import { cars } from "../Utils/Cars";

export default function CarCard() {
  const [car, setCar] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCar(cars[count]);
  }, [count]);

  function nextClick() {
    if (count < cars.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  function previousClick() {
    if (count > 0 && count < cars.length) {
      setCount(count - 1);
    }
  }

  return (
    <div className="bg-indigo-200">
      <div className="grid grid-cols-12">
        <div className="self-center">
          <button
            className=" bg-slate-500 rounded p-3 col-span-1 max-h-20 w-full"
            onClick={previousClick}
          >
            previous
          </button>
        </div>

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
