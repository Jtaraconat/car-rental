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
    <div>
      <div className="">
        <div className="grid grid-cols-12 mt-3 mb-3 border border-solid border-black p-2 rounded-lg shadow shadow-black">
          <h2 className="col-span-12">Voiture sélectionnée</h2>
          <img src={vehiculeImage} className="col-span-4"></img>
          <p className="col-span-4">{vehiculeName}</p>
          <p className="col-span-4 place-self-center">
            Soit <span className="text-lg font-semibold">{vehiculePrice}€</span>{" "}
            pour la durée de location
          </p>
        </div>

        <div className="grid grid-cols-12 mt-3 mb-3 border border-solid border-black p-2 rounded-lg shadow shadow-black">
          <h2 className="col-span-12">Protection sélectionnée</h2>
          <p className="col-span-4">{protectionTitle}</p>
          <p className="col-span-4">{protectionPrice}€ par jour</p>
          <p className="col-span-4 place-self-center">
            Soit{" "}
            <span className="text-lg font-semibold">
              {protectionPrice * rentalDuration}€
            </span>{" "}
            pour la durée de la location
          </p>
        </div>

        <div className="grid grid-cols-12 mt-3 mb-3 border border-solid border-black p-2 rounded-lg shadow shadow-black">
          <h2 className="col-span-12">Forfait kilométrique sélectionné</h2>
          <p className="col-span-4">{kmsTitle}</p>
          <p className="col-span-4">{kmsPrice}€ par jour</p>
          <p className="col-span-4 place-self-center">
            Soit{" "}
            <span className="text-lg font-semibold">
              {kmsPrice * rentalDuration}€
            </span>{" "}
            pour la durée de la location
          </p>
        </div>

        <div className="grid grid-cols-12 mt-3 mb-3 border border-solid border-black p-2 rounded-lg shadow shadow-black">
          <h2 className="col-span-12">Options sélectionée(s)</h2>
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
            <span className="text-lg font-semibold">{totalOptionsNum}€</span>{" "}
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
            <span className="text-3xl font-bold">
              {protectionPrice * rentalDuration +
                kmsPrice * rentalDuration +
                totalOptionsNum +
                vehiculePrice}
              €
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
