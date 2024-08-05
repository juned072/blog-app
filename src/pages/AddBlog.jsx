import React, { useState, useContext } from "react";
import BlogContext from "../context/BlogContext";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const { addBlog } = useContext(BlogContext);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    date: "",
    description: "",
    image: null,
    imageURL: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData({ ...formData, image: file, imageURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogWithId = {
      ...formData,
      id: Math.floor(Math.random() * 10000).toString(),
    };
    addBlog(blogWithId);
    setFormData({
      title: "",
      author: "",
      date: "",
      description: "",
      image: null,
      imageURL: "",
    });
    navigate("/blog");
  };

  return (
    <div className="bg-[#16161a] text-white p-4">
      <h2 className="text-2xl font-bold mb-6 text-center p-4">Add New Blog</h2>
      <div className="flex justify-center items-center">
        <div className="bg-gray-800 rounded-lg shadow-lg max-w-screen-md mx-auto px-8 py-6 pb-8 w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Publication Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-indigo-500"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
