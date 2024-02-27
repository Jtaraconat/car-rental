import React from "react";
import { reviews } from "../Utils/Reviews.js";
import male1 from "../Assets/male-1.jpg";
import star from "../Assets/star.png";

export default function ReviewCard(props) {
  const numbers = Array.from({ length: props.stars });
  const stars = numbers.map((number, index) => {
    return <img src={star} key={index} />;
  });

  return (
    <div className="card bg-blue-200 flex flex-col p-3 mb-5">
      <h2 className="text-4xl font-normal pb-6">Ce que pensent nos clients</h2>
      <div className="flex flex-row items-center mb-3">
        <img src={male1} alt="photo" className=" mr-5 rounded-full w-20 h-20" />
        <ul className="flex flex-row max-h-6 max-w-6">{stars}</ul>
      </div>

      <div>
        <h2 className="font-medium">{props.name}</h2>
        <p className="text-slate-500 italic">"{props.review}"</p>
      </div>
    </div>
  );
}
