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

      <div className="grid grid-cols-12 text-blue-700 text-lg font-semibold  rounded p-2">
        <h2 className="col-span-12 justify-self-center p-3">{name}</h2>
        <h3 className="col-span-4">{category}</h3>
        <div className="col-span-12"></div>
        <p className="col-span-12 justify-self-center">{description}</p>
        <p className="col-span-12 justify-self-center">
          A partir de {price}€/jour
        </p>
      </div>
    </div>
  );
}
