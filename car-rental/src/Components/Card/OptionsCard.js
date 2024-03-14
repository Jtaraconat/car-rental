import React, { useEffect, useState } from "react";
import { options } from "../../Utils/Options";

export default function OptionsCard({
  id,
  title,
  price,
  priceInfos,
  description,
  addSingleOption,
  deleteSingleOption,
  optionSelected,
  increment,
  decrement,
  count,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const detailsButton = (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="underline font-semibold text-lg col-span-6"
    >
      Détails
    </button>
  );
  const closeDetailsButton = (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="underline font-semibold text-lg col-span-6"
    >
      Fermer les détails
    </button>
  );

  const addMultipleButton = (
    <div className="grid grid-cols-12 border border-2 border-solid border-black rounded-full p-1">
      <button
        onClick={decrement}
        className="col-span-4 border border-2 border-solid border-slate-500 rounded-full hover:bg-black hover:text-white"
      >
        -
      </button>
      <p className="col-span-4 text-center">{count}</p>
      <button
        onClick={increment}
        className="col-span-4 border border-2 border-solid border-slate-500 rounded-full hover:bg-black hover:text-white"
      >
        +
      </button>
    </div>
  );
  let displayedButton;

  const addButton = (
    <div className="grid grid-cols-12 ">
      <button
        onClick={addSingleOption}
        className="col-span-12 border-2 border-solid rounded-full border-black p-2 hover:bg-green-500 hover:text-white"
      >
        Ajouter
      </button>
    </div>
  );

  const deleteButton = (
    <div className="grid grid-cols-12 ">
      <button
        onClick={deleteSingleOption}
        className="col-span-12 border-2 border-solid rounded-full border-black p-2 hover:bg-red-500 hover:text-white"
      >
        Retirer
      </button>
    </div>
  );

  useEffect(() => {
    if (optionSelected != undefined) {
      console.log(optionSelected);
    }
  }, [optionSelected]);

  if (optionSelected === undefined) {
    return null;
  } else if (optionSelected.includes(id)) {
    displayedButton = deleteButton;
  } else {
    displayedButton = addButton;
  }

  return (
    <div className="col-span-12 border border-solid border-black rounded-lg p-2">
      <div className="grid grid-cols-12 mb-5">
        <div className="col-span-6">
          <h2 className="text-3xl font-bold">{title}</h2>
          {isOpen && description != undefined
            ? closeDetailsButton
            : description === undefined
            ? null
            : detailsButton}
        </div>
        <div className="col-span-2 col-start-10 ">
          {id === 0
            ? addMultipleButton
            : id === 1
            ? addMultipleButton
            : id === 2
            ? addMultipleButton
            : displayedButton}
        </div>
      </div>

      <div>
        <p>
          {price}€ / {priceInfos}
        </p>
        {isOpen ? (
          <p className="bg-slate-200 rounded-lg h-20">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
