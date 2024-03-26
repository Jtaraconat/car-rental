import React from "react";
import SearchCard from "../Components/Home/SearchCard.js";
import CarSection from "../Components/Home/CarSection.js";
import ReviewCard from "../Components/Home/ReviewCard.js";
import AboutSection from "../Components/Home/AboutSection.js";

export default function Home() {
  return (
    <div className="p-2">
      <SearchCard />
      <CarSection />
      <AboutSection />
      <ReviewCard />
    </div>
  );
}
