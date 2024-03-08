import React from "react";
import SearchCard from "../Components/Home/SearchCard.js";
import CarSection from "../Components/Home/CarSection.js";
import ReviewCard from "../Components/Home/ReviewCard.js";
import Footer from "../Components/Home/Footer.js";
import AboutSection from "../Components/Home/AboutSection.js";

export default function Home() {
  return (
    <div className="h-dvh">
      <SearchCard />
      <CarSection />
      <ReviewCard />
      <AboutSection />
      <Footer />
    </div>
  );
}
