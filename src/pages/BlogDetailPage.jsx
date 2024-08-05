import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import { IoMdMore } from "react-icons/io";

const BlogDetail = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blogPost = blogs.find((post) => post.id === id);

  if (!blogPost) {
    return <div className="text-center mt-20 text-xl">Blog post not found</div>;
  }

  return (
    <div className="max-w-screen-lg  mx-auto p-8">
      <div className="mb-8 flex justify-between items-center">
        <span className="">/Home</span>
        <span className="text-gray-100 text-2xl cursor-pointer">
          <IoMdMore />
        </span>
      </div>
      <div>
        <div className="mb-4">
          <span className="text-gray-400">Blog created on {blogPost.date}</span>
        </div>
        <h1 className="text-4xl font-bold mb-5">{blogPost.title}</h1>
        {blogPost.image && (
          <img
            src={blogPost.imageURL}
            alt={blogPost.title}
            className="md:w-[800px] w-full h-auto mb-4 rounded-md shadow-sm"
          />
        )}
        <p className="text-lg mb-8">{blogPost.description}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
