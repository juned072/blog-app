import React from "react";
import BlogListing from "../components/BlogListing";
import HeroSection from "../components/HeroSection";
import ContactUs from "../pages/ContactUs";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className="p-4">
        <div>
          <BlogListing isHome={true} />
        </div>
        <div className="max-w-screen-sm m-auto">
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default Home;
