import React from "react";
import BlogListing from "../components/BlogListing";
import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="p-4">
        <BlogListing isHome={true} />
      </div>
    </div>
  );
};

export default Home;
