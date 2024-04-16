import React, { useState } from "react";
import Input from "../../Components/Input";

export default function UserInfosFormCard({
  handleChange,
  handleMail,
  handlePhoneNumber,
  handlePostalCode,
  mailErrorMessage,
  numberErrorMessage,
  postalCodeErrorMessage,
}) {
  return (
    <div className="grid grid-cols-12 mt-2 border border-solid border-slate-400 p-2 rounded-lg shadow shadow-slate-400">
      <form className=" grid grid-cols-12 col-span-12 gap-3 text-celBlue100">
        <Input
          name="Nom"
          label="Nom"
          type={"text"}
          key="1"
          placeholder="Entrer votre nom"
          onchange={(e) => handleChange(e)}
        ></Input>
        <Input
          name="Prénom"
          label="Prénom"
          type={"text"}
          key="2"
          placeholder="Entrer votre prénom"
          onchange={(e) => handleChange(e)}
        ></Input>
        <Input
          label="Email"
          type={"text"}
          key="3"
          placeholder="Entrer votre adresse e-mail"
          onchange={(e) => handleMail(e)}
          errorMessage={mailErrorMessage}
        ></Input>
        <Input
          name="Numéro de téléphone"
          label="Numéro de téléphone"
          type={"text"}
          key="4"
          placeholder="Entrer votre numéro de téléphone"
          onchange={(e) => handlePhoneNumber(e)}
          errorMessage={numberErrorMessage}
        ></Input>
        <Input
          name="Adresse"
          label="Adresse"
          type={"text"}
          key="5"
          placeholder="Entrer votre adresse"
          onchange={(e) => handleChange(e)}
        ></Input>
        <Input
          name="Complément d'adresse"
          label="Complément d'adresse"
          type={"text"}
          key="6"
          placeholder="Complément d'adresse (batiment, appartement)"
          onchange={(e) => handleChange(e)}
        ></Input>
        <Input
          name="Code postal"
          label="Code postal "
          type={"text"}
          key="7"
          placeholder="Entrer votre numéro de téléphone"
          onchange={(e) => handlePostalCode(e)}
          errorMessage={postalCodeErrorMessage}
        ></Input>
        <Input
          name="Ville"
          label="Ville"
          type={"text"}
          key="8"
          placeholder="Entrer votre ville"
          onchange={(e) => handleChange(e)}
        ></Input>
      </form>
    </div>
  );
}
