import React from "react";
import banner from "../../Assets/cars/banner.png";

export default function Banner() {
  return (
    <div className="grid grid-cols-12 p-2 bg-gradient-to-r from-celBlue100 from-10% via-sky-500 via-50% to-emerald-500 to-90%">
      <div className="col-span-5">
        <p className="h-full flex flex-col justify-center text-xl md:text-4xl text-white">
          Prenons la route ensemble avec votre partenaire location
        </p>
      </div>
      <div className=" col-span-7 flex flex-col justify-center">
        <img src={banner} />
      </div>
    </div>
  );
}
