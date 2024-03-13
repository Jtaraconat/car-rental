import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { cars } from "../Utils/Cars";
import { utilitaires } from "../Utils/Utilitaires";
import CarCardRental from "../Components/Card/CarCardRental";

export default function RentalResults() {
  const location = useLocation();
  const [car, setCar] = useState("");
  const [utilitaire, setUtilitaire] = useState("");
  const [count, setCount] = useState(0);
  const [rentalDuration, setRentalDuration] = useState(0);
  const [filteredData, setFilteredData] = useState({});
  const carEngineOptions = ["Essence", "Hybride", "Electrique"];
  const utilitaireEngineOptions = ["Diesel", "Electrique"];
  const gearboxOptions = ["Automatique", "Manuelle"];
  const [searchedData, setSearchData] = useState({
    pickupLocation: location.state.searchData.pickupLocation,
    returnLocation: location.state.searchData.returnLocation,
    pickupDate: location.state.searchData.pickupDate,
    returnDate: location.state.searchData.returnDate,
    pickupTimestamp: location.state.searchData.pickupTimestamp,
    returnTimestamp: location.state.searchData.returnTimestamp,
    vehiculeType: location.state.searchData.vehiculeType,
  });

  useEffect(() => {
    setCar(cars[count]);
    setUtilitaire(utilitaires[count]);
    getNumberDays();
    setFilteredData({
      engine: "All engine",
      gearbox: "All gearbox",
      price: "No filter",
    });
  }, []);

  function handleEngineChange(e) {
    e.preventDefault();
    setFilteredData({ ...filteredData, engine: e.target.value });
  }

  function handleGearboxChange(e) {
    e.preventDefault();
    setFilteredData({ ...filteredData, gearbox: e.target.value });
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

  function getNumberDays() {
    let eta = searchedData.returnTimestamp - searchedData.pickupTimestamp;
    setRentalDuration(eta / 86400000);
  }

  return (
    <div className="p-2 ">
      <div
        className="flex flex-row items-center justify-between border-solid border-2 border-black rounded-full p-3 w-1/2 font-medium text-sm mb-5"
        id="search-recap"
      >
        <div>
          <div className="flex flex-row items-center">
            <p className="uppercase">{searchedData.pickupLocation}</p>
          </div>
          <div className="flex flex-row gap-4">
            <p>Du: {formatedDate(searchedData.pickupDate)}</p>
            <p>Au: {formatedDate(searchedData.returnDate)}</p>
          </div>
        </div>
        <div>
          <Link to="/">Modifier la recherche</Link>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mb-5">
        <select
          onChange={(e) => handleGearboxChange(e)}
          className="col-span-3 rounded-full"
          name="gearbox"
        >
          <option value="All gearbox">Filtrer par boîte de vitesses</option>
          {gearboxOptions.map((gearbox) => {
            return <option value={gearbox}>{gearbox}</option>;
          })}
        </select>
        <select
          onChange={(e) => handleEngineChange(e)}
          className="col-span-3 rounded-full"
          name="engine"
        >
          <option value="All engine">Filtrer par type de moteur</option>
          {searchedData.vehiculeType === "voiture"
            ? carEngineOptions.map((engine) => {
                return <option value={engine}>{engine}</option>;
              })
            : utilitaireEngineOptions.map((engine) => {
                return <option value={engine}>{engine}</option>;
              })}
        </select>
      </div>
      <div className="">
        <h2 className="mb-2 text-xl font-semibold">NOS VOITURES</h2>

        {searchedData.vehiculeType === "voiture"
          ? cars.map((item) => {
              if (
                (item.gearbox == filteredData.gearbox &&
                  filteredData.engine == "All engine") ||
                (filteredData.engine == item.engine &&
                  filteredData.gearbox == "All gearbox") ||
                (filteredData.engine == item.engine &&
                  filteredData.gearbox == item.gearbox)
              ) {
                return (
                  <CarCardRental
                    id={item.id}
                    key={item.id}
                    type={item.type}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    engine={item.engine}
                    gearbox={item.gearbox}
                    passenger={item.passenger}
                    description={item.description}
                    price={item.price}
                    rentalDuration={rentalDuration}
                    pickupDate={searchedData.pickupDate}
                    returnDate={searchedData.returnDate}
                    pickupLocation={searchedData.pickupLocation}
                    returnLocation={searchedData.returnLocation}
                  />
                );
              } else if (
                filteredData.engine == "All engine" &&
                filteredData.gearbox == "All gearbox"
              ) {
                return (
                  <CarCardRental
                    id={item.id}
                    key={item.id}
                    type={item.type}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    engine={item.engine}
                    gearbox={item.gearbox}
                    passenger={item.passenger}
                    description={item.description}
                    price={item.price}
                    rentalDuration={rentalDuration}
                    pickupDate={searchedData.pickupDate}
                    returnDate={searchedData.returnDate}
                    pickupLocation={searchedData.pickupLocation}
                    returnLocation={searchedData.returnLocation}
                  />
                );
              } else if (filteredData.engine == "Diesel") {
              }
            })
          : utilitaires.map((item) => {
              if (
                (item.gearbox == filteredData.gearbox &&
                  filteredData.engine == "All engine") ||
                (filteredData.engine == item.engine &&
                  filteredData.gearbox == "All gearbox") ||
                (filteredData.engine == item.engine &&
                  filteredData.gearbox == item.gearbox)
              ) {
                return (
                  <CarCardRental
                    id={item.id}
                    key={item.id}
                    type={item.type}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    engine={item.engine}
                    gearbox={item.gearbox}
                    passenger={item.passenger}
                    description={item.description}
                    price={item.price}
                    rentalDuration={rentalDuration}
                    pickupDate={searchedData.pickupDate}
                    returnDate={searchedData.returnDate}
                  />
                );
              } else if (
                filteredData.engine == "All engine" &&
                filteredData.gearbox == "All gearbox"
              ) {
                return (
                  <CarCardRental
                    id={item.id}
                    key={item.id}
                    type={item.type}
                    image={item.image}
                    name={item.name}
                    category={item.category}
                    engine={item.engine}
                    gearbox={item.gearbox}
                    passenger={item.passenger}
                    description={item.description}
                    price={item.price}
                    rentalDuration={rentalDuration}
                    pickupDate={searchedData.pickupDate}
                    returnDate={searchedData.returnDate}
                  />
                );
              }
            })}
        {(filteredData.engine === "Electrique" &&
          filteredData.gearbox === "Manuelle") ||
        (filteredData.engine === "Hybride" &&
          filteredData.gearbox === "Manuelle") ? (
          <p className="text-center mt-5 font-semibold">
            Désolé tous nos véhicules électriques et hybrides sont équipés d'une
            boîte de vitesses automatique.
          </p>
        ) : null}
      </div>
    </div>
  );
}
