import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SearchCard() {
  {
    /* 
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
*/
  }

  const [isVisible, setIsVisible] = useState(false);
  const [dateStr, setDateStr] = useState("");
  const [searchData, setSearchData] = useState({
    pickupLocation: "",
    returnLocation: "",
    pickupDate: "",
    returnDate: "",
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

  function getReturnLocation(e) {
    e.preventDefault();
    isVisible ? setIsVisible(false) : setIsVisible(!isVisible);
    setSearchData({ ...searchData, returnLocation: e.target.value });
  }

  function getPickupDate(e) {
    e.preventDefault();
    getTodayStr();
    setSearchData({ ...searchData, pickupDate: e.target.value });
  }

  function getReturnDate(e) {
    e.preventDefault();
    setSearchData({ ...searchData, returnDate: e.target.value });
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
              onChange={getPickupLocation}
            ></input>
            {isVisible ? (
              <input
                id="return-location"
                name="return-location"
                className="w-full rounded"
                placeholder="Rechercher votre ville de retour"
                onChange={getReturnLocation}
              ></input>
            ) : (
              ""
            )}
          </div>
          <div className="col-span-4" id="return-location">
            <button
              className="bg-white p-5 rounded"
              onClick={getReturnLocation}
            >
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
              onChange={getPickupDate}
              min={dateStr}
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
              onChange={getReturnDate}
              min={searchData.pickupDate}
            ></input>
          </div>
          <div className="search-button col-span-4">
            <Link className="bg-white p-5 rounded" onClick={searchRental}>
              Recherche un véhicule
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
