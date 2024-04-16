import React, { useEffect, useState } from "react";
import bolt from "../../Assets/misc/bolt.png";
import gas from "../../Assets/misc/gas.png";
import user from "../../Assets/misc/user.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function CarCardRental({
  id,
  image,
  name,
  category,
  engine,
  gearbox,
  passenger,
  price,
  rentalDuration,
  pickupDate,
  returnDate,
  pickupLocation,
  returnLocation,
}) {
  let navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [selectedVehicule, setSelectedVehicule] = useState({
    vehiculeId: id,
    vehiculeName: name,
    vehiculeImage: image,
    rentalDuration: rentalDuration,
    priceWithoutOptions: price * rentalDuration,
    pickupLocation: pickupLocation,
    returnLocation: returnLocation,
  });

  const CardActive = (
    <div
      className="p-3 mb-3 border-solid  rounded-xl shadow-lg
      bg-gradient-to-br from-ghostWhite from-30% to-celBlue100 hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-slate-500  hover:transition-all shadow shadow-lg shadow-slate-400"
    >
      <div className="mb-3">
        <h2 className="text-2xl font-semibold text-celBlue100">{name}</h2>
        <h3 className="text-xs">{category} | ou similaire</h3>
      </div>

      <div className="grid grid-cols-11">
        <div className=" flex items-center justify-center col-span-3 col-start-0 border-solid border-2 border-black rounded-full p-2 gap-1">
          <img className="size-10" src={user} alt="user"></img>
          <p>{passenger}</p>
        </div>
        <div className="flex items-center justify-center col-span-3 col-start-5 border-solid border-2 border-black rounded-full p-2">
          {engine == "Electrique" ? (
            <img className="size-10" src={bolt} alt="bolt"></img>
          ) : (
            <img className="size-10" src={gas} alt="gas"></img>
          )}
        </div>
        <div className=" flex items-center justify-center col-span-3 col-start-9 border-solid border-2 border-black rounded-full ">
          <p className="text-sm md:text-lg">{gearbox}</p>
        </div>
      </div>

      <div className="flex flex-col md:grid grid-cols-12 items-center justify-between ">
        <div className="md:col-span-9">
          <img className="" src={image} alt="car"></img>
        </div>
        <div className="md:col-span-3 grid grid-cols-12 md:flex flex-col text-lg font-semibold rounded p-2 items-center">
          <div className="col-span-4">
            <p className="text-black text-center">Inclus 200kms</p>
          </div>

          <div className="col-span-4 flex flex-row justify-center items-end">
            <p className="text-4xl text-black">{price}</p>
            <p className="text-black"> €/jour</p>
          </div>
          <div className="col-span-4 flex flex-row justify-center ">
            <button
              id={id}
              className="mt-3 p-2 border-solid border-2 border-black rounded-full hover:bg-bitterRed100  hover:text-white transition-all "
              onClick={click}
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-5">
        <div>
          <h2 className="text-xl font-semibold">Récapitulatif:</h2>
          <div className="my-3 md:flex flex-row gap-3 items-center">
            <p> Pour la période:</p>
            <p className="text-lg font-semibold">
              du: {formatedDate(pickupDate)}
            </p>

            <p className="text-lg font-semibold">
              au: {formatedDate(returnDate)}
            </p>
          </div>

          <p>
            Total:{" "}
            <span className="text-lg font-semibold text-celBlue100">
              {price}€
            </span>
            /jour, pour <span>{rentalDuration} jour(s)</span> soit:{" "}
            <span className="text-4xl font-bold text-celBlue100">
              {price * rentalDuration}€
            </span>
          </p>
        </div>
        <div className="text-lg font-semibold p-3">
          <button
            onClick={rentalSelected}
            className="border-solid border-2 border-black rounded-full  hover:bg-celBlue100 hover:text-white transition-all p-2"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>
  );

  const CardInactive = (
    <div
      className="p-3 mb-3 border-solid  rounded-xl shadow-lg
      bg-gradient-to-br from-ghostWhite from-30% to-celBlue100 to-90% hover:outline hover:outline-2 hover:outline-offset-4 hover:outline-slate-500 transition-all shadow shadow-lg shadow-slate-400"
    >
      <div className="mb-3">
        <h2 className="text-2xl font-semibold text-celBlue100">{name}</h2>
        <h3 className="text-xs">{category} | ou similaire</h3>
      </div>

      <div className=" grid grid-cols-11">
        <div className=" flex items-center justify-center col-span-3 col-start-0 border-solid border-2 border-black rounded-full p-2 gap-1">
          <img className="size-10" src={user} alt="user"></img>
          <p>{passenger}</p>
        </div>
        <div className="flex items-center justify-center col-span-3 col-start-5 border-solid border-2 border-black rounded-full p-2">
          {engine == "Electrique" ? (
            <img className="size-10" src={bolt} alt="bolt"></img>
          ) : (
            <img className="size-10" src={gas} alt="gas"></img>
          )}
        </div>
        <div className=" flex items-center justify-center col-span-3 col-start-9 border-solid border-2 border-black rounded-full ">
          <p className="text-sm md:text-lg">{gearbox}</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="">
          <img className="" src={image} alt="car"></img>
        </div>

        <div className=" flex flex-col text-lg font-semibold rounded p-2">
          <p className="text-black">Inclus 200kms</p>
          <div className="flex flex-row items-end">
            <p className="text-4xl text-black">{price}</p>
            <p className="text-black"> €/jour</p>
          </div>
          <button
            id={id}
            className="mt-3 p-2 border-solid border-2 border-black rounded-full hover:bg-celBlue100 hover:text-white transition-all"
            onClick={click}
          >
            Choisir
          </button>
        </div>
      </div>
    </div>
  );

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
    setSelectedVehicule({
      ...selectedVehicule,
      vehiculeId: id,
      vehiculeName: name,
      vehiculeImage: image,
      rentalDuration: rentalDuration,
      priceWithoutOptions: price * rentalDuration,
      pickupLocation: pickupLocation,
      returnLocation: returnLocation,
    });
    navigate("/options", { state: { selectedVehicule } });
  }

  return <div>{isVisible ? CardActive : CardInactive}</div>;
}
