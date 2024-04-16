import React, { useEffect, useState } from "react";
import check from "../../Assets/misc/check.png";
import close from "../../Assets/misc/close.png";

export default function ProtectionCard({
  title,
  price,
  id,
  characteristics,
  franchise,
  totalOptionPrice,
  onSelected,
  isActive,
}) {
  const activeCard = (
    <div className="border border-1 border-slate-400 rounded-lg p-2  hover:cursor-pointer  shadow-lg shadow-slate-400">
      <div key={title} className="grid grid-cols-12 ">
        <div className="col-span-12 mb-4">
          <h2 className="col-span-12 text-3xl font-bold">{title}</h2>
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

          {price === 35 ? (
            <p className="text-green-500 font-bold">{franchise}</p>
          ) : price <= 30 && price >= 10 ? (
            <p>{franchise}</p>
          ) : price === 0 ? (
            <p className="text-bitterRed100 font-bold">{franchise}</p>
          ) : null}
        </div>

        <div className="  col-span-12">
          <div className="">
            {price === 35 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-center">
                  <img className="size-6" src={check} alt="check-img"></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-center">
                  <img className="size-6" src={check} alt="check-img"></img>
                  {characteristics.b}
                </li>
              </ul>
            ) : price <= 30 && price >= 10 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-center">
                  <img className="size-6" src={check} alt="check-img"></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-center text-slate-400 line-through">
                  <img className="size-4" src={close} alt="close-img"></img>
                  {characteristics.b}
                </li>
              </ul>
            ) : price === 0 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-center text-slate-400 line-through">
                  <img className="size-4" src={close} alt="close-img"></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-center text-slate-400 line-through">
                  <img className="size-4 " src={close} alt="close-img"></img>
                  {characteristics.b}
                </li>
              </ul>
            ) : (
              null()
            )}

            <p>
              {totalOptionPrice == 0 ? (
                <span className="text-2xl font-bold">
                  Inclus dans la location
                </span>
              ) : (
                <>
                  <span>Soit </span>
                  <span className="text-3xl font-bold text-celBlue100">
                    {totalOptionPrice}€
                  </span>{" "}
                  <span> pour la durée de la location</span>
                </>
              )}
            </p>
          </div>

          <div className="flex flex-row justify-end ">
            <button
              className="rounded-full border-black p-2 bg-emerald-500 text-white w-32"
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
          <h2 className="col-span-12 text-3xl font-bold">{title}</h2>
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
          {price === 35 ? (
            <p className="text-celBlue100 font-bold">{franchise}</p>
          ) : price <= 30 && price >= 10 ? (
            <p>{franchise}</p>
          ) : price === 0 ? (
            <p className="text-red-500 font-bold">{franchise}</p>
          ) : null}
        </div>

        <div className="  col-span-12">
          <div className="">
            {price === 35 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-cente">
                  <img className="size-6" src={check} alt="check-img"></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-cente">
                  <img className="size-6" src={check} alt="check-img"></img>
                  {characteristics.b}
                </li>
              </ul>
            ) : price <= 30 && price >= 10 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-center">
                  <img className="size-6" src={check} alt="check-img"></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-cente text-slate-200 line-through">
                  <img className="size-4" src={close} alt="close-img"></img>
                  {characteristics.b}
                </li>
              </ul>
            ) : price === 0 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-cente text-slate-200 line-through">
                  <img className="size-4" src={close} alt="close-img"></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-cente text-slate-200 line-through">
                  <img className="size-4 " src={close} alt="close-img"></img>
                  {characteristics.b}
                </li>
              </ul>
            ) : (
              null()
            )}

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
