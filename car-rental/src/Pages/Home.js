import React from "react";
import SearchCard from "../Components/SearchCard.js";
import CarSection from "../Components/CarSection.js";
import ReviewCard from "../Components/ReviewCard.js";
import Footer from "../Components/Footer.js";

export default function Home() {
  return (
    <div className="h-dvh">
      <SearchCard />
      <CarSection />
      <ReviewCard />
      <Footer />
    </div>
  );
}
