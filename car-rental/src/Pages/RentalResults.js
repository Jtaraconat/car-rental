import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { cars } from "../Utils/Cars";
import { utilitaires } from "../Utils/Utilitaires";
import CarCardRental from "../Components/CarCardRental";
import FilterBar from "../Components/FilterBar";

export default function RentalResults() {
  const location = useLocation();
  const [car, setCar] = useState("");
  const [utilitaire, setUtilitaire] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCar(cars[count]);
    setUtilitaire(utilitaires[count]);
    console.log(cars);
  }, []);

  return (
    <div className="p-2 ">
      <div
        className="flex flex-row items-center justify-between border-solid border-2 border-black rounded-full p-3 w-1/2 font-medium text-sm mb-5"
        id="search-recap"
      >
        <div>
          <div className="flex flex-row items-center">
            <p className="uppercase">
              {location.state.searchData.pickupLocation}
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <p>Du: {location.state.searchData.pickupDate}</p>
            <p>Au: {location.state.searchData.returnDate}</p>
          </div>
        </div>
        <div>
          <Link to="/">Modifier la recherche</Link>
        </div>
      </div>
      <FilterBar />
      <div className="grid grid-cols-2 gap-3">
        <h2 className="col-span-2">Les voitures</h2>
        {cars.map((item) => {
          return (
            <CarCardRental
              key={item.name}
              type={item.type}
              image={item.image}
              name={item.name}
              category={item.category}
              engine={item.engine}
              gearbox={item.gearbox}
              passenger={item.passenger}
              description={item.description}
              price={item.price}
            />
          );
        })}
        <p className="col-span-2 mt-5">Les Utilitaires</p>
        {utilitaires.map((item) => {
          return (
            <CarCardRental
              key={item.name}
              type={item.type}
              image={item.image}
              name={item.name}
              engine={item.engine}
              gearbox={item.gearbox}
              passenger={item.passenger}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
