import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import BlogContext from "../context/BlogContext";

const BlogListing = ({ isHome }) => {
  const { blogs } = useContext(BlogContext);
  return (
    <div className="p-4">
      <h2 className="text-center font-bold text-2xl text-gray-200">
        {isHome ? "Latest Blog" : "All Blog"}
      </h2>
      {blogs.length === 0 ? (
        <div className="flex justify-center items-center min-h-80">
          <p className="font-semibold text-gray-300">No Blogs!</p>
        </div>
      ) : (
        <>
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </>
      )}
    </div>
  );
};

export default BlogListing;
