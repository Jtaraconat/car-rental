import React from "react";
import { optionsData, optionsUtils } from "../../Utils/Options";

export default function RentalRecapCard({
  rentalDuration,
  vehiculeImage,
  vehiculeName,
  vehiculePrice,
  protectionTitle,
  protectionPrice,
  kmsTitle,
  kmsPrice,
  optionsArray,
}) {
  let totalOptionsPriceArr = [];
  let totalOptionsNum = 0;

  function getTotalOptionsPrice(optionsArray) {
    {
      optionsArray.map((option) => {
        for (let i = 0; i < optionsData.length; i++) {
          if (option === optionsData[i].id) {
            if (optionsData[i].priceInfos === "jour") {
              totalOptionsPriceArr.push(optionsData[i].price * rentalDuration);
            } else {
              totalOptionsPriceArr.push(optionsData[i].price);
            }
          }
        }
      });
      totalOptionsNum = totalOptionsPriceArr.reduce((acc, item) => {
        return (acc += item);
      });
    }
  }
  getTotalOptionsPrice(optionsArray);

  return (
    <div className="">
      <div className="grid grid-cols-12 mt-3 mb-3 border border-solid border-black p-2 rounded-lg shadow shadow-black">
        <h2 className="col-span-12 font-semibold text-xl text-violet-600">
          Voiture sélectionnée
        </h2>
        <img src={vehiculeImage} className="col-span-4"></img>
        <p className="col-span-4">{vehiculeName}</p>
        <p className="col-span-4 place-self-center">
          Soit{" "}
          <span className="text-lg font-semibold text-violet-600">
            {vehiculePrice}€
          </span>{" "}
          pour la durée de location
        </p>
      </div>

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-6 grid grid-cols-12 mt-3 mb-3 border border-solid border-black p-2 rounded-lg shadow shadow-black">
          <h2 className="col-span-12 font-semibold text-xl text-violet-600">
            Protection sélectionnée
          </h2>
          <p className="col-span-6">{protectionTitle}:</p>
          {protectionPrice === 0 ? (
            <p className="col-span-6">Inclus dans le prix</p>
          ) : (
            <p className="col-span-6">{protectionPrice}€ par jour</p>
          )}

          <p className="col-span-12 ">
            Soit{" "}
            <span className="text-lg font-semibold text-violet-600">
              {protectionPrice * rentalDuration}€
            </span>{" "}
            pour la durée de la location
          </p>
        </div>

        <div className="col-span-6 grid grid-cols-12 mt-3 mb-3 border border-solid border-black p-2 rounded-lg shadow shadow-black">
          <h2 className="col-span-12 font-semibold text-xl text-violet-600">
            Forfait kilométrique sélectionné
          </h2>
          <p className="col-span-6">{kmsTitle}:</p>
          {kmsPrice === 0 ? (
            <p className="col-span-6">Inclus dans le prix</p>
          ) : (
            <p className="col-span-6">{kmsPrice}€ par jour</p>
          )}
          <p className="col-span-12">
            Soit{" "}
            <span className="text-lg font-semibold text-violet-600">
              {kmsPrice * rentalDuration}€
            </span>{" "}
            pour la durée de la location
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-3 mb-3 border border-solid border-black p-2 rounded-lg shadow shadow-black">
        <h2 className="col-span-12 font-semibold text-xl text-violet-600">
          Options sélectionée(s)
        </h2>
        <ul className="col-span-8">
          {optionsArray.map((option) => {
            for (let i = 0; i < optionsData.length; i++) {
              if (option === optionsData[i].id) {
                return (
                  <li key={optionsData[i].id} className="mb-3">
                    <p className="col-span-4">{optionsData[i].title}</p>
                    <p className="col-span-4">
                      {optionsData[i].price}€ / {optionsData[i].priceInfos}
                    </p>
                  </li>
                );
              }
            }
          })}
        </ul>
        <p className="col-span-4 place-self-center">
          Soit:{" "}
          <span className="text-lg font-semibold text-violet-600">
            {totalOptionsNum}€
          </span>{" "}
          pour la durée de la location
        </p>
      </div>

      <div className="mt-3 mb-3 border border-solid border-black p-2 rounded-lg shadow shadow-black flex flex-row justify-end ">
        <p>
          Soit une location de{" "}
          {rentalDuration > 1 ? (
            <span className="text-lg font-semibold">
              {rentalDuration} jours{" "}
            </span>
          ) : (
            <span className="text-lg font-semibold">
              {rentalDuration} jour{" "}
            </span>
          )}
          pour un montant de{" "}
          <span className="text-3xl font-bold text-violet-600">
            {protectionPrice * rentalDuration +
              kmsPrice * rentalDuration +
              totalOptionsNum +
              vehiculePrice}
            €
          </span>
        </p>
      </div>
    </div>
  );
}
