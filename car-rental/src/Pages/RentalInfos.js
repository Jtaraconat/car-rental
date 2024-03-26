import { React, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RentalRecapCard from "../Components/Card/RentalRecapCard";
import UserInfosFormCard from "../Components/Card/UserInfosFormCard";

export default function RentalInfos() {
  const location = useLocation();
  const [isRecapVisible, setIsRecapVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [allRentalInfos, setAllRentalInfos] = useState({
    priceWithoutOptions: location.state.allRentalInfos.priceWithoutOptions,
    vehiculeId: location.state.allRentalInfos.vehiculeId,
    vehiculeImage: location.state.allRentalInfos.vehiculeImage,
    vehiculeName: location.state.allRentalInfos.vehiculeName,
    rentalDuration: location.state.allRentalInfos.rentalDuration,
    pickupLocation: location.state.allRentalInfos.pickupLocation,
    returnLocation: location.state.allRentalInfos.returnLocation,
    protectionId: location.state.allRentalInfos.protectionId,
    protectionTitle: location.state.allRentalInfos.protectionTitle,
    protectionPrice: location.state.allRentalInfos.protectionPrice,
    kmsID: location.state.allRentalInfos.kmsID,
    kmsTitle: location.state.allRentalInfos.kmsTitle,
    kmsPrice: location.state.allRentalInfos.kmsPrice,
    optionsArray: location.state.allRentalInfos.optionsArray,
    firstname: "",
  });

  const [userInfos, setUserInfos] = useState({
    firstname: "",
    firstname: "",
    lastname: "",
    adress1: "",
    adress2: "",
    postalcode: "",
    city: "",
    email: "",
    phoneNumber: "",
  });

  const [mailErrorMessage, setMailErrorMessage] = useState("");
  const [numberErrorMessage, setNumberErrorMessage] = useState("");
  const [postalCodeErrorMessage, setPostalCodeErrorMessage] = useState("");

  function handleChange(e) {
    switch (e.target.name) {
      case "Nom":
        setUserInfos({ ...userInfos, firstname: e.target.value });
        console.log(userInfos.firstname);

        break;
      case "Prénom":
        setUserInfos({ ...userInfos, lastname: e.target.value });
        break;
      case "Adresse":
        setUserInfos({ ...userInfos, adress1: e.target.value });
        break;
      case "Complément d'adresse":
        setUserInfos({ ...userInfos, adress2: e.target.value });
        break;
      case "Ville":
        setUserInfos({ ...userInfos, city: e.target.value });
        break;
      default:
        break;
    }
  }

  function handleMail(e) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value) === true && e.target.value != "") {
      setMailErrorMessage("");
      setUserInfos({ ...userInfos, email: e.target.value });
    } else {
      setMailErrorMessage("L'adresse e-mail n'est pas valide");
    }
  }

  function handlePhoneNumber(e) {
    const inputRegex = /^\d{10}$/;
    if (
      inputRegex.test(e.target.value) === true &&
      e.target.value != "" &&
      e.target.name === "Numéro de téléphone"
    ) {
      setNumberErrorMessage("");
      setUserInfos({ ...userInfos, phoneNumber: e.target.value });
    } else {
      setNumberErrorMessage(
        "Ce champ ne doit contenir que des chiffres compris entre 0 et 9 et être composé de 10 chiffres."
      );
    }
  }

  function handlePostalCode(e) {
    const inputRegex = /^\d{5}$/;
    if (
      inputRegex.test(e.target.value) === true &&
      e.target.value != "" &&
      e.target.name === "Code postal"
    ) {
      setPostalCodeErrorMessage("");
      setUserInfos({ ...userInfos, phoneNumber: e.target.value });
    } else {
      setPostalCodeErrorMessage(
        "Ce champ ne doit contenir que des chiffres compris entre 0 et 9 et être composé de 5 chiffres"
      );
    }
  }

  return (
    <div className="p-2 grid grids-col-12">
      <div className="col-span-12">
        {isRecapVisible ? (
          <button
            onClick={() => setIsRecapVisible(!isRecapVisible)}
            className="border border-solid border-black rounded-lg p-2 hover:bg-violet-600 hover:text-white all-transition"
          >
            Masquer le récapitulatif de la réservation
          </button>
        ) : (
          <button
            onClick={() => setIsRecapVisible(!isRecapVisible)}
            className="border border-solid border-black rounded-lg p-2 hover:bg-violet-600 hover:text-white all-transition"
          >
            Afficher le récapitulatif de la réservation
          </button>
        )}

        {isRecapVisible ? (
          <RentalRecapCard
            rentalDuration={allRentalInfos.rentalDuration}
            vehiculeImage={allRentalInfos.vehiculeImage}
            vehiculeName={allRentalInfos.vehiculeName}
            vehiculePrice={allRentalInfos.priceWithoutOptions}
            protectionTitle={allRentalInfos.protectionTitle}
            protectionPrice={allRentalInfos.protectionPrice}
            kmsTitle={allRentalInfos.kmsTitle}
            kmsPrice={allRentalInfos.kmsPrice}
            optionsArray={allRentalInfos.optionsArray}
          />
        ) : null}
      </div>
      <div className="col-span-12 mt-5">
        {isFormVisible ? (
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="border border-solid border-black rounded-lg p-2 hover:bg-violet-600 hover:text-white all-transition"
          >
            Masquer le formulaire
          </button>
        ) : (
          <button
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="border border-solid border-black rounded-lg p-2 hover:bg-violet-600 hover:text-white all-transition"
          >
            Afficher le formulaire
          </button>
        )}
        {isFormVisible ? (
          <UserInfosFormCard
            firstname={userInfos.firstname}
            lastname={userInfos.lastname}
            adress1={userInfos.adress1}
            adress2={userInfos.adress2}
            postalcode={userInfos.postalcode}
            city={userInfos.city}
            email={userInfos.email}
            phoneNumber={userInfos.phoneNumber}
            handleChange={(e) => handleChange(e)}
            handleMail={(e) => handleMail(e)}
            handlePhoneNumber={(e) => handlePhoneNumber(e)}
            handlePostalCode={(e) => handlePostalCode(e)}
            mailErrorMessage={mailErrorMessage}
            numberErrorMessage={numberErrorMessage}
            postalCodeErrorMessage={postalCodeErrorMessage}
          />
        ) : null}
      </div>

      <div className=" grid grid-cols-12 col-span-12 mt-5">
        <button className="border border-solid border-black rounded-lg p-2 col-span-3 col-start-10 hover:bg-violet-600 hover:text-white hover:scale-105 all-transition">
          Confirmer la réservation
        </button>
      </div>
    </div>
  );
}
