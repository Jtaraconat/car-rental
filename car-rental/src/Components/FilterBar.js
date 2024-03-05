import React from "react";

export default function FilterBar() {
  function test(e) {
    console.log(e.target);
  }

  return (
    <div className="grid grid-cols-12 gap-3 mb-5">
      <select className="col-span-3 rounded-full">Trier par</select>
      <select className="col-span-3 rounded-full" name="gearbox">
        <option defaultValue="Boite de vitesses"></option>
        <option>Manuelle</option>
        <option>Automatique</option>
      </select>
      <select className="col-span-3 rounded-full" name="engine" onChange={test}>
        <option defaultValue="Type de moteur"></option>
        <option>Essence</option>
        <option>Diesel</option>
        <option>Hybride</option>
        <option>Electrique</option>
      </select>
    </div>
  );
}
