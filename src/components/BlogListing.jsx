import React, { useContext } from "react";
import BlogCard from "./BlogCard";
import BlogContext from "../context/BlogContext";

const BlogListing = () => {
  const { blogs } = useContext(BlogContext);
  return (
    <div className="p-4">
      {blogs.map((blog, index) => (
        <BlogCard key={index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogListing;
