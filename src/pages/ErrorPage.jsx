import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#16161a] text-white p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">
          Oops! The page you are looking for does not exist.
        </p>
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 text-lg">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
