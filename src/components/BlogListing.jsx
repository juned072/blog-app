import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import BlogContext from "../context/BlogContext";

const BlogListing = ({ isHome }) => {
  const { blogs } = useContext(BlogContext);
  return (
    <div className="p-1">
      <h2 className="text-center font-bold text-2xl text-gray-200 my-6">
        {isHome ? "Latest Blog" : "All Blog"}
      </h2>
      {blogs.length === 0 ? (
        <div className="flex justify-center items-center min-h-80">
          <p className="font-semibold text-gray-300">No Blogs!</p>
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogListing;
