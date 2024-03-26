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
    <div className="border border-solid border-black rounded-lg p-2 col-span-6  hover:cursor-pointer  shadow-lg shadow-black">
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
            <p className="text-red-500 font-bold">{franchise}</p>
          ) : null}
        </div>

        <div className="  col-span-12">
          <div className="">
            {price === 35 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-cente">
                  <img className="size-6" src={check}></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-cente">
                  <img className="size-6" src={check}></img>
                  {characteristics.b}
                </li>
              </ul>
            ) : price <= 30 && price >= 10 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-center">
                  <img className="size-6" src={check}></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-cente text-slate-200 line-through">
                  <img className="size-4" src={close}></img>
                  {characteristics.b}
                </li>
              </ul>
            ) : price === 0 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-cente text-slate-200 line-through">
                  <img className="size-4" src={close}></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-cente text-slate-200 line-through">
                  <img className="size-4 " src={close}></img>
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
                  <span className="text-2xl font-bold">
                    {totalOptionPrice}
                  </span>{" "}
                  <span>€ pour la durée de la location</span>
                </>
              )}
            </p>
          </div>

          <div className="flex flex-row justify-end ">
            <button
              className="border-2 border-solid rounded-full border-black p-2 bg-violet-600 text-white w-32"
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
    <div className="border border-solid border-black rounded-lg p-2 col-span-6 bg-slate-600 hover:cursor-pointer hover:outline hover:outline-4 hover:outline-offset-4 hover:outline-slate-500">
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
            <p className="text-violet-600 font-bold">{franchise}</p>
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
                  <img className="size-6" src={check}></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-cente">
                  <img className="size-6" src={check}></img>
                  {characteristics.b}
                </li>
              </ul>
            ) : price <= 30 && price >= 10 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-center">
                  <img className="size-6" src={check}></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-cente text-slate-200 line-through">
                  <img className="size-4" src={close}></img>
                  {characteristics.b}
                </li>
              </ul>
            ) : price === 0 ? (
              <ul className="pb-4 text-sm">
                <li className="flex flex-row items-cente text-slate-200 line-through">
                  <img className="size-4" src={close}></img>
                  {characteristics.a}
                </li>
                <li className="flex flex-row items-cente text-slate-200 line-through">
                  <img className="size-4 " src={close}></img>
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
                  <span className="text-2xl font-bold">
                    {totalOptionPrice}
                  </span>{" "}
                  <span>€ pour la durée de la location</span>
                </>
              )}
            </p>
          </div>

          <div className="flex flex-row justify-end ">
            <button
              className="border-2 border-solid rounded-full border-black p-2 hover:bg-violet-600 hover:text-white w-32 all-transition"
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
    <div className="col-span-6">{isActive ? activeCard : inactiveCard}</div>
  );
}
