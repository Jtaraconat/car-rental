import React, { useDebugValue } from "react";
import { useState, useEffect } from "react";
import { reviews } from "../../Utils/Reviews.js";
import star from "../../Assets/reviews/star.png";

export default function ReviewCard() {
  const [review, setReview] = useState("");
  const [count, setCount] = useState(0);

  const numbers = Array.from({ length: reviews[count].stars });
  const stars = numbers.map((number, index) => {
    return <img src={star} key={index} />;
  });

  useEffect(() => {
    setReview(reviews[count]);
    const interval = setInterval(() => {
      if (count < reviews.length - 1) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="card flex flex-col p-5 my-10 shadow shadow-lg shadow-slate-400 rounded-lg border-slate-600">
      <h2 className="text-center text-4xl font-normal pb-6 text-celBlue100">
        Ce que pensent nos clients
      </h2>
      <div className="  p-3" id="review-card">
        <div className="flex flex-col items-center mb-3 ">
          <img
            src={review.photo}
            alt="photo"
            className="rounded-full w-20 h-20"
          />
          <ul className="flex flex-row scale-50">{stars}</ul>
        </div>

        <div className="text-center">
          <h2 className="font-medium">{review.name}</h2>
          <p className="text-slate-500 italic">"{review.review}"</p>
        </div>
      </div>
    </div>
  );
}
