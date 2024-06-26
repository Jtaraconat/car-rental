import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProtectionCard from "./Card/ProtectionCard";
import { protections, kms, optionsData } from "../Utils/Options";
import KmsCard from "./Card/KmsCard";
import OptionsCard from "./Card/OptionsCard";
import DisplayButton from "./DisplayButton.js";
import HideButton from "./HideButton.js";

export default function RentalOptions() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeProtectionIndex, setActiveProtectionIndex] = useState(10);
  const [activeKmsIndex, setActiveKmsIndex] = useState(0);
  const [singleOptionArray, setSingleOptionArray] = useState([]);
  const [isProtectionVisible, setIsProtectionVisible] = useState(true);
  const [isKmsVisible, setIsKmsVisible] = useState(true);
  const [isOptionsVisible, setIsOptionsVisible] = useState(true);

  const [allRentalInfos, setAllRentalInfos] = useState({
    vehiculeId: location.state.selectedVehicule.vehiculeId,
    vehiculeName: location.state.selectedVehicule.vehiculeName,
    vehiculeImage: location.state.selectedVehicule.vehiculeImage,
    rentalDuration: location.state.selectedVehicule.rentalDuration,
    priceWithoutOptions: location.state.selectedVehicule.priceWithoutOptions,
    pickupLocation: location.state.selectedVehicule.pickupLocation,
    protectionId: protections[0].id,
    protectionTitle: protections[0].title,
    protectionPrice: protections[0].price,
    kmsId: kms[0].id,
    kmsTitle: kms[0].title,
    kmsPrice: kms[0].price,
    optionsArray: [],
  });

  function submit(e) {
    e.preventDefault();
    navigate("/order-infos", { state: { allRentalInfos } });
  }

  function addSingleOption(option) {
    const notFound = !singleOptionArray.includes(option.id);
    if (notFound) {
      setSingleOptionArray([...singleOptionArray, option.id]);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setAllRentalInfos({ ...allRentalInfos, optionsArray: singleOptionArray });
  }, [singleOptionArray]);

  function deleteSingleOption(option) {
    const found = singleOptionArray.includes(option.id);
    if (found) {
      setSingleOptionArray((oldArr) => {
        return oldArr.filter((el) => el !== option.id);
      });
    }
  }

  function updateProtection(id) {
    setActiveProtectionIndex(id);
  }
  useEffect(() => {
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
  }, [activeProtectionIndex]);

  function updateKms(id) {
    setActiveKmsIndex(id);
  }
  useEffect(() => {
    kms.map((kms) => {
      if (kms.id === activeKmsIndex) {
        setAllRentalInfos({
          ...allRentalInfos,
          kmsId: kms.id,
          kmsPrice: kms.price,
          kmsTitle: kms.title,
        });
      }
    });
  }, [activeKmsIndex]);

  return (
    <div className="grid grid-cols-12 gap-3 p-2 mt-5 mb-10">
      <h1 className="col-span-12 text-4xl text-celBlue100">
        Choisissez vos options
      </h1>
      <div className="col-span-12 flex flex-row justify-around my-5">
        <div className="flex flex-col">
          <p>Prix sans options:</p>
          <p className="text-2xl font-bold text-celBlue100">
            {allRentalInfos.priceWithoutOptions}€
          </p>
        </div>

        <div className="flex flex-col">
          <p> Durée de la location:</p>
          <p className="text-2xl font-bold text-celBlue100">
            {" "}
            {allRentalInfos.rentalDuration} jour(s)
          </p>
        </div>

        <div className="flex flex-col">
          <p>Véhicule sélectionné:</p>
          <p className="text-2xl font-bold text-celBlue100">
            {allRentalInfos.vehiculeName}
          </p>
        </div>
      </div>
      <div className="col-span-12 mt-6">
        {isProtectionVisible ? (
          <HideButton
            text={"protections"}
            onClick={() => setIsProtectionVisible(!isProtectionVisible)}
          />
        ) : (
          <DisplayButton
            text={"protections"}
            onClick={() => setIsProtectionVisible(!isProtectionVisible)}
          />
        )}
        {isProtectionVisible ? (
          <div className="grid grid-cols-12 col-span-12 gap-3 ">
            <div className="col-span-12 mt-5 text-2xl">
              <h2>Selectionnez la protection adaptée</h2>
            </div>

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
          </div>
        ) : null}
      </div>

      <div className="col-span-12  mt-6">
        {isKmsVisible ? (
          <HideButton
            text={"forfaits"}
            onClick={() => setIsKmsVisible(!isKmsVisible)}
          />
        ) : (
          <DisplayButton
            text={"forfaits"}
            onClick={() => setIsKmsVisible(!isKmsVisible)}
          />
        )}
        {isKmsVisible ? (
          <div className="grid grid-cols-12 col-span-12 gap-3 ">
            <div className="col-span-12 mt-5 text-2xl">
              <h2>Selectionnez le forfait kilométrique qui vous correspond</h2>
            </div>

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
                    updateKms(item.id);
                  }}
                />
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="col-span-12  mt-6">
        {isOptionsVisible ? (
          <HideButton
            text={"options"}
            onClick={() => setIsOptionsVisible(!isOptionsVisible)}
          />
        ) : (
          <DisplayButton
            text={"options"}
            onClick={() => setIsOptionsVisible(!isOptionsVisible)}
          />
        )}
        {isOptionsVisible ? (
          <div className="grid grid-cols-12 col-span-12 gap-3 ">
            <div className="col-span-12 mt-5 text-2xl">
              <h2>Selectionnez les équipements dont vous avez besoin</h2>
            </div>

            {optionsData.map((item) => {
              return (
                <OptionsCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  priceInfos={item.priceInfos}
                  description={item.description}
                  addSingleOption={() => {
                    addSingleOption(item);
                  }}
                  deleteSingleOption={() => {
                    deleteSingleOption(item);
                  }}
                  optionSelected={singleOptionArray}
                />
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="col-span-12 justify-self-end mt-6">
        <button
          onClick={submit}
          className="border-2 border-solid rounded-full border-black p-2 w-40 text-xl hover:bg-celBlue100 hover:text-white all-transition"
        >
          Confirmer
        </button>
      </div>
    </div>
  );
}
