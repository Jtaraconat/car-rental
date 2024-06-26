import React, { useEffect, useState } from "react";

export default function OptionsCard({
  id,
  title,
  price,
  priceInfos,
  description,
  addSingleOption,
  deleteSingleOption,
  optionSelected,
}) {
  const [isOpen, setIsOpen] = useState(false);
  let displayedButton;

  const detailsButton = (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="underline font-semibold text-sm md:text-lg col-span-6"
    >
      Détails
    </button>
  );
  const closeDetailsButton = (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="underline font-semibold text-sm md:text-lg col-span-6"
    >
      Fermer les détails
    </button>
  );

  const addButton = (
    <div className="grid grid-cols-12 ">
      <button
        onClick={addSingleOption}
        className="col-span-12 border-2 border-solid rounded-full border-black p-2 hover:bg-celBlue100 hover:text-white all-transition"
      >
        Ajouter
      </button>
    </div>
  );

  const deleteButton = (
    <div className="grid grid-cols-12 ">
      <button
        onClick={deleteSingleOption}
        className="col-span-12 border-2 border-solid rounded-full border-black p-2 bg-bitterRed100  text-white hover:bg-bitterRed200 hover:text-white"
      >
        Retirer
      </button>
    </div>
  );

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
        <div className="col-span-8 md:col-span-6">
          <h2 className=" text-lg md:text-3xl font-bold">{title}</h2>
          {isOpen && description !== undefined
            ? closeDetailsButton
            : description === undefined
            ? null
            : detailsButton}
        </div>
        <div className="col-span-4 md:col-span-2 md:col-start-10 ">
          {displayedButton}
        </div>
      </div>

      <div>
        <p>
          {price}€ / {priceInfos}
        </p>
        {isOpen ? (
          <p className="bg-slate-200 rounded-lg p-2 flex flex-col justify-center text-sm md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
