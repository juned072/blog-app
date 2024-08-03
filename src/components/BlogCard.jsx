import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-6">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={blog.imageURL}
            alt={blog.title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {blog.author}
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {blog.title}
          </h2>
          <p className="mt-2 text-gray-500">{blog.description}</p>
          <div className="mt-4">
            <span className="text-gray-400 text-sm">
              Published on {blog.date}
            </span>
          </div>
          <div className="mt-4">
            <a
              href=""
              className="text-indigo-600 hover:text-indigo-900 font-semibold"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
