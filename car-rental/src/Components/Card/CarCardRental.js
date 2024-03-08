import React, { useEffect, useState } from "react";
import bolt from "../../Assets/misc/bolt.png";
import gas from "../../Assets/misc/gas.png";
import user from "../../Assets/misc/user.png";
import { useNavigate } from "react-router-dom";

export default function CarCardRental({
  id,
  image,
  type,
  name,
  category,
  engine,
  gearbox,
  passenger,
  description,
  price,
  days,
  pickupDate,
  returnDate,
}) {
  let navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  function click() {
    setIsVisible(!isVisible);
  }

  function formatedDate(str) {
    let substrM;
    let substrY;
    let substrD;
    substrY = str.slice(0, 4);
    substrM = str.slice(5, 7);
    substrD = str.slice(str.length - 2);

    str = substrD + "/" + substrM + "/" + substrY;
    return str;
  }

  function rentalSelected(e) {
    e.preventDefault();
  }

  return (
    <div>
      {isVisible ? (
        <div
          className="p-3 mb-3 border-solid  rounded-xl shadow-lg
          bg-gradient-to-br from-slate-500 via-slate-750  to-slate-250 hover:outline hover:outline-4 hover:outline-offset-4 hover:outline-slate-500  hover:transition-all "
        >
          <div className="mb-3">
            <h2 className="text-xl font-semibold text-white">{name}</h2>
            <h3 className="text-xs">{category} | ou similaire</h3>
          </div>

          <div className="grid grid-cols-12">
            <div className=" flex items-center justify-center col-span-3 col-start-0 border-solid border-2 border-black rounded-full p-2 gap-1">
              <img className="size-10" src={user}></img>
              <p>{passenger}</p>
            </div>
            <div className="flex items-center justify-center col-span-3 col-start-5 border-solid border-2 border-black rounded-full p-2">
              {engine == "Electrique" ? (
                <img className="size-10" src={bolt}></img>
              ) : (
                <img className="size-10" src={gas}></img>
              )}
            </div>
            <div className=" flex items-center justify-center col-span-3 col-start-9 border-solid border-2 border-black rounded-full ">
              <p>{gearbox}</p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="">
              <img className="" src={image}></img>
            </div>
            <div className=" flex flex-col text-lg font-semibold rounded p-2">
              <p className="text-black">Inclus 200kms</p>
              <div className="flex flex-row items-end">
                <p className="text-4xl text-black">{price}</p>
                <p className="text-black"> €/jour</p>
              </div>
              <button
                id={id}
                className="mt-3 border-solid border-2 border-black rounded-full hover:bg-slate-500  hover:text-white hover:transition-all"
                onClick={click}
              >
                Fermer
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center mt-5">
            <div>
              <h2 className="text-xl font-semibold">Récapitulatif:</h2>
              <p>
                Pour la période du:{" "}
                <span className="text-lg font-semibold">
                  {formatedDate(pickupDate)}
                </span>{" "}
                au:{" "}
                <span className="text-lg font-semibold">
                  {" "}
                  {formatedDate(returnDate)}
                </span>
              </p>
              <p>
                Total: <span className="text-lg font-semibold">{price}€</span>
                /jour, pour <span>{days} jour(s)</span> soit:{" "}
                <span className="text-3xl font-bold">{price * days}€</span>
              </p>
            </div>
            <div className="text-lg font-semibold p-3">
              <button
                onClick={rentalSelected}
                className="border-solid border-2 border-black rounded-full bg-sky-700 hover:bg-sky-900 text-white hover:transition-all p-2"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="p-3 mb-3 border-solid  rounded-xl shadow-lg
            bg-gradient-to-br from-slate-500 via-slate-750  to-slate-250 hover:outline hover:outline-4 hover:outline-offset-4 hover:outline-slate-500  hover:transition-all "
        >
          <div className="mb-3">
            <h2 className="text-xl font-semibold text-white">{name}</h2>
            <h3 className="text-xs">{category} | ou similaire</h3>
          </div>

          <div className="grid grid-cols-12">
            <div className=" flex items-center justify-center col-span-3 col-start-0 border-solid border-2 border-black rounded-full p-2 gap-1">
              <img className="size-10" src={user}></img>
              <p>{passenger}</p>
            </div>
            <div className="flex items-center justify-center col-span-3 col-start-5 border-solid border-2 border-black rounded-full p-2">
              {engine == "Electrique" ? (
                <img className="size-10" src={bolt}></img>
              ) : (
                <img className="size-10" src={gas}></img>
              )}
            </div>
            <div className=" flex items-center justify-center col-span-3 col-start-9 border-solid border-2 border-black rounded-full ">
              <p>{gearbox}</p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="">
              <img className="" src={image}></img>
            </div>

            <div className=" flex flex-col text-lg font-semibold rounded p-2">
              <p className="text-black">Inclus 200kms</p>
              <div className="flex flex-row items-end">
                <p className="text-4xl text-black">{price}</p>
                <p className="text-black"> €/jour</p>
              </div>
              <button
                id={id}
                className="mt-3 border-solid border-2 border-black rounded-full hover:bg-slate-500  hover:text-white hover:transition-all"
                onClick={click}
              >
                Choisir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
