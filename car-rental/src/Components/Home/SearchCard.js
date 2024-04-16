import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchCard() {
  const [dateStr, setDateStr] = useState("");
  const [searchData, setSearchData] = useState({
    pickupLocation: "",
    pickupDate: "",
    returnDate: "",
    pickupTimestamp: 0,
    returnTimestamp: 0,
    vehiculeType: "voiture",
  });
  let navigate = useNavigate();

  useEffect(() => {
    getTodayStr();
  });

  function getTodayStr() {
    let date = new Date();
    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    if (month <= 9 && day >= 10) {
      setDateStr(year + "-" + "0" + month + "-" + day);
    } else if (day <= 9 && month <= 9) {
      setDateStr(year + "-" + "0" + month + "-" + "0" + day);
    } else if (day <= 9 && month >= 10) {
      setDateStr(year + "-" + month + "-" + "0" + day);
    } else {
      setDateStr(year + "-" + month + "-" + day);
    }
  }

  function getPickupLocation(e) {
    e.preventDefault();
    setSearchData({ ...searchData, pickupLocation: e.target.value });
  }

  function getPickupDate(e) {
    e.preventDefault();
    getTodayStr();
    setSearchData({
      ...searchData,
      pickupDate: e.target.value,
      pickupTimestamp: e.target.valueAsNumber,
    });
  }

  function getReturnDate(e) {
    e.preventDefault();
    setSearchData({
      ...searchData,
      returnDate: e.target.value,
      returnTimestamp: e.target.valueAsNumber,
    });
  }

  function handleOptionChange(e) {
    setSearchData({ ...searchData, vehiculeType: e.target.value });
  }

  function searchRental(e) {
    e.preventDefault();
    if (
      searchData.pickupLocation === "" ||
      searchData.pickupDate === "" ||
      searchData.returnDate === ""
    ) {
      alert("un ou plusieur(s) champs sont manquants");
    } else {
      navigate("/search-results", { state: { searchData } });
    }
  }

  return (
    <div className="border-solid border-2 rounded-lg my-10 p-5 shadow-lg shadow-ghostwhite ">
      <div className="mt-3 mb-3">
        <form className="flex flex-col w-full justify-evenly">
          <div className="flex flex-row justify-around md:grid md:grid-cols-12 mt-3 mb-3">
            <div className="col-span-2">
              <input
                name="vehiculeType"
                onChange={handleOptionChange}
                checked={searchData.vehiculeType === "voiture"}
                type="radio"
                id="voiture"
                value="voiture"
              />
              <label htmlFor="voiture">Voiture</label>
            </div>
            <div className="col-span-2">
              <input
                name="vehiculeType"
                onChange={handleOptionChange}
                checked={searchData.vehiculeType === "utilitaire"}
                type="radio"
                id="utilitaire"
                value="utilitaire"
              />
              <label htmlFor="utilitaire">Utilitaire</label>
            </div>
          </div>
          <div className="location flex flex-col md:grid md:grid-cols-12 gap-3 items-end mb-3">
            <div className="location-input col-span-8">
              <label htmlFor="pickup-location">Retrait et retour</label>
              <input
                id="pickup-location"
                name="pickup-location"
                className="w-full rounded"
                placeholder="Rechercher votre ville"
                onChange={getPickupLocation}
              ></input>
            </div>
          </div>
          <div className="date-selector flex flex-col md:grid md:grid-cols-12 gap-3 items-end">
            <div className="flex flex-col w-full md:col-span-4">
              <label htmlFor="startDate" className="pr-2">
                Date de départ
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="rounded"
                onChange={getPickupDate}
                min={dateStr}
              ></input>
            </div>
            <div className="flex flex-col w-full md:col-span-4">
              <label htmlFor="returnDate" className="pr-2">
                Date de retour
              </label>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                className="rounded"
                onChange={getReturnDate}
                min={searchData.pickupDate}
              ></input>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-3 mb-3 flex justify-center md:justify-end">
        <Link
          className="bg-celBlue100 rounded-lg text-slate-600  hover:bg-celBlue200 text-white p-5
          transition-all "
          onClick={searchRental}
        >
          Recherche un véhicule
        </Link>
      </div>
    </div>
  );
}
