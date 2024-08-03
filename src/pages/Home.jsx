import React from "react";
import BlogListing from "../components/BlogListing";

const Home = () => {
  return (
    <div className="p-4">
      <BlogListing isHome={true} />
    </div>
  );
};

export default Home;
