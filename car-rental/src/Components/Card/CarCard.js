import React from "react";

export default function CarCard({
  image,
  name,
  category,
  passenger,
  engine,
  gearbox,
  description,
  price,
}) {
  return (
    <div className="p-3">
      <div
        className="size-[32rem] bg-bottom bg-contain bg-no-repeat mr-auto ml-auto"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>

      <div className="grid grid-cols-12 text-lg font-semibold  rounded p-2 justify-items-center">
        <h2 className="col-span-12 p-1">{name}</h2>
        <h3 className="col-span-12 p-1">{category}</h3>
        <p className="col-span-12 p-1">
          A partir de <span className="text-2xl text-violet-600">{price}€</span>
          /jour
        </p>
      </div>
    </div>
  );
}
