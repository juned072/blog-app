import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-md mx-auto bg-gray-800 border border-gray-600 rounded-xl shadow-md overflow-hidden my-6">
      <img
        className="h-48 w-full object-cover"
        src={blog.imageURL}
        alt={blog.title}
      />
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {blog.author}
        </div>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-gray-200 hover:underline">
          {blog.title}
        </h2>
        <p className="mt-2 text-gray-400">{blog.description}</p>
        <div className="mt-4">
          <span className="text-gray-500 text-sm">
            Published on {blog.date}
          </span>
        </div>
        <div className="mt-4">
          <Link to={`/blog/${blog.id}`}>
            <span className="text-indigo-500 hover:text-indigo-700 font-semibold">
              Read More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
