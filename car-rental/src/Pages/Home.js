import React from "react";
import Navbar from "../Components/Navbar.js";
import SearchCard from "../Components/SearchCard.js";
import CarCard from "../Components/CarCard.js";
import ReviewCard from "../Components/ReviewCard.js";
import Footer from "../Components/Footer.js";

export default function Home() {
  return (
    <div className="h-dvh">
      <Navbar />
      <SearchCard />
      <CarCard />
      <ReviewCard />
      <Footer />
    </div>
  );
}
