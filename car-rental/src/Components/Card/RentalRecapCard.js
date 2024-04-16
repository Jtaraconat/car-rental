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
    if (optionsArray.length !== 0) {
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
      <div className="grid grid-cols-12 my-3 border border-solid border-slate-400 p-2 rounded-lg shadow shadow-slate-400 shadow-lg">
        <h2 className="col-span-12 font-semibold text-xl text-celBlue100">
          Voiture sélectionnée
        </h2>
        <div className="col-span-12 grid grid-cols-12 gap-3">
          <img src={vehiculeImage} className="col-span-6"></img>
          <p className="col-span-6 place-self-center text-2xl">
            {vehiculeName}
          </p>
        </div>

        <p className="col-span-12 place-self-center">
          Soit{" "}
          <span className="text-lg font-semibold text-celBlue100">
            {vehiculePrice}€
          </span>{" "}
          pour la durée de location
        </p>
      </div>

      <div className="grid grid-cols-12 my-3 md:gap-3">
        <div className="col-span-12 md:col-span-6 grid grid-cols-12 my-3 border border-solid border-slate-400 p-2 rounded-lg shadow shadow-slate-400">
          <div className="col-span-12 mb-3">
            <h2 className="col-span-12 font-semibold text-xl text-celBlue100 mb-2">
              Protection sélectionnée
            </h2>
            <div className="flex flex-row gap-2 items-center">
              <p className="col-span-6">{protectionTitle}:</p>
              {protectionPrice === 0 ? (
                <p className="col-span-6">Inclus dans le prix</p>
              ) : (
                <p className="col-span-6">{protectionPrice}€ par jour</p>
              )}
            </div>
          </div>

          <p className="col-span-12 ">
            Soit{" "}
            <span className="text-lg font-semibold text-celBlue100">
              {protectionPrice * rentalDuration}€
            </span>{" "}
            pour la durée de la location
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 grid grid-cols-12 my-3 border border-solid border-slate-400 p-2 rounded-lg shadow shadow-slate-400">
          <div className="col-span-12 mb-3">
            <h2 className="col-span-12 font-semibold text-xl text-celBlue100 mb-2">
              Forfait kilométrique sélectionné
            </h2>
            <div className="flex flex-row gap-2 items-center">
              <p className="col-span-6">{kmsTitle}:</p>
              {kmsPrice === 0 ? (
                <p className="col-span-6">Inclus dans le prix</p>
              ) : (
                <p className="col-span-6">{kmsPrice}€ par jour</p>
              )}
            </div>
          </div>

          <p className="col-span-12">
            Soit{" "}
            <span className="text-lg font-semibold text-celBlue100">
              {kmsPrice * rentalDuration}€
            </span>{" "}
            pour la durée de la location
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 my-3 border border-solid border-slate-400 p-2 rounded-lg shadow shadow-slate-400 ">
        <ul className="col-span-12 md:col-span-8">
          {optionsArray.length === 0 ? (
            <div className="col-span-12 font-semibold text-xl text-celBlue100">
              <h2>Aucune option selectionnée</h2>
            </div>
          ) : (
            <div>
              <h2 className="col-span-12 font-semibold text-xl text-celBlue100">
                Options sélectionée(s)
              </h2>
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
              <p className="col-span-4 place-self-center">
                Soit:{" "}
                <span className="text-lg font-semibold text-celBlue100">
                  {totalOptionsNum}€
                </span>{" "}
                pour la durée de la location
              </p>
            </div>
          )}
        </ul>
      </div>

      <div className="mt-3 mb-3 border border-solid border-slate-400 p-2 rounded-lg shadow shadow-slate-400 flex flex-row justify-end ">
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
          <span className="text-3xl font-bold text-celBlue100">
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
