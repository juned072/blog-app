import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gray-800 text-white py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/nature-landscape-with-vegetation-flora_23-2150859681.jpg?t=st=1722749250~exp=1722752850~hmac=5476c2dc9d5e289558eac5a5a8d27c5fe57f6975583b8d756522d4d63953bd43&w=740)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg md:text-2xl mb-8">Discover amazing content</p>
        <Link to="/blog">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
