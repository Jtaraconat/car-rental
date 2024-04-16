import React from "react";

export default function CarCard({ image, name, category, price }) {
  return (
    <div className="p-3">
      <div className="flex flex-row justify-center">
        <img src={image} alt="vehicule" className="size-fit" />
      </div>

      <div className="grid grid-cols-12 text-lg font-semibold  rounded p-2 justify-items-center">
        <h2 className="col-span-12 p-1 text-2xl">{name}</h2>
        <h3 className="col-span-12 p-1">{category}</h3>
        <div className="col-span-12 p-1">
          <p className="text-center">
            A partir de{" "}
            <span className="text-2xl md:text-4xl font-bold">{price}€</span>
            /jour
          </p>
        </div>
      </div>
    </div>
  );
}
