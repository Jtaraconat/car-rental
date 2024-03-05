import React from "react";
import bolt from "../Assets/misc/bolt.png";
import user from "../Assets/misc/user.png";
import gas from "../Assets/misc/gas.png";

export default function CarCardRental({
  image,
  type,
  name,
  category,
  engine,
  gearbox,
  passenger,
  description,
  price,
}) {
  return (
    <div
      className="p-3 border-solid border-2 border-black rounded-xl 
bg-gradient-to-br from-slate-500 via-slate-750  to-slate-250"
    >
      <div className="mb-3">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        <h3 className="text-xs">{category} | ou similaire</h3>
      </div>

      <div className="grid grid-cols-12">
        <div className=" flex items-center justify-center col-span-3 col-start-0 border-solid border-2 border-black rounded-full p-2">
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

      <div
        className="size-[20rem] bg-bottom bg-contain bg-no-repeat mr-auto ml-auto"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className="text-blue-700 text-lg font-semibold  rounded p-2">
        <p className="text-white">Inclus 200kms</p>
        <div className="flex flex-row items-end">
          <p className="text-4xl text-white">{price}</p>
          <p className="text-white"> €/jour</p>
        </div>
      </div>
    </div>
  );
}
