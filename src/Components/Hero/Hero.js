import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Hero.css";

function Hero() {
  return (
    <div className="Hero grid">
      <Navbar />
      <div className="explore-page-title h-full flex items-center w-full place-content-center">
        <p className="text-white text-4xl md:text-6xl font-black">
          Explore NFT's
        </p>
      </div>
    </div>
  );
}

export default Hero;
