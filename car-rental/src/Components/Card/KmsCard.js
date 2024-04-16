import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function KmsCard({
  id,
  price,
  title,
  characteristics,
  totalOptionPrice,
  onSelected,
  isActive,
}) {
  const [isOptionSelected, setIsOptionSelected] = useState(true);
  let location = useLocation();

  function handleOptionChange(e) {
    e.preventDefault();
    setIsOptionSelected(!isOptionSelected);
  }

  const activeCard = (
    <div className="border border-1 border-slate-400 rounded-lg p-2 col-span-6  hover:cursor-pointer  shadow-lg shadow-slate-400">
      <div key={title} className="grid grid-cols-12 ">
        <div className="col-span-12 mb-4">
          <h2 className="col-span-12 text-3xl  font-bold">{title}</h2>
          {price === 35 ? (
            <p className="">
              +<span className="text-2xl font-bold">{price}</span>
              €/ jour
            </p>
          ) : price <= 30 && price >= 10 ? (
            <p className="">
              +<span className="text-2xl font-bold">{price}</span>
              €/ jour
            </p>
          ) : price === 0 ? (
            <p className="">
              <span className="text-2xl font-bold">Inclus dans le prix</span>
            </p>
          ) : null}
        </div>

        <div className="  col-span-12">
          <div className="">
            <ul className="pb-4 text-sm">
              <li>{characteristics.a}</li>
              <li>{characteristics.b}</li>
            </ul>

            <p>
              {totalOptionPrice == 0 ? (
                <span className="text-3xl font-bold">
                  Inclus dans la location
                </span>
              ) : (
                <>
                  <span>Soit </span>
                  <span className="text-3xl font-bold">
                    {totalOptionPrice}€
                  </span>{" "}
                  <span> pour la durée de la location</span>
                </>
              )}
            </p>
          </div>

          <div className="flex flex-row justify-end ">
            <button
              className=" rounded-full border-black p-2 bg-emerald-500 text-white w-32"
              onClick={onSelected}
            >
              Option ajoutée
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const inactiveCard = (
    <div className=" rounded-lg p-2 col-span-6 bg-slate-400 hover:cursor-pointer hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-celBlue100">
      <div key={title} className="grid grid-cols-12 ">
        <div className="col-span-12 mb-4">
          <h2 className="col-span-12 text-3xl  font-bold">{title}</h2>
          {price === 35 ? (
            <p className="">
              +<span className="text-2xl font-bold">{price}</span>
              €/ jour
            </p>
          ) : price <= 30 && price >= 10 ? (
            <p className="">
              +<span className="text-2xl font-bold">{price}</span>
              €/ jour
            </p>
          ) : price === 0 ? (
            <p className="">
              <span className="text-2xl font-bold">Inclus dans le prix</span>
            </p>
          ) : null}
        </div>

        <div className="  col-span-12">
          <div className="">
            <ul className="pb-4 text-sm">
              <li>{characteristics.a}</li>
              <li>{characteristics.b}</li>
            </ul>

            <p>
              {totalOptionPrice == 0 ? (
                <span className="text-2xl font-bold">
                  Inclus dans la location
                </span>
              ) : (
                <>
                  <span>Soit </span>
                  <span className="text-2xl font-bold text-celBlue100">
                    {totalOptionPrice}€
                  </span>{" "}
                  <span> pour la durée de la location</span>
                </>
              )}
            </p>
          </div>

          <div className="flex flex-row justify-end ">
            <button
              className="border-2 border-solid rounded-full border-black p-2 hover:bg-celBlue100 hover:text-white w-32 all-transition"
              onClick={onSelected}
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="col-span-12 md:col-span-6">
      {isActive ? activeCard : inactiveCard}
    </div>
  );
}
