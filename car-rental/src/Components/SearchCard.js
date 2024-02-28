import React from "react";

export default function SearchCard() {
  return (
    <div className="bg-indigo-400 border-solid border-2 border-black rounded mt-3 mb-5 pt-5 pb-5 h-96 max-h96 flex">
      <form className="flex flex-col w-full justify-evenly">
        <div className="location grid grid-cols-12 gap-3 items-end p-5">
          <div className="location-input col-span-8">
            <label htmlFor="pickup-location">Retrait et retour</label>
            <input
              id="pickup-location"
              name="pickup-location"
              className="w-full rounded"
              placeholder="Rechercher votre ville de départ"
            ></input>
          </div>
          <div className="location-different col-span-4">
            <button className="bg-white p-5 rounded">
              Lieu de retour différent?
            </button>
          </div>
        </div>
        <div className="date-selector grid grid-cols-12 gap-3 items-end p-5">
          <div className="flex flex-col col-span-4">
            <label htmlFor="startDate" className="pr-2">
              Date de départ
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="rounded"
            ></input>
          </div>
          <div className="flex flex-col col-span-4">
            <label htmlFor="returnDate" className="pr-2">
              Date de retour
            </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              className="rounded"
            ></input>
          </div>
          <div className="search-button col-span-4">
            <button className="bg-white p-5 rounded">
              Recherche un véhicule
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
