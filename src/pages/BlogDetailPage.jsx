import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import BlogContext from "../context/BlogContext";
import { IoMdMore } from "react-icons/io";
import { MdHome } from "react-icons/md";

const BlogDetail = () => {
  const [showOptions, setShowOptions] = useState(false);
  const { id } = useParams();
  const { blogs, handleDeleteBlog } = useContext(BlogContext);
  const blogPost = blogs.find((post) => post.id === id);
  const optionsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDelete = () => {
    navigate("/blog");
    handleDeleteBlog(id);
  };
  if (!blogPost) {
    return <div className="text-center mt-20 text-xl">Blog post not found</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <div className="mb-8 flex justify-between items-center relative">
        <Link to={"/"}>
          <span className="flex items-center">
            <MdHome className="text-xl" />
            <span className="ml-1">Home</span>
          </span>
        </Link>
        <span
          onClick={() => setShowOptions(!showOptions)}
          className="text-gray-100 text-2xl cursor-pointer"
        >
          <IoMdMore />
        </span>
        {showOptions && (
          <div
            ref={optionsRef}
            className="absolute bg-gray-700 text-white shadow-lg rounded-md right-0 top-8 w-48"
          >
            <button className="block w-full text-left px-4 py-3 hover:bg-gray-600">
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="block w-full text-left px-4 py-3 hover:bg-gray-600"
            >
              Delete
            </button>
          </div>
        )}
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
