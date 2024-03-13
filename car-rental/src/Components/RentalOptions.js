import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProtectionCard from "./Card/ProtectionCard";
import { protections, kms } from "../Utils/Options";
import KmsCard from "./Card/KmsCard";

export default function RentalOptions() {
  const location = useLocation();
  const [activeProtectionIndex, setActiveProtectionIndex] = useState(0);
  const [activeKmsIndex, setActiveKmsIndex] = useState(0);

  const [allRentalInfos, setAllRentalInfos] = useState({
    vehiculeId: location.state.selectedVehicule.vehiculeId,
    vehiculeName: location.state.selectedVehicule.vehiculeName,
    vehiculeImage: location.state.selectedVehicule.vehiculeImage,
    rentalDuration: location.state.selectedVehicule.rentalDuration,
    priceWithoutOptions: location.state.selectedVehicule.priceWithoutOptions,
    pickupLocation: location.state.selectedVehicule.pickupLocation,
    returnLocation: location.state.selectedVehicule.returnLocation,
    protectionId: protections[0].id,
    protectionTitle: protections[0].title,
    protectionPrice: protections[0].price,
    priceWithProtection: "",
  });
  console.log(allRentalInfos.protectionId);

  function updateProtection(id) {
    setActiveProtectionIndex(id);

    protections.map((protection) => {
      if (protection.id === activeProtectionIndex) {
        setAllRentalInfos({
          ...allRentalInfos,
          protectionId: protection.id,
          protectionPrice: protection.price,
          protectionTitle: protection.title,
        });
      }
    });
  }

  return (
    <div className="grid grid-cols-12 gap-3 p-2 mt-5">
      <h1 className="col-span-12 text-4xl">Choisissez vos options</h1>
      <div className="col-span-12 flex flex-row justify-around">
        <p>
          Prix total:{" "}
          <span className="text-lg font-bold">
            {allRentalInfos.priceWithoutOptions}€
          </span>
        </p>
        <p>
          Durée de la location:{" "}
          <span className="text-lg font-bold">
            {allRentalInfos.rentalDuration} jour(s)
          </span>
        </p>
        <p>
          Véhicule sélectionné:{" "}
          <span className="text-lg font-bold">
            {allRentalInfos.vehiculeName}
          </span>
        </p>
      </div>
      <h2 className="col-span-12">Selectionnez la protection adaptée</h2>

      {protections.map((item) => {
        return (
          <ProtectionCard
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            characteristics={item.characteristics}
            franchise={item.franchise}
            totalOptionPrice={allRentalInfos.rentalDuration * item.price}
            isActive={activeProtectionIndex === item.id}
            onSelected={() => {
              updateProtection(item.id);
            }}
          />
        );
      })}

      <h2 className="col-span-12">
        Selectionnez le forfait kilométrique qui vous correspond
      </h2>

      {kms.map((item) => {
        return (
          <KmsCard
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            characteristics={item.characteristics}
            franchise={item.franchise}
            totalOptionPrice={allRentalInfos.rentalDuration * item.price}
            isActive={activeKmsIndex === item.id}
            onSelected={() => {
              setActiveKmsIndex(item.id);
            }}
          />
        );
      })}

      <h2 className="col-span-12">
        Selectionnez les équipements dont vous avez besoin
      </h2>

      <div className="col-span-2 col-start-11 ">
        <button className="border-2 border-solid rounded-full border-black p-2 w-32">
          Confirmer
        </button>
      </div>
    </div>
  );
}
