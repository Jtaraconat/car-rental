import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProtectionCard from "./Card/ProtectionCard";
import { protections, kms, options } from "../Utils/Options";
import KmsCard from "./Card/KmsCard";
import OptionsCard from "./Card/OptionsCard";

export default function RentalOptions() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeProtectionIndex, setActiveProtectionIndex] = useState(0);
  const [activeKmsIndex, setActiveKmsIndex] = useState(0);
  const [singleOptionArray, setSingleOptionArray] = useState([]);
  const [optionSelected, setOptionSelected] = useState([]);
  const [driver, setDriver] = useState(0);
  const [strap, setStrap] = useState(0);
  const [handCart, setHandCart] = useState(0);

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
    kmsId: kms[0].id,
    kmsTitle: kms[0].title,
    kmsPrice: kms[0].price,
    priceWithProtection: "",
  });
  {
    /* 
  function updateProtection(id) {
    setAllRentalInfos({
      ...allRentalInfos,
      protectionId: protections[id].id,
      protectionTitle: protections[id].title,
      protectionPrice: protections[id].price,
    });
  }

  function updateKms(id) {
    setAllRentalInfos({
      ...allRentalInfos,
      kmsId: kms[id].id,
      kmsTitle: kms[id].title,
      kmsPrice: kms[id].price,
    });
  }*/
  }

  function submit(e) {
    e.preventDefault();

    // navigate("/order-infos", { state: { allRentalInfos } });
  }

  function addSingleOption(option) {
    const notFound = !singleOptionArray.includes(option.id);
    if (notFound) {
      setSingleOptionArray([...singleOptionArray, option.id]);
    }
  }

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

  function updateKms(id) {
    setActiveKmsIndex(id);

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

      <div className="col-span-12 mt-5 text-xl">
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

      <div className="col-span-12 mt-5 text-xl">
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

      <div className="col-span-12 mt-5 text-xl">
        <h2>Selectionnez les équipements dont vous avez besoin</h2>
      </div>

      {options.map((item) => {
        if (item.id >= 0 && item.id <= 3) {
          return null;
        }
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
      <OptionsCard
        key={options[0].id}
        id={options[0].id}
        title={options[0].title}
        price={options[0].price}
        priceInfos={options[0].priceInfos}
        description={options[0].description}
        increment={() => setDriver(driver + 1)}
        decrement={() => (driver >= 0 ? setDriver(driver - 1) : setDriver(0))}
        count={driver}
        optionSelected={""}
      />
      <OptionsCard
        key={options[1].id}
        id={options[1].id}
        title={options[1].title}
        price={options[1].price}
        priceInfos={options[1].priceInfos}
        description={options[1].description}
        increment={() => setStrap(strap + 1)}
        decrement={() => (strap >= 0 ? setStrap(strap - 1) : setStrap(0))}
        count={strap}
        optionSelected={""}
      />
      <OptionsCard
        key={options[2].id}
        id={options[2].id}
        title={options[2].title}
        price={options[2].price}
        priceInfos={options[2].priceInfos}
        description={options[2].description}
        increment={() => setHandCart(handCart + 1)}
        decrement={() =>
          handCart >= 0 ? setHandCart(handCart - 1) : setHandCart(0)
        }
        count={handCart}
        optionSelected={""}
      />

      <div className="col-span-2 col-start-11 ">
        <button
          onClick={submit}
          className="border-2 border-solid rounded-full border-black p-2 w-32 text-xl"
        >
          Confirmer
        </button>
      </div>
    </div>
  );
}
